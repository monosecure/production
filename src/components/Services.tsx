import React from 'react';
import { ShoppingCart, Store, CreditCard, TrendingUp, Wrench, ShieldCheck, ArrowRight, Clock } from 'lucide-react';
import './Services.css';

type LucideIcon = React.FC<{ size?: number; strokeWidth?: number; className?: string }>;

interface Service {
  id: string;
  num: string;
  tag: string;
  Icon: LucideIcon;
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
    Icon: ShoppingCart,
    title: 'Custom E-Commerce',
    description:
      'End-to-end online stores tailored to your brand, products, and checkout flow. Built for speed and conversion.',
    variant: 'amber',
  },
  {
    id: 'web-development',
    num: '02',
    tag: 'PLATFORMS',
    Icon: Store,
    title: 'Web Development',
    description:
      'Clean, performant websites and web apps built from scratch — pixel-perfect design to production-ready code.',
    variant: 'dark',
  },
  {
    id: 'security-testing',
    num: '03',
    tag: 'SECURITY',
    Icon: CreditCard,
    title: 'Security Testing Automation Tools',
    description:
      'Custom-built scripts and pipelines that run pen-test routines automatically — catch vulnerabilities before attackers do.',
    variant: 'light',
  },
  {
    id: 'network-security',
    num: '04',
    tag: 'INFRASTRUCTURE',
    Icon: TrendingUp,
    title: 'Network Security Infrastructure',
    description:
      'Firewall config, VPN setup, intrusion detection, and hardened network architecture designed to hold under pressure.',
    variant: 'amber',
  },
  {
    id: 'web-application-security',
    num: '05',
    tag: 'AUDITS',
    Icon: Wrench,
    title: 'Web Application Security Audit',
    description:
      'Deep-dive reviews of your web app — OWASP Top 10, auth flaws, injection risks, and a full remediation report.',
    variant: 'dark',
  },
  {
    id: 'Saas',
    num: '06',
    tag: 'COMING SOON',
    Icon: ShieldCheck,
    title: 'SaaS Development',
    description:
      'Coming next year — full-stack SaaS products with auth, billing, multi-tenancy, and scalable cloud infrastructure.',
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
                  <service.Icon size={22} strokeWidth={1.75} />
                </div>
                <span className="service-card__num">
                  {service.num} / {service.tag}
                </span>
              </div>

              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.description}</p>

              <div className="service-card__footer">
                {service.comingSoon ? (
                  <span className="service-card__roadmap">
                    <Clock size={13} strokeWidth={2} style={{ marginRight: 5, verticalAlign: 'middle' }} />
                    {service.roadmap}
                  </span>
                ) : (
                  <button
                    className="service-card__link"
                    onClick={() => scrollTo('contact')}
                  >
                    DISCUSS A PROJECT <ArrowRight size={14} strokeWidth={2} style={{ marginLeft: 4, verticalAlign: 'middle' }} />
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
