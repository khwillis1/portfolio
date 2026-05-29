"use client";
import { useEffect } from "react";

/**
 * Directional snap for the hero only. The hero's wave should never come to
 * rest partway up the screen: when scrolling settles anywhere inside the
 * hero→about zone, we commit to one of two resting states — hero fully shown
 * (wave at the bottom edge) or about in view (wave scrolled away above).
 *
 * Unlike CSS scroll-snap (which snaps to the *nearest* point and so bounces a
 * tall hero back to the top on a small downward scroll), this is directional:
 * any meaningful downward scroll commits down to about. Everything below the
 * hero is left as normal continuous scroll. Respects prefers-reduced-motion.
 */
export default function HeroSnap() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const NAV_H = 64; // fixed navbar is h-16 (4rem)
    let timer: ReturnType<typeof setTimeout> | undefined;
    let programmatic = false;

    function settle() {
      // Ignore the scroll events our own smooth-scroll generates.
      if (programmatic) {
        programmatic = false;
        return;
      }
      if (reduce.matches) return;

      const about = document.getElementById("about");
      if (!about) return;

      const aboutTarget = about.offsetTop - NAV_H; // about heading below navbar
      const y = window.scrollY;

      // Only manage the hero→about zone; below about is free scroll.
      if (y <= 0 || y >= aboutTarget) return;

      // Any downward scroll past a small intent threshold commits to about.
      const goDown = y > aboutTarget * 0.25;
      programmatic = true;
      window.scrollTo({ top: goDown ? aboutTarget : 0, behavior: "smooth" });
    }

    function onScroll() {
      clearTimeout(timer);
      timer = setTimeout(settle, 120);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
    };
  }, []);

  return null;
}
