# Rahul Dhiman — portfolio

Live: https://lucky0000123.github.io/rahuldhiman-portfolio/

Mining technology lead: fleet management systems (Wenco), dispatch and mine control, Autonomous Haulage System (AHS) readiness, operational technology, and in-house digital tools. Content is kept identical to the CV (`public/Rahul_Dhiman_Mining_Technology_CV.pdf`).

## Edit content

All text lives in `src/portfolio.js`. Logos and images live in `src/assets/images/`.

## Run / deploy

```bash
npm ci
npm start                 # local dev server
npm run build             # production build in ./build
npm run deploy            # publishes ./build to the gh-pages branch (GitHub Pages)
```

Source branch: `main`. Published branch: `gh-pages`.

Open-source stats on the Open Source page are regenerated with:

```bash
GITHUB_TOKEN=<token> GITHUB_USERNAME=Lucky0000123 node git_data_fetcher.mjs
```

Built on the MIT-licensed [masterPortfolio](https://github.com/ashutosh1919/masterPortfolio) template by Ashutosh Hathidara.
