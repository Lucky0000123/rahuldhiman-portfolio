import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// On every page change: start at the top and move focus to the page heading,
// so keyboard and screen-reader users land on the new content.
export default function RouteEffects() {
  const { pathname } = useLocation();
  const first = useRef(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (first.current) {
      first.current = false;
      return;
    }
    const id = window.setTimeout(() => {
      const heading = document.querySelector("h1");
      if (!heading) return;
      if (!heading.hasAttribute("tabindex"))
        heading.setAttribute("tabindex", "-1");
      heading.focus({ preventScroll: true });
    }, 50);
    return () => window.clearTimeout(id);
  }, [pathname]);
  return null;
}
