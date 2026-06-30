import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact">
      {/* Waves rendered via CSS background-image */}

      <div className="container contact__container">
        {/* Left Column */}
        <div className="contact__left">
          <div className="contact__label">CONTACT</div>
          <h2 className="contact__title">
            <span>LET'S</span>
            <span>BUILD.</span>
          </h2>
          <p className="contact__desc">
            Tell us about your store, your timeline, and what's not working
            today. We respond within one business day.
          </p>

          <div className="contact__info-cards">
            <div className="contact__info-card">
              <div className="contact__info-icon">✉️</div>
              <div>
                <div className="contact__info-label">EMAIL</div>
                <a
                  href="mailto:hello@monosecure.studio"
                  className="contact__info-value"
                >
                  hello@monosecure.studio
                </a>
              </div>
            </div>

            <div className="contact__info-card">
              <div className="contact__info-icon">📞</div>
              <div>
                <div className="contact__info-label">PHONE</div>
                <a href="tel:+15550102024" className="contact__info-value">
                  +1 (555) 010-2024
                </a>
              </div>
            </div>

            <div className="contact__info-card">
              <div className="contact__info-icon">📍</div>
              <div>
                <div className="contact__info-label">STUDIO</div>
                <span className="contact__info-value">Remote — operating worldwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column — Form */}
        <div className="contact__right">
          <div className="contact__form-wrapper">
            <div className="contact__form-header">
              <span className="contact__form-title">PROJECT INQUIRY · V1</span>
              <span className="contact__form-required">* All fields required</span>
            </div>

            {submitted ? (
              <div className="contact__success">
                <div className="contact__success-icon">✓</div>
                <h3>Message sent!</h3>
                <p>We'll get back to you within one business day.</p>
                <button
                  className="contact__success-reset"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <div className="contact__form-group">
                  <label htmlFor="name" className="contact__form-label">
                    YOUR NAME
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="contact__form-input"
                    placeholder="Jane Cooper"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="email" className="contact__form-label">
                    EMAIL
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="contact__form-input"
                    placeholder="jane@store.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="subject" className="contact__form-label">
                    SUBJECT
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="contact__form-input"
                    placeholder="New Shopify build, replatform, etc."
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="message" className="contact__form-label">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="contact__form-textarea"
                    placeholder="A few words about your store, traffic, stack, and what you're aiming for..."
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>

                <button type="submit" className="contact__submit">
                  SEND MESSAGE →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
