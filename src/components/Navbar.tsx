import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = ['home', 'services', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <div className="navbar__logo" onClick={() => scrollTo('home')}>
          <span className="navbar__logo-mono">Mono</span>
          <span className="navbar__logo-secure">Secure.</span>
        </div>

        <div className="navbar__links">
          {['home', 'services', 'contact'].map((section) => (
            <button
              key={section}
              className={`navbar__link ${activeSection === section ? 'navbar__link--active' : ''}`}
              onClick={() => scrollTo(section)}
            >
              {section.toUpperCase()}
            </button>
          ))}
        </div>

        <button className="navbar__cta" onClick={() => scrollTo('contact')}>
          <Zap size={13} strokeWidth={2.5} style={{ marginRight: 6, verticalAlign: 'middle' }} />
          START A PROJECT
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
