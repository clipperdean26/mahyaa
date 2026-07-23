/* ============================================================
   MAHYAA Tour & Travel — Main JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ====== NAVBAR SCROLL EFFECT ====== */
  const navbar = document.getElementById('mainNav');
  const backToTop = document.getElementById('backToTop');

  function handleScroll() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
      backToTop.classList.add('visible');
    } else {
      navbar.classList.remove('scrolled');
      backToTop.classList.remove('visible');
    }
  }
  window.addEventListener('scroll', handleScroll);
  handleScroll();

  /* ====== BACK TO TOP ====== */
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ====== CLOSE MOBILE MENU ON CLICK ====== */
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .navbar .btn');
  const navCollapse = document.getElementById('navMenu');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navCollapse.classList.contains('show')) {
        new bootstrap.Collapse(navCollapse).hide();
      }
    });
  });

  /* ====== ACTIVE NAV LINK ON SCROLL ====== */
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.navbar-nav .nav-link');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('href') === '#' + id) {
            item.classList.add('active');
          }
        });
      }
    });
  }, { threshold: 0.3, rootMargin: '-100px 0px -50% 0px' });

  sections.forEach(section => navObserver.observe(section));

  /* ====== SCROLL ANIMATIONS ====== */
  const animateObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        animateObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('[data-animate]').forEach(el => animateObserver.observe(el));

  /* ====== PACKAGE FILTER ====== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const packageCards = document.querySelectorAll('.package-card-wrap');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      packageCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = '';
          // re-trigger animation
          card.classList.remove('in-view');
          requestAnimationFrame(() => {
            setTimeout(() => card.classList.add('in-view'), 30);
          });
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ====== GALLERY MODAL ====== */
  const galleryModal = new bootstrap.Modal(document.getElementById('galleryModal'));
  const galleryImg = document.getElementById('galleryImg');

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const imgSrc = item.dataset.img;
      const title = item.dataset.title;
      galleryImg.src = imgSrc;
      galleryImg.alt = title;
    });
  });

  document.getElementById('galleryModal').addEventListener('hidden.bs.modal', () => {
    galleryImg.src = '';
  });

  /* ====== VIDEO MODAL ====== */
  const videoModal = document.getElementById('videoModal');
  const videoFrame = document.getElementById('videoFrame');
  const videoUrl = 'https://www.youtube.com/embed/7ScADZ4d71s?autoplay=1&rel=0';

  if(videoModal) {
    videoModal.addEventListener('show.bs.modal', () => {
      videoFrame.src = videoUrl;
    });
    videoModal.addEventListener('hidden.bs.modal', () => {
      videoFrame.src = '';
    });
  }

  /* ====== HERO FORM SUBMIT (demo) ====== */
  const heroForm = document.getElementById('heroForm');
  if (heroForm) {
    heroForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = heroForm.querySelector('button[type="submit"]');
      const original = btn.innerHTML;
      btn.innerHTML = '<i class="bi bi-check-circle"></i> Terkirim! Tim kami akan menghubungi Anda';
      btn.style.background = '#1a5247';
      btn.style.color = '#E5C76B';
      heroForm.reset();
      setTimeout(() => {
        btn.innerHTML = original;
        btn.style.background = '';
        btn.style.color = '';
      }, 4000);
    });
  }

  /* ====== SET CURRENT YEAR ====== */
  const currentYearEl = document.getElementById('currentYear');
  if(currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  /* ====== SMOOTH SCROLL OFFSET FIX ====== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target && this.getAttribute('href') !== '#') {
        e.preventDefault();
        const offset = 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });

});
