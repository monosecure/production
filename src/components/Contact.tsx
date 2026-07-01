import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, ArrowRight, Send } from 'lucide-react';
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
              <div className="contact__info-icon"><Mail size={20} strokeWidth={1.75} /></div>
              <div>
                <div className="contact__info-label">EMAIL</div>
                <a
                  href="mailto:hello@monosecure.studio"
                  className="contact__info-value"
                >
                  contact@monosecure.in
                </a>
              </div>
            </div>

            <div className="contact__info-card">
              <div className="contact__info-icon"><Phone size={20} strokeWidth={1.75} /></div>
              <div>
                <div className="contact__info-label">PHONE</div>
                <a href="tel:+919510519175" className="contact__info-value">
                  +91 9510519175
                </a>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/9evgpDVfUw4L5fqf6"
              target="_blank"
              rel="noreferrer"
              className="contact__info-card"
              aria-label="Open studio location in Google Maps"
            >
              <div className="contact__info-icon"><MapPin size={20} strokeWidth={1.75} /></div>
              <div>
                <div className="contact__info-label">STUDIO</div>
                <span className="contact__info-value">B-1/2, Shree Krishna Center, Netaji Rd, Mithakhali, Navrangpura, Ahmedabad, Gujarat 380009</span>
              </div>
            </a>
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
                <div className="contact__success-icon"><CheckCircle size={40} strokeWidth={1.5} /></div>
                <h3>Message sent!</h3>
                <p>We'll get back to you within one business day.</p>
                <button
                  className="contact__success-reset"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message <ArrowRight size={14} strokeWidth={2} style={{ marginLeft: 4, verticalAlign: 'middle' }} />
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
                    placeholder="[NAME]"
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
                    placeholder="[EMAIL_ADDRESS]"
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
                    placeholder="[E-COMM BUILD, AUDITING, ETC]"
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
                  SEND MESSAGE <Send size={15} strokeWidth={2} style={{ marginLeft: 6, verticalAlign: 'middle' }} />
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
