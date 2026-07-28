'use client';

import { useState } from 'react';

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Navigation */}
      <header class="header">
        <div class="container nav-container">
          <a href="#" class="logo brand-logo">
            WEBREV<span>.</span>
          </a>

          <nav class={`nav-links ${menuOpen ? 'active' : ''}`}>
            <a href="#verticals" onClick={closeMenu}>What We Build</a>
            <a href="#portfolio" onClick={closeMenu}>Proof of Work</a>
            <a href="#process" onClick={closeMenu}>Process</a>
            <a href="#leadership" onClick={closeMenu}>Leadership</a>
            <a href="#contact" class="btn btn-secondary" onClick={closeMenu}>
              Get In Touch
            </a>
          </nav>

          <button
            class="hamburger"
            onClick={toggleMenu}
            aria-label="Toggle Navigation Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section style={{ paddingTop: '10rem', paddingBottom: '6rem' }}>
          <div class="container">
            <span class="section-tag">High-Performance Web Studio</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Websites Built to Convert Guests & Diners.
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '680px', marginBottom: '2.5rem' }}>
              We design and engineer bespoke, ultra-fast websites specifically for Farmhouses, Resorts, Hotels, and Fine Dining Restaurants across Maharashtra.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="https://wa.me/" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Connect on WhatsApp ⚡
              </a>
              <a href="#portfolio" class="btn btn-secondary">
                View Proof of Work
              </a>
            </div>
          </div>
        </section>

        {/* Verticals */}
        <section id="verticals">
          <div class="container">
            <span class="section-tag">Targeted Solutions</span>
            <h2>Specialized Verticals</h2>
            <div class="grid-3">
              <div class="card">
                <h3>Farmhouses & Resorts</h3>
                <p>
                  Direct weekend booking channels, high-definition photo galleries, location highlights, and amenity showcases designed to drive direct inquiries.
                </p>
              </div>
              <div class="card">
                <h3>Hotels & Stays</h3>
                <p>
                  Smooth room category exploration, event space listings, seamless corporate booking inquiries, and WhatsApp integrations.
                </p>
              </div>
              <div class="card">
                <h3>Restaurants & Dining</h3>
                <p>
                  Interactive digital menus, table reservation requests, chef showcases, and Google Maps location optimizations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio / Proof of Work */}
        <section id="portfolio">
          <div class="container">
            <span class="section-tag">Mockup Showcases</span>
            <h2>Proof of Work</h2>
            <div class="grid-3">
              <div class="portfolio-card">
                <div class="portfolio-thumb">
                  <span>[ Farmhouse Concept Mockup ]</span>
                </div>
                <div class="portfolio-body">
                  <span class="portfolio-tag">Resort / Villa</span>
                  <h3>The Glass House Estate</h3>
                  <p>Designed for weekend getaways with instant direct WhatsApp booking conversion.</p>
                </div>
              </div>

              <div class="portfolio-card">
                <div class="portfolio-thumb">
                  <span>[ Boutique Hotel Mockup ]</span>
                </div>
                <div class="portfolio-body">
                  <span class="portfolio-tag">Hotel & Stay</span>
                  <h3>Aura Boutique Stays</h3>
                  <p>Streamlined room selection and event inquiries with near-zero page load delay.</p>
                </div>
              </div>

              <div class="portfolio-card">
                <div class="portfolio-thumb">
                  <span>[ Fine Dining Mockup ]</span>
                </div>
                <div class="portfolio-body">
                  <span class="portfolio-tag">Restaurant</span>
                  <h3>Saffron & Stone Bistro</h3>
                  <p>Mobile-first menu presentation and frictionless reservation flow.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process">
          <div class="container">
            <span class="section-tag">Execution</span>
            <h2>How We Build</h2>
            <div class="grid-3">
              <div class="card">
                <h3>01. Discovery</h3>
                <p>We analyze your business goals, target clientele, and local positioning across Maharashtra.</p>
              </div>
              <div class="card">
                <h3>02. Design & Code</h3>
                <p>Clean, mobile-first design built with modern web code for maximum speed and conversion.</p>
              </div>
              <div class="card">
                <h3>03. Deployment</h3>
                <p>Domain setup, Google Maps optimization, and direct WhatsApp CTA integration.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section id="leadership">
          <div class="container">
            <span class="section-tag">Founders</span>
            <h2>Leadership Team</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', marginTop: '0.5rem' }}>
              Hands-on leadership focused on delivering measurable growth for hospitality brands.
            </p>

            <div class="founders-grid">
              <div class="founder-card">
                <h4>Tanish Bhagat</h4>
                <div class="founder-role">Founder & Financial Head</div>
              </div>
              <div class="founder-card">
                <h4>Imaad Mapkar</h4>
                <div class="founder-role">Founder & Marketing Head</div>
              </div>
              <div class="founder-card">
                <h4>Ronit Dhole</h4>
                <div class="founder-role">Founder & Research Dept. Head</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact">
          <div class="container">
            <span class="section-tag">Get Started</span>
            <h2>Let's Build Your Website</h2>
            
            <div class="contact-box">
              <div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Direct Email</p>
                <a href="mailto:webrevinfo@gmail.com" class="contact-link">
                  webrevinfo@gmail.com
                </a>
              </div>

              <div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Instant Messaging</p>
                <a href="https://wa.me/" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Chat via WhatsApp ⚡
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer class="footer">
        <div class="container">
          <p>
            Made with ⚡ by <strong>Webrev</strong>
          </p>
        </div>
      </footer>
    </>
  );
}