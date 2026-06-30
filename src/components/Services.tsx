import React from 'react';
import './Services.css';

interface Service {
  id: string;
  num: string;
  tag: string;
  icon: string;
  title: string;
  description: string;
  variant: 'amber' | 'dark' | 'light';
  comingSoon?: boolean;
  roadmap?: string;
}

const services: Service[] = [
  {
    id: 'ecommerce',
    num: '01',
    tag: 'FLAGSHIP',
    icon: '🛒',
    title: 'Custom E-Commerce',
    description:
      'End-to-end online stores tailored to your brand, products, and checkout flow. Built for speed and conversion.',
    variant: 'amber',
  },
  {
    id: 'shopify',
    num: '02',
    tag: 'PLATFORMS',
    icon: '🏪',
    title: 'Shopify · WooCommerce',
    description:
      'Headless setups, theme development, and custom apps on Shopify and WooCommerce — without vendor lock-in.',
    variant: 'dark',
  },
  {
    id: 'payments',
    num: '03',
    tag: 'CHECKOUT',
    icon: '💳',
    title: 'Payment Integration',
    description:
      'Stripe, Razorpay, PayPal, and regional gateways — integrated cleanly with proper webhooks and reconciliation.',
    variant: 'light',
  },
  {
    id: 'seo',
    num: '04',
    tag: 'GROWTH',
    icon: '📈',
    title: 'SEO & Performance',
    description:
      "Core Web Vitals, on-page SEO, structured data, and a Lighthouse score we're not afraid to show in public.",
    variant: 'amber',
  },
  {
    id: 'maintenance',
    num: '05',
    tag: 'RELIABILITY',
    icon: '🔧',
    title: 'Maintenance & Support',
    description:
      'Retainers for store owners — bug fixes, feature releases, uptime monitoring, and quarterly performance audits.',
    variant: 'dark',
  },
  {
    id: 'cybersecurity',
    num: '06',
    tag: 'COMING SOON',
    icon: '🛡️',
    title: 'Cybersecurity',
    description:
      'Coming next year — store hardening, vulnerability audits, and PCI-aligned reviews. Built into the same studio.',
    variant: 'light',
    comingSoon: true,
    roadmap: 'ROADMAP · 2027',
  },
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const Services: React.FC = () => {
  return (
    <section id="services" className="services">
      {/* Waves rendered via CSS background-image */}

      <div className="container services__container">
        {/* Header */}
        <div className="services__header">
          <div className="services__label">WHAT WE DO</div>
          <div className="services__header-row">
            <div>
              <h2 className="services__title">SERVICES.</h2>
              <p className="services__subtitle">
                Right now we live and breathe web development for commerce.{' '}
                Cybersecurity offerings ship soon.
              </p>
            </div>
            <div className="services__count">06 DISCIPLINES</div>
          </div>
        </div>

        {/* Grid */}
        <div className="services__grid">
          {services.map((service) => (
            <div
              key={service.id}
              className={`service-card service-card--${service.variant}`}
            >
              <div className="service-card__header">
                <div className="service-card__icon">
                  <span>{service.icon}</span>
                </div>
                <span className="service-card__num">
                  {service.num} / {service.tag}
                </span>
              </div>

              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.description}</p>

              <div className="service-card__footer">
                {service.comingSoon ? (
                  <span className="service-card__roadmap">{service.roadmap}</span>
                ) : (
                  <button
                    className="service-card__link"
                    onClick={() => scrollTo('contact')}
                  >
                    DISCUSS A PROJECT →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
