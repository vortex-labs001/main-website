/* ==========================================================================
   WEBREV - INTERACTIVE JAVASCRIPT
   Mobile nav, vertical tabs, ROI calculator, FAQ accordion, WhatsApp link generator
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

  // 3. Portfolio Vertical Tab Switcher Data
  const portfolioData = {
    farmhouse: {
      tag: "⚡ Farmhouses & Resorts Track",
      title: "Weekend Villas, Private Pool Resorts & Event Venues",
      description: "Designed for properties in Lonavala, Alibaug, Karjat, Igatpuri, and Mahabaleshwar. Built to convert weekend stay inquiries into direct paid WhatsApp bookings without 20% OTA commissions.",
      features: [
        "High-definition Villa & Pool photo gallery showcase",
        "Transparent Weekend vs Weekday tariff display",
        "Amenities checklist (Private Pool, BBQ, Wi-Fi, Caretaker, Music)",
        "Instant 1-Click WhatsApp Room Availability Check",
        "Google Maps GPS location link & driver direction guide"
      ],
      imgSrc: "assets/farmhouse.jpg",
      imgAlt: "Farmhouse & Resort Landing Page Preview"
    },
    hotel: {
      tag: "🏨 Hotels & Stays Track",
      title: "Boutique Hotels, City Lodges & Bed & Breakfasts",
      description: "Tailored for boutique hotels and stays in Pune, Mumbai, Nashik, and Kolhapur. Give corporate and holiday travelers a fast, modern mobile experience with direct room availability.",
      features: [
        "Executive Room, Suite & Deluxe category showcases",
        "Dynamic Tariff & Seasonal Discount Cards",
        "Direct Check-in & Check-out date selection flow",
        "Instant WhatsApp Reservation & Advance Payment request",
        "Complimentary Breakfast, Parking & House Rules guide"
      ],
      imgSrc: "assets/hotel.jpg",
      imgAlt: "Hotel & Stay Website Showcase Preview"
    },
    restaurant: {
      tag: "🍽️ Restaurants & Cafés Track",
      title: "Dining Venues, Fine Dining, Highway Dhabas & Cafes",
      description: "Built for local restaurants and popular food spots across Maharashtra. Showcase your best signature dishes and let guests reserve tables or place party orders on WhatsApp.",
      features: [
        "Interactive Digital Visual Menu with HD food photography",
        "Specialties of the Day & Chef's Recommendations highlight",
        "Weekend Table Reservation & Bulk Party inquiry flow",
        "Google Review badge integration to prove 4.5+ star rating",
        "1-Tap Call to Order or Get Driving Directions"
      ],
      imgSrc: "assets/restaurant.jpg",
      imgAlt: "Restaurant & Cafe Menu Showcase Preview"
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
      portTag.textContent = data.tag;
      portTitle.textContent = data.title;
      portDesc.textContent = data.description;
      portImg.src = data.imgSrc;
      portImg.alt = data.imgAlt;

      // Render features list
      portFeatures.innerHTML = data.features
        .map(feat => `<li><span class="icon">✓</span> <span>${feat}</span></li>`)
        .join('');
    });
  });

  // 4. Interactive Commission / Savings Calculator
  const revenueSlider = document.getElementById('revenue-slider');
  const revenueValDisplay = document.getElementById('revenue-val');
  const propertyTypeSelect = document.getElementById('calc-property-type');
  const savingsDisplay = document.getElementById('savings-display');
  const calcWhatsappBtn = document.getElementById('calc-whatsapp-btn');

  function updateSavings() {
    if (!revenueSlider || !savingsDisplay) return;
    const monthlyRevenue = parseInt(revenueSlider.value, 10);
    revenueValDisplay.textContent = `₹${(monthlyRevenue / 100000).toFixed(1)} Lakh`;

    // Estimate 18% average OTA commission fee saved
    const estimatedSavings = Math.round(monthlyRevenue * 0.18);
    const formattedSavings = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(estimatedSavings);
    
    savingsDisplay.textContent = `${formattedSavings} / yr`;

    // Update dynamic WhatsApp link (leaving number empty as requested, e.g. wa.me/?text=...)
    const propType = propertyTypeSelect ? propertyTypeSelect.value : 'property';
    const message = encodeURIComponent(`Hi Webrev team! I run a ${propType} in Maharashtra with ~₹${(monthlyRevenue / 100000).toFixed(1)}L monthly booking revenue. I calculated that I can save ~${formattedSavings} in OTA commissions. I want a fast WhatsApp booking site built in 5 days!`);
    
    if (calcWhatsappBtn) {
      calcWhatsappBtn.href = `https://wa.me/?text=${message}`;
    }
  }

  if (revenueSlider) {
    revenueSlider.addEventListener('input', updateSavings);
  }
  if (propertyTypeSelect) {
    propertyTypeSelect.addEventListener('change', updateSavings);
  }
  updateSavings();

  // 5. FAQ Accordion Toggle
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

  // 6. Smooth Scroll Offset adjustment
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
