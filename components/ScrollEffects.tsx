"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add("js-ready");

    // Scroll progress
    const progress = document.querySelector<HTMLElement>(".scroll-progress");
    let ticking = false;
    const update = () => {
      if (!progress) return;
      const h = document.documentElement;
      const s = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
      progress.style.transform = `scaleX(${s})`;
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Reveal observer
    const els = document.querySelectorAll(".fade-up, .line-reveal, .mask-reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -10% 0px" });

    requestAnimationFrame(() => {
      els.forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) el.classList.add("in");
        else io.observe(el);
      });
    });

    const safety = window.setTimeout(() => {
      els.forEach(el => { if (!el.classList.contains("in")) el.classList.add("in"); });
    }, 1800);

    // Live clock in nav
    const clockEl = document.querySelector<HTMLElement>("[data-clock]");
    let clockTimer: number | undefined;
    const fmt = () => {
      const d = new Date();
      const t = d.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit", second: "2-digit", timeZone: "Europe/Berlin" });
      if (clockEl) clockEl.textContent = `MUC · ${t}`;
    };
    fmt();
    clockTimer = window.setInterval(fmt, 1000);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(safety);
      if (clockTimer) window.clearInterval(clockTimer);
      io.disconnect();
    };
  }, [pathname]);

  return <div className="scroll-progress" />;
}
