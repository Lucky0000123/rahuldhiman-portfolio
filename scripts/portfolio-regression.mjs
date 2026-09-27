// Run against a served production build or the public site.
// BASE_URL=http://127.0.0.1:7788/rahuldhiman-portfolio/ node scripts/portfolio-regression.mjs
// Uses an installed Playwright, or PLAYWRIGHT_MODULE=/absolute/path/to/playwright/index.mjs.
import assert from "node:assert/strict";
import fs from "node:fs/promises";
const { chromium } = await import(
  process.env.PLAYWRIGHT_MODULE || "playwright"
);
const base =
  process.env.BASE_URL || "http://127.0.0.1:7788/rahuldhiman-portfolio/";
const browser = await chromium.launch();
const failures = [];
async function test(name, run, width = 390) {
  const page = await browser.newPage({ viewport: { width, height: 844 } });
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  try {
    await page.goto(`${base}#/home`, { waitUntil: "domcontentloaded" });
    await page.locator(".greeting-text").waitFor();
    await page.waitForTimeout(1600);
    await run(page);
    assert.deepEqual(errors, []);
    console.log(`PASS ${name}`);
  } catch (error) {
    failures.push(name);
    console.error(`FAIL ${name}: ${error.message}`);
    if (process.env.QA_OUTPUT) {
      await fs.mkdir(process.env.QA_OUTPUT, { recursive: true });
      await page.screenshot({ path: `${process.env.QA_OUTPUT}/${name}.png` });
    }
  } finally {
    await page.close();
  }
}
try {
  await test("closed-menu-skips-hidden-links", async (page) => {
    await page.locator(".logo").focus();
    await page.keyboard.press("Tab");
    assert.equal(
      await page.evaluate(() =>
        document.activeElement.getAttribute("aria-expanded")
      ),
      "false"
    );
    await page.keyboard.press("Tab");
    assert.equal(
      await page.evaluate(() =>
        document.activeElement.textContent.includes("Download CV")
      ),
      true
    );
  });
  await test("menu-opens-with-keyboard-and-escape-restores-focus", async (page) => {
    const toggle = page.getByRole("button", { name: "Toggle navigation menu" });
    assert.equal(await toggle.count(), 1);
    await toggle.focus();
    await page.keyboard.press("Enter");
    assert.equal(await toggle.getAttribute("aria-expanded"), "true");
    await page.keyboard.press("Tab");
    assert.equal(
      await page.evaluate(() => document.activeElement.textContent),
      "Home"
    );
    await page.keyboard.press("Escape");
    assert.equal(await toggle.getAttribute("aria-expanded"), "false");
    assert.equal(
      await toggle.evaluate((e) => e === document.activeElement),
      true
    );
  });
  await test("new-route-starts-at-top", async (page) => {
    await page.evaluate(() => {
      document.documentElement.style.scrollBehavior = "auto";
      scrollTo(0, 1800);
    });
    await page.locator('.menu a[href$="/experience"]').click();
    await page.waitForTimeout(1800);
    assert.equal(await page.evaluate(() => location.hash), "#/experience");
    assert.ok(
      await page.evaluate(() => scrollY < 5),
      "new route retained previous scroll position"
    );
    assert.equal(
      await page.evaluate(() => document.activeElement.tagName),
      "H1"
    );
    await page.goBack();
    await page.waitForTimeout(500);
    assert.equal(await page.evaluate(() => location.hash), "#/home");
    assert.ok(await page.evaluate(() => scrollY < 5));
  }, 1440);
  await test("reduced-motion-change-stops-ticker", async (page) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.waitForTimeout(50);
    const text = await page.locator(".greeting-discipline").innerText();
    await page.waitForTimeout(5900);
    assert.equal(await page.locator(".greeting-discipline").innerText(), text);
    await page.emulateMedia({ reducedMotion: "no-preference" });
    await page.waitForTimeout(3100);
    assert.notEqual(
      await page.locator(".greeting-discipline").innerText(),
      text
    );
  });
  await test("issuer-link-is-not-labelled-certificate", async (page) => {
    await page.goto(`${base}#/education`, { waitUntil: "domcontentloaded" });
    const issuer = page.locator(
      '.cert-card a[href="https://www.wencomine.com/"]'
    );
    await issuer.waitFor();
    assert.match(
      (await issuer.getAttribute("aria-label")) || "",
      /issuer website/i
    );
  });
} finally {
  await browser.close();
}
if (failures.length) process.exitCode = 1;
