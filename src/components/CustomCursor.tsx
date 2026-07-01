import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

/* ─────────────────────────────────────────────────────────────────
   Selector lists — ordered from MOST to LEAST specific.
   The first matching zone wins, so put narrow elements before
   their parent sections.
───────────────────────────────────────────────────────────────── */
const DARK_SELECTORS = [
  // Individual dark elements
  '.hero__btn-primary',
  '.hero__title',          // large black headline text sitting on orange
  '.navbar__cta',
  '.contact__submit',
  '.contact__info-icon',
  // Broad dark sections / components
  '.service-card--dark',
  '.marquee',
  '.footer',
];

const ORANGE_SELECTORS = [
  // Individual orange elements inside otherwise-dark contexts
  '.service-card--dark .service-card__icon',
  // Broad orange (#f5a623) sections
  '.service-card--amber',
  '.hero',
  '.contact',
  '.navbar',
];

function hitTest(x: number, y: number, selectors: string[]): boolean {
  for (const sel of selectors) {
    const matches = document.querySelectorAll<HTMLElement>(sel);
    for (const el of Array.from(matches)) {
      const r = el.getBoundingClientRect();
      if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) {
        return true;
      }
    }
  }
  return false;
}

/* ─────────────────────────────────────────────────────────────────
   Component
───────────────────────────────────────────────────────────────── */
const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;   // actual mouse position
    let dotX = 0, dotY = 0;        // smoothed dot position
    let rafId: number;

    const LERP_FACTOR = 0.25; // lower = smoother/more delayed, higher = snappier

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      const dot = dotRef.current;
      if (dot) {
        // Smoothly interpolate dot position toward mouse position
        dotX += (mouseX - dotX) * LERP_FACTOR;
        dotY += (mouseY - dotY) * LERP_FACTOR;

        dot.style.transform = `translate(${dotX}px, ${dotY}px)`;

        if (hitTest(mouseX, mouseY, DARK_SELECTORS)) {
          dot.style.backgroundColor = '#ffffff';
        } else if (hitTest(mouseX, mouseY, ORANGE_SELECTORS)) {
          dot.style.backgroundColor = '#000000';
        } else {
          dot.style.backgroundColor = '#000000';
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot" />;
};

export default CustomCursor;