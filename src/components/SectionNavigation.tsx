import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

// HashRouter reserves the outer hash for routes; section hashes belong to the route location.
const SectionNavigation = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;
    const measure = () => document.documentElement.style.setProperty(
      "--header-height", `${header.getBoundingClientRect().height}px`
    );
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(header);
    return () => observer.disconnect();
  }, [location.pathname]);

  useLayoutEffect(() => {
    let secondFrame = 0;
    const frame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => {
        if (location.pathname === "/" && location.hash) {
          document.getElementById(location.hash.slice(1))?.scrollIntoView({ block: "start" });
        } else {
          window.scrollTo({ top: 0 });
        }
      });
    });
    return () => { cancelAnimationFrame(frame); cancelAnimationFrame(secondFrame); };
  }, [location.key, location.pathname, location.hash]);
  return null;
};

export default SectionNavigation;