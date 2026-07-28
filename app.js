/* ==========================================================================
   WEBREV - INTERACTIVE JAVASCRIPT
   Mobile navigation drawer, vertical tab switcher, FAQ accordion, smooth scrolling
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Drawer Navigation
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileCloseBtn = document.getElementById('mobile-close-btn');
  const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

  function openMobileNav() {
    mobileNav.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openMobileNav);
  if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMobileNav);
  mobileLinks.forEach(link => link.addEventListener('click', closeMobileNav));

  // 2. Header Scroll Effect
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 3. Portfolio & Capability Showcase Data
  const portfolioData = {
    hospitality: {
      tag: "Resort & Villa Properties",
      title: "Boutique Resorts, Luxury Villas & Event Venues",
      description: "High-performance websites engineered to drive direct client inquiries and reservations. Complete with HD visual galleries, amenities checklists, transparent pricing, and instant booking contact integrations.",
      features: [
        "High-definition room & property gallery showcases",
        "Transparent seasonal rate cards & availability status",
        "Comprehensive amenities grid & location mapping",
        "Direct consultation & booking request integration",
        "Sub-second page loading speed on 4G/5G mobile networks"
      ],
      imgSrc: "assets/farmhouse.jpg",
      imgAlt: "Resort & Villa Showcase Preview"
    },
    corporate: {
      tag: "Hotels & Stays",
      title: "Boutique Stays, Hotels & Executive Suites",
      description: "Modern web platforms crafted for boutique stays and hotels. Designed with a mobile-first philosophy to showcase room categories, guest experiences, and seamless direct inquiries.",
      features: [
        "Executive Suite & Room category showcases",
        "Direct check-in date query & rate breakdown",
        "Interactive Google Maps GPS navigation links",
        "Instant guest contact & consultation submission",
        "SEO optimized architecture for prime search visibility"
      ],
      imgSrc: "assets/hotel.jpg",
      imgAlt: "Hotel & Executive Suite Showcase Preview"
    },
    dining: {
      tag: "Dining & Restaurants",
      title: "Fine Dining, Cafés & Hospitality Outlets",
      description: "Elegant digital platforms for premium dining venues, cafés, and culinary brands. Showcase signature menus, private party bookings, and online reservations effortlessy.",
      features: [
        "Interactive Digital Visual Menus with crisp imagery",
        "Table reservation & private event inquiry forms",
        "Verified customer review integrations",
        "Location, opening hours, and instant direction links",
        "Clean, responsive UI tailored across all screen sizes"
      ],
      imgSrc: "assets/restaurant.jpg",
      imgAlt: "Restaurant & Dining Showcase Preview"
    }
  };

  const tabBtns = document.querySelectorAll('.tab-btn');
  const portTag = document.getElementById('portfolio-tag');
  const portTitle = document.getElementById('portfolio-title');
  const portDesc = document.getElementById('portfolio-desc');
  const portFeatures = document.getElementById('portfolio-features');
  const portImg = document.getElementById('portfolio-img');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const vertical = btn.dataset.vertical;
      if (!portfolioData[vertical]) return;

      // Active state
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const data = portfolioData[vertical];
      if (portTag) portTag.textContent = data.tag;
      if (portTitle) portTitle.textContent = data.title;
      if (portDesc) portDesc.textContent = data.description;
      if (portImg) {
        portImg.src = data.imgSrc;
        portImg.alt = data.imgAlt;
      }

      // Render features list
      if (portFeatures) {
        portFeatures.innerHTML = data.features
          .map(feat => `<li><span class="icon">✓</span> <span>${feat}</span></li>`)
          .join('');
      }
    });
  });

  // 4. FAQ Accordion Toggle
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close all
        faqItems.forEach(i => i.classList.remove('active'));
        // Open target if wasn't active
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // 5. Smooth Scroll Offset adjustment
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
