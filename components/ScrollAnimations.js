"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const headingSelector = [
  ".section-label", ".section-title", ".section-intro", ".services-header",
  ".stats-header", ".contact-page-info", ".contact-form", ".cta-inner",
].join(", ");

const itemSelector = [
  ".service-card-link", ".industry-item", ".stat-card", ".tech-item",
  ".insight-card", ".case-card", ".mv-card", ".value-card", ".office-card",
  ".leader-card", ".step-card", ".pathway-item", ".global-card", ".benefit-card",
].join(", ");

export default function ScrollAnimations() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      const heroChildren = Array.from(
        document.querySelectorAll(".hero-content > *, .hero-enter > *")
      );
      const headings = Array.from(document.querySelectorAll(`main :is(${headingSelector})`));
      const items = Array.from(document.querySelectorAll(`main :is(${itemSelector})`));

      // Page-load entrance for every hero, then staggered reveals as each section enters view.
      gsap.fromTo(
        heroChildren,
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 0.75, stagger: 0.11, ease: "power3.out" }
      );

      gsap.set(headings, { autoAlpha: 0, y: 28 });
      ScrollTrigger.batch(headings, {
        start: "top 88%",
        once: true,
        onEnter: (batch) => gsap.to(batch, {
          autoAlpha: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
          overwrite: true,
        }),
      });

      gsap.set(items, { autoAlpha: 0, y: 42 });
      ScrollTrigger.batch(items, {
        start: "top 90%",
        once: true,
        onEnter: (batch) => gsap.to(batch, {
          autoAlpha: 1,
          y: 0,
          duration: 0.72,
          stagger: 0.09,
          ease: "power3.out",
          overwrite: true,
        }),
      });
    });

    return () => context.revert();
  }, [pathname]);

  return null;
}
