"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js-ready");

    // Splash hide
    const splash = document.querySelector(".splash");
    const hideSplash = () => splash?.classList.add("done");
    const splashTimer = window.setTimeout(hideSplash, 1500);

    // Scroll progress + nav bg
    const progress = document.querySelector<HTMLElement>(".scroll-progress");
    const nav = document.querySelector<HTMLElement>(".site-nav");
    let ticking = false;
    const updateProgress = () => {
      if (!progress) return;
      const h = document.documentElement;
      const scrolled = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
      progress.style.transform = `scaleX(${scrolled})`;
      if (nav) {
        if (h.scrollTop > 60) nav.classList.add("scrolled");
        else nav.classList.remove("scrolled");
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Cursor (desktop only)
    let cursor: HTMLElement | null = null;
    let mouseMove: ((e: MouseEvent) => void) | null = null;
    if (window.matchMedia("(min-width: 769px) and (pointer: fine)").matches) {
      cursor = document.querySelector(".cursor");
      if (cursor) {
        let cx = 0, cy = 0, tx = 0, ty = 0;
        mouseMove = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
        window.addEventListener("mousemove", mouseMove);
        const rafLoop = () => {
          cx += (tx - cx) * 0.15;
          cy += (ty - cy) * 0.15;
          if (cursor) cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
          requestAnimationFrame(rafLoop);
        };
        rafLoop();
        // hover targets
        document.querySelectorAll<HTMLElement>("a, button, .magnetic, [data-cursor]")
          .forEach(el => {
            el.addEventListener("mouseenter", () => cursor?.classList.add("hover"));
            el.addEventListener("mouseleave", () => cursor?.classList.remove("hover"));
          });
      }
    }

    // Intersection observer
    const reveals = document.querySelectorAll<HTMLElement>(
      ".fade-up, .word-reveal, .line-reveal, .mask-reveal, .hero-img"
    );
    const setVisible = (el: Element) => el.classList.add("in");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setVisible(e.target);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -10% 0px" });

    // Force visible if already in view
    requestAnimationFrame(() => {
      reveals.forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          setVisible(el);
        } else {
          io.observe(el);
        }
      });
    });

    // Safety net — after 1.5s mark anything still hidden as in
    const safety = window.setTimeout(() => {
      reveals.forEach(el => {
        if (!el.classList.contains("in")) el.classList.add("in");
      });
    }, 1800);

    return () => {
      window.clearTimeout(splashTimer);
      window.clearTimeout(safety);
      window.removeEventListener("scroll", onScroll);
      if (mouseMove) window.removeEventListener("mousemove", mouseMove);
      io.disconnect();
    };
  }, [pathname]);

  return (
    <>
      <div className="splash"><div className="splash-text">Aschheim Next.</div></div>
      <div className="scroll-progress" style={{ transform: "scaleX(0)" }} />
      <div className="cursor" />
      <div className="grain" aria-hidden />
    </>
  );
}
