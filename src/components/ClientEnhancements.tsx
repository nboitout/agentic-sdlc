'use client';

import { useEffect } from 'react';

export function ClientEnhancements() {
  // Sticky nav: reveal after hero scrolls out of view
  useEffect(() => {
    const hero = document.querySelector('.s-hero') as HTMLElement | null;
    const nav  = document.getElementById('sticky-nav') as HTMLElement | null;
    if (!hero || !nav) return;

    const obs = new IntersectionObserver(
      ([entry]) => nav.setAttribute('data-visible', entry.isIntersecting ? 'false' : 'true'),
      { threshold: 0, rootMargin: '-56px 0px 0px 0px' }
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  // Scroll reveal: fade-up for [data-reveal] and staggered [data-reveal-stagger]
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal], [data-reveal-stagger]');

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.07, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <nav id="sticky-nav" className="sticky-nav" aria-label="Site navigation">
      <div className="sticky-inner">
        <a href="#top" className="sticky-logo">Agentic SDLC</a>
        <div className="sticky-menu">
          <a href="#why-now">Why now</a>
          <a href="#how-we-help">How we help</a>
          <a href="#contact" className="sticky-btn">Book a call</a>
        </div>
      </div>
    </nav>
  );
}
