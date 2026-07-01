import React, { useRef } from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import type { GithubIconHandle } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import type { LinkedinIconHandle } from './icons/LinkedinIcon';
import { InstagramIcon } from './icons/InstagramIcon';
import type { InstagramIconHandle } from './icons/InstagramIcon';
import { TwitterIcon } from './icons/TwitterIcon';
import type { TwitterIconHandle } from './icons/TwitterIcon';
import './Footer.css';

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const Footer: React.FC = () => {
  const twitterRef = useRef<TwitterIconHandle>(null);
  const linkedinRef = useRef<LinkedinIconHandle>(null);
  const githubRef = useRef<GithubIconHandle>(null);
  const instagramRef = useRef<InstagramIconHandle>(null);

  return (
    <footer className="footer">
      <div className="container footer__top">
        {/* Studio Info */}
        <div className="footer__col footer__col--studio">
          <h4 className="footer__col-label">THE STUDIO</h4>
          <p className="footer__studio-desc">
            MonoSecure is a web development studio building bold, fast,
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
            {/* Twitter */}
            <a
              href="#"
              className="footer__social-btn"
              aria-label="Twitter / X"
              onMouseEnter={() => twitterRef.current?.startAnimation()}
              onMouseLeave={() => twitterRef.current?.stopAnimation()}
            >
              <TwitterIcon ref={twitterRef} size={20} />
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              className="footer__social-btn"
              aria-label="LinkedIn"
              onMouseEnter={() => linkedinRef.current?.startAnimation()}
              onMouseLeave={() => linkedinRef.current?.stopAnimation()}
            >
              <LinkedinIcon ref={linkedinRef} size={20} />
            </a>

            {/* GitHub */}
            <a
              href="#"
              className="footer__social-btn"
              aria-label="GitHub"
              onMouseEnter={() => githubRef.current?.startAnimation()}
              onMouseLeave={() => githubRef.current?.stopAnimation()}
            >
              <GithubIcon ref={githubRef} size={20} />
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="footer__social-btn"
              aria-label="Instagram"
              onMouseEnter={() => instagramRef.current?.startAnimation()}
              onMouseLeave={() => instagramRef.current?.stopAnimation()}
            >
              <InstagramIcon ref={instagramRef} size={20} />
            </a>
          </div>
          <a
            href="mailto:contact@monosecure.in"
            className="footer__email"
          >
            <Mail size={14} strokeWidth={2} style={{ marginRight: 6, verticalAlign: 'middle' }} />
            contact@monosecure.in
            <ArrowUpRight size={13} strokeWidth={2} style={{ marginLeft: 4, verticalAlign: 'middle', opacity: 0.6 }} />
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
        <span>© 2026 MONOSECURE STUDIO</span>
        <span>MADE WITH SHARP EDGES &amp; THICK BORDERS.</span>
      </div>
    </footer>
  );
};

export default Footer;
