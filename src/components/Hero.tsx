import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    // Reveal animation on load
    const elements = hero.querySelectorAll('.hero__animate');
    elements.forEach((el, i) => {
      (el as HTMLElement).style.animationDelay = `${i * 0.1}s`;
      el.classList.add('fade-in-up');
    });
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      {/* Waves are now rendered via CSS background-image, no DOM elements needed */}

      <div className="hero__content">
        <div className="hero__badge hero__animate">
          A WEB DEVELOPMENT STUDIO · EST. 2026
        </div>

        <h1 className="hero__title hero__animate">
          <span className="hero__title-mono">Mono</span>
          <span className="hero__title-secure">Secure.</span>
        </h1>

        <p className="hero__subtitle hero__animate">
          We build bold, fast, conversion-focused e-commerce websites and digital<br />
          storefronts. No fluff. No bloat. Just sharp craft.
        </p>

        <div className="hero__actions hero__animate">
          <button className="hero__btn-primary" onClick={() => scrollTo('services')}>
            SEE OUR SERVICES <span className="hero__btn-arrow">↓</span>
          </button>
          <span className="hero__actions-separator">OR</span>
          <button className="hero__btn-link" onClick={() => scrollTo('contact')}>
            GET IN TOUCH →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
