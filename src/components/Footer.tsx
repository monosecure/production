import React from 'react';
import './Footer.css';

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer__top">
        {/* Studio Info */}
        <div className="footer__col footer__col--studio">
          <h4 className="footer__col-label">THE STUDIO</h4>
          <p className="footer__studio-desc">
            MonoSecure is a small web development studio building bold, fast,
            conversion-focused commerce experiences.
          </p>
        </div>

        {/* Navigate */}
        <div className="footer__col footer__col--nav">
          <h4 className="footer__col-label">NAVIGATE</h4>
          <ul className="footer__nav-list">
            {['home', 'services', 'contact'].map((item) => (
              <li key={item}>
                <button
                  className="footer__nav-link"
                  onClick={() => scrollTo(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div className="footer__col footer__col--social">
          <h4 className="footer__col-label">FIND US</h4>
          <div className="footer__socials">
            {[
              { icon: '𝕏', label: 'Twitter', href: '#' },
              { icon: 'in', label: 'LinkedIn', href: '#' },
              { icon: '⌥', label: 'GitHub', href: '#' },
              { icon: '◻', label: 'Instagram', href: '#' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="footer__social-btn"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
          <a
            href="mailto:hello@monosecure.studio"
            className="footer__email"
          >
            hello@monosecure.studio
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="container">
        <div className="footer__divider" />
      </div>

      {/* Large Wordmark */}
      <div className="container footer__wordmark-wrapper">
        <div className="footer__wordmark">
          <span className="footer__wordmark-mono">Mono</span>
          <span className="footer__wordmark-secure">Secure.</span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container footer__bottom">
        <span>© 2026 MONOSECURE STUDIO · PROTOTYPE</span>
        <span>MADE WITH SHARP EDGES &amp; THICK BORDERS.</span>
      </div>
    </footer>
  );
};

export default Footer;
