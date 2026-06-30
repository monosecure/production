import React from 'react';
import './Marquee.css';

const items = [
  'WEB DEVELOPMENT',
  'PAYMENT INTEGRATIONS',
  'PERFORMANCE & SEO',
  'MAINTENANCE & SUPPORT',
  'CYBERSECURITY — COMING SOON',
  'E-COMMERCE',
  'SHOPIFY · WOOCOMMERCE',
  'CUSTOM STOREFRONTS',
];

const Marquee: React.FC = () => {
  return (
    <div className="marquee">
      <div className="marquee__track">
        {items.map((item, i) => (
          <span key={i} className="marquee__item">
            {item} <span className="marquee__dot" aria-hidden="true">•</span>
          </span>
        ))}
      </div>
      <div className="marquee__track" aria-hidden="true">
        {items.map((item, i) => (
          <span key={i} className="marquee__item">
            {item} <span className="marquee__dot" aria-hidden="true">•</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
