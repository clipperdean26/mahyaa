/* ============================================================
   ASSETS/CSS/STYLE.CSS
   MAHYAA Tour & Travel — Premium Islamic Travel Landing Page
   ============================================================ */

:root {
  --primary: #0D3B32;
  --primary-dark: #082820;
  --primary-light: #1a5247;
  --gold: #C9A227;
  --gold-light: #E5C76B;
  --gold-dark: #a8881f;
  --cream: #F8F5ED;
  --cream-dark: #ede7d3;
  --dark: #1C2522;
  --gray: #6b7570;
  --gray-light: #b8bfbb;
  --white: #FFFFFF;
  --shadow-sm: 0 2px 12px rgba(28,37,34,0.06);
  --shadow-md: 0 10px 40px rgba(28,37,34,0.09);
  --shadow-lg: 0 25px 70px rgba(28,37,34,0.14);
  --shadow-gold: 0 10px 35px rgba(201,162,39,0.28);
  --transition: all 0.45s cubic-bezier(0.25,0.46,0.45,0.94);
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Inter', sans-serif;
}

* { box-sizing: border-box; }

html { scroll-behavior: smooth; scroll-padding-top: 90px; }

body {
  font-family: var(--font-body);
  color: var(--dark);
  background: var(--cream);
  font-weight: 400;
  line-height: 1.75;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

h1,h2,h3,h4,h5,h6 {
  font-family: var(--font-heading);
  font-weight: 600;
  letter-spacing: -0.015em;
  color: var(--primary-dark);
}

a { text-decoration: none; transition: var(--transition); }
img { max-width: 100%; }

::selection { background: var(--gold); color: var(--primary-dark); }

/* Scrollbar */
::-webkit-scrollbar { width: 10px; }
::-webkit-scrollbar-track { background: var(--cream); }
::-webkit-scrollbar-thumb { background: var(--primary); border-radius: 5px; }
::-webkit-scrollbar-thumb:hover { background: var(--primary-dark); }

/* ====== LAYOUT ====== */
section { padding: 110px 0; position: relative; }
.container { max-width: 1280px; }

/* ====== EYEBROW ====== */
.eyebrow {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 22px;
  position: relative;
}
.eyebrow::before {
  content: '';
  display: inline-block;
  width: 32px;
  height: 1px;
  background: var(--gold);
  margin-right: 14px;
}
.eyebrow.center::after {
  content: '';
  display: inline-block;
  width: 32px;
  height: 1px;
  background: var(--gold);
  margin-left: 14px;
}

/* ====== SECTION TITLE ====== */
.section-title {
  font-size: clamp(2rem, 4vw, 3.25rem);
  line-height: 1.15;
  margin-bottom: 24px;
  color: var(--primary-dark);
}
.section-title .accent {
  color: var(--gold);
  font-style: italic;
}
.section-subtitle {
  font-size: 1.05rem;
  color: var(--gray);
  max-width: 640px;
  margin: 0 auto 60px;
  font-weight: 300;
}

.text-gold { color: var(--gold) !important; }
.text-cream { color: var(--cream) !important; }
.bg-cream { background: var(--cream) !important; }

/* ====== BUTTONS ====== */
.btn {
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 0.92rem;
  letter-spacing: 0.02em;
  padding: 14px 30px;
  border-radius: 4px;
  transition: var(--transition);
  border: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}
.btn-gold {
  background: var(--gold);
  color: var(--primary-dark);
  font-weight: 600;
}
.btn-gold:hover {
  background: var(--gold-dark);
  color: var(--white);
  transform: translateY(-3px);
  box-shadow: var(--shadow-gold);
}
.btn-primary-mahyaa {
  background: var(--primary);
  color: var(--white);
  font-weight: 500;
}
.btn-primary-mahyaa:hover {
  background: var(--primary-dark);
  color: var(--gold-light);
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}
.btn-outline-gold {
  background: transparent;
  border: 1px solid var(--gold);
  color: var(--gold);
}
.btn-outline-gold:hover {
  background: var(--gold);
  color: var(--primary-dark);
}
.btn-outline-light {
  background: transparent;
  border: 1px solid rgba(255,255,255,0.45);
  color: var(--white);
}
.btn-outline-light:hover {
  background: rgba(255,255,255,0.12);
  border-color: var(--white);
  color: var(--white);
}
.btn-whatsapp {
  background: #25D366;
  color: var(--white);
  font-weight: 600;
}
.btn-whatsapp:hover {
  background: #1da851;
  color: var(--white);
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(37,211,102,0.35);
}

/* ============================================================
   NAVBAR
   ============================================================ */
.navbar {
  padding: 24px 0;
  transition: var(--transition);
  background: transparent;
}
.navbar.scrolled {
  background: rgba(8,40,32,0.97);
  backdrop-filter: blur(10px);
  padding: 14px 0;
  box-shadow: 0 10px 40px rgba(0,0,0,0.18);
}
.navbar-brand {
  display: flex;
  flex-direction: column;
  line-height: 1;
  padding: 0;
  margin: 0;
}
.brand-main {
  font-family: var(--font-heading);
  font-size: 1.7rem;
  font-weight: 700;
  color: var(--white);
  letter-spacing: 0.08em;
  display: flex;
  align-items: center;
}
.brand-main::after {
  content: '';
  display: inline-block;
  width: 6px;
  height: 6px;
  background: var(--gold);
  border-radius: 50%;
  margin-left: 7px;
}
.brand-sub {
  font-size: 0.62rem;
  letter-spacing: 0.32em;
  color: var(--gold-light);
  text-transform: uppercase;
  font-weight: 500;
  margin-top: 5px;
}
.navbar-nav .nav-link {
  color: rgba(255,255,255,0.85);
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0 13px;
  position: relative;
  padding: 6px 0 !important;
}
.navbar-nav .nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 1.5px;
  background: var(--gold);
  transition: var(--transition);
  transform: translateX(-50%);
}
.navbar-nav .nav-link:hover,
.navbar-nav .nav-link.active {
  color: var(--gold);
}
.navbar-nav .nav-link:hover::after,
.navbar-nav .nav-link.active::after {
  width: 100%;
}
.navbar .btn-gold {
  padding: 10px 22px;
  font-size: 0.85rem;
}
.navbar-toggler {
  border: 1px solid rgba(255,255,255,0.3);
  padding: 6px 10px;
  border-radius: 4px;
}
.navbar-toggler:focus { box-shadow: none; }
.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255,255,255,0.9%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

/* ============================================================
   HERO
   ============================================================ */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 150px 0 90px;
}
.hero-bg {
  position: absolute;
  inset: 0;
  background: url('https://images.unsplash.com/photo-1605235186583-5c786c6b9c6f?w=1920&q=80') center/cover no-repeat;
  z-index: -2;
  transform: scale(1.05);
  animation: heroZoom 20s ease-in-out infinite alternate;
}
@keyframes heroZoom {
  from { transform: scale(1.05); }
  to { transform: scale(1.15); }
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(110deg, rgba(8,40,32,0.95) 0%, rgba(13,59,50,0.85) 50%, rgba(13,59,50,0.55) 100%),
    linear-gradient(to bottom, rgba(8,40,32,0.3) 0%, rgba(8,40,32,0.1) 50%, rgba(8,40,32,0.6) 100%);
  z-index: -1;
}
.hero h1 {
  font-size: clamp(2.4rem, 5vw, 4.4rem);
  color: var(--white);
  line-height: 1.1;
  margin-bottom: 26px;
  font-weight: 700;
}
.hero h1 .accent {
  color: var(--gold-light);
  font-style: italic;
  display: block;
  font-weight: 500;
}
.hero .lead {
  font-size: 1.05rem;
  color: rgba(255,255,255,0.82);
  max-width: 540px;
  margin-bottom: 34px;
  font-weight: 300;
  line-height: 1.8;
}
.cta-group {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}
.trust-badges {
  list-style: none;
  padding: 0;
  margin: 40px 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 18px 28px;
}
.trust-badges li {
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255,255,255,0.9);
  font-size: 0.86rem;
  font-weight: 400;
}
.trust-badges li i {
  color: var(--gold);
  font-size: 1.15rem;
}

/* Glass card */
.glass-card {
  background: rgba(255,255,255,0.07);
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 14px;
  padding: 38px 32px;
  color: var(--white);
  box-shadow: 0 30px 70px rgba(0,0,0,0.3);
  position: relative;
}
.glass-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
}
.glass-card .badge-top {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gold-light);
  margin-bottom: 18px;
  font-weight: 600;
}
.glass-card h3 {
  font-size: 1.55rem;
  color: var(--white);
  margin-bottom: 8px;
  line-height: 1.3;
}
.glass-card p {
  color: rgba(255,255,255,0.72);
  font-size: 0.88rem;
  margin-bottom: 24px;
}
.glass-card .form-control {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  color: var(--white);
  padding: 12px 16px;
  border-radius: 6px;
  margin-bottom: 12px;
  font-size: 0.88rem;
}
.glass-card .form-control::placeholder { color: rgba(255,255,255,0.55); }
.glass-card .form-control:focus {
  background: rgba(255,255,255,0.13);
  border-color: var(--gold);
  color: var(--white);
  box-shadow: none;
}
.glass-card select.form-control option { color: var(--dark); }

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255,255,255,0.6);
  font-size: 0.7rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  z-index: 3;
}
.scroll-indicator::after {
  content: '';
  width: 1px;
  height: 36px;
  background: linear-gradient(to bottom, var(--gold), transparent);
  animation: scrollLine 2s ease-in-out infinite;
}
@keyframes scrollLine {
  0%, 100% { transform: scaleY(0.4); transform-origin: top; }
  50% { transform: scaleY(1); transform-origin: top; }
}

/* ============================================================
   TRUST SECTION
   ============================================================ */
.trust-section {
  background: var(--cream);
  padding: 80px 0;
  border-bottom: 1px solid rgba(13,59,50,0.06);
}
.trust-item {
  text-align: center;
  padding: 24px 16px;
  border-radius: 8px;
  transition: var(--transition);
  height: 100%;
}
.trust-item:hover {
  background: var(--white);
  box-shadow: var(--shadow-sm);
  transform: translateY(-4px);
}
.trust-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 20px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: var(--gold-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 10px 25px rgba(13,59,50,0.2);
}
.trust-item h4 {
  font-size: 1.05rem;
  margin-bottom: 10px;
  color: var(--primary-dark);
}
.trust-item p {
  font-size: 0.86rem;
  color: var(--gray);
  margin: 0;
  line-height: 1.6;
}

/* ============================================================
   ABOUT SECTION
   ============================================================ */
.about-section { background: var(--cream); }
.about-image-wrap {
  position: relative;
  padding-right: 30px;
  padding-bottom: 30px;
}
.about-image-wrap .main-img {
  width: 100%;
  height: 580px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: var(--shadow-lg);
}
.about-image-wrap::before {
  content: '';
  position: absolute;
  top: 30px; left: 30px;
  right: 0; bottom: 0;
  border: 1px solid var(--gold);
  border-radius: 8px;
  z-index: -1;
}
.about-experience {
  position: absolute;
  bottom: -20px;
  right: 0;
  background: var(--primary-dark);
  color: var(--white);
  padding: 24px 30px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: var(--shadow-md);
  border-left: 3px solid var(--gold);
}
.about-experience .exp-num {
  font-family: var(--font-heading);
  font-size: 2.4rem;
  color: var(--gold-light);
  font-weight: 700;
  line-height: 1;
}
.about-experience .exp-text {
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.85);
  line-height: 1.4;
}
.about-text {
  font-size: 1rem;
  color: var(--gray);
  margin-bottom: 28px;
  line-height: 1.85;
}
.about-features {
  list-style: none;
  padding: 0;
  margin: 0 0 30px;
}
.about-features li {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 10px 0;
  font-size: 0.95rem;
  color: var(--dark);
  border-bottom: 1px dashed rgba(13,59,50,0.1);
}
.about-features li:last-child { border-bottom: none; }
.about-features li i {
  color: var(--gold);
  font-size: 1.2rem;
}

/* ============================================================
   PACKAGE SECTION
   ============================================================ */
.package-section { background: var(--white); }
.filter-tabs {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 50px;
}
.filter-btn {
  background: transparent;
  border: 1px solid rgba(13,59,50,0.15);
  color: var(--gray);
  padding: 10px 22px;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
}
.filter-btn:hover {
  border-color: var(--gold);
  color: var(--gold);
}
.filter-btn.active {
  background: var(--primary);
  border-color: var(--primary);
  color: var(--gold-light);
}
.package-card {
  background: var(--white);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(13,59,50,0.05);
}
.package-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: var(--gold);
}
.package-image {
  position: relative;
  height: 240px;
  overflow: hidden;
}
.package-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}
.package-card:hover .package-image img {
  transform: scale(1.08);
}
.package-image::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(8,40,32,0.6) 0%, transparent 50%);
}
.package-label {
  position: absolute;
  top: 16px;
  left: 16px;
  background: var(--gold);
  color: var(--primary-dark);
  padding: 5px 14px;
  border-radius: 50px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  z-index: 2;
}
.package-duration {
  position: absolute;
  bottom: 16px;
  left: 16px;
  color: var(--white);
  font-size: 0.82rem;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 6px;
}
.package-duration i { color: var(--gold-light); }
.package-body {
  padding: 26px 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.package-body h3 {
  font-size: 1.25rem;
  margin-bottom: 8px;
  color: var(--primary-dark);
}
.package-body .desc {
  font-size: 0.86rem;
  color: var(--gray);
  margin-bottom: 18px;
  line-height: 1.6;
}
.package-info {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  border-top: 1px solid rgba(13,59,50,0.07);
  border-bottom: 1px solid rgba(13,59,50,0.07);
  padding: 16px 0;
}
.package-info li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.83rem;
  color: var(--dark);
  padding: 5px 0;
}
.package-info li i {
  color: var(--primary);
  font-size: 0.95rem;
  width: 16px;
}
.package-price {
  margin-bottom: 18px;
  margin-top: auto;
}
.package-price .label {
  font-size: 0.72rem;
  color: var(--gray);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  display: block;
  margin-bottom: 4px;
}
.package-price .amount {
  font-family: var(--font-heading);
  font-size: 1.6rem;
  color: var(--primary-dark);
  font-weight: 700;
}
.package-price .per {
  font-size: 0.78rem;
  color: var(--gray);
  font-family: var(--font-body);
}
.package-actions {
  display: flex;
  gap: 8px;
}
.package-actions .btn {
  padding: 10px 16px;
  font-size: 0.82rem;
  flex: 1;
}

/* ============================================================
   WHY MAHYAA SECTION
   ============================================================ */
.why-section {
  background: var(--cream);
  position: relative;
}
.why-card {
  background: var(--white);
  padding: 38px 30px;
  border-radius: 10px;
  height: 100%;
  position: relative;
  transition: var(--transition);
  border: 1px solid rgba(13,59,50,0.04);
  overflow: hidden;
}
.why-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 3px;
  background: var(--gold);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s ease;
}
.why-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-md);
}
.why-card:hover::before { transform: scaleX(1); }
.why-num {
  font-family: var(--font-heading);
  font-size: 2.6rem;
  font-weight: 700;
  color: rgba(201,162,39,0.18);
  line-height: 1;
  margin-bottom: 14px;
  display: block;
}
.why-icon {
  width: 54px;
  height: 54px;
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: var(--gold-light);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  margin-bottom: 22px;
}
.why-card h4 {
  font-size: 1.15rem;
  margin-bottom: 12px;
  color: var(--primary-dark);
}
.why-card p {
  font-size: 0.88rem;
  color: var(--gray);
  margin: 0;
  line-height: 1.7;
}

/* ============================================================
   JOURNEY TIMELINE
   ============================================================ */
.journey-section {
  background: var(--primary-dark);
  color: var(--white);
  position: relative;
  overflow: hidden;
}
.journey-section::before {
  content: '';
  position: absolute;
  top: -100px; right: -100px;
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(201,162,39,0.08) 0%, transparent 70%);
  border-radius: 50%;
}
.journey-section .section-title { color: var(--white); }
.journey-section .eyebrow { color: var(--gold-light); }
.journey-section .eyebrow::before,
.journey-section .eyebrow.center::after { background: var(--gold-light); }
.journey-wrap {
  position: relative;
  margin-top: 70px;
}
.journey-line {
  position: absolute;
  top: 50px;
  left: 10%;
  right: 10%;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(201,162,39,0.4) 15%, rgba(201,162,39,0.4) 85%, transparent);
  z-index: 1;
}
@media (max-width: 991px) {
  .journey-line { display: none; }
}
.journey-step {
  text-align: center;
  position: relative;
  padding: 0 10px;
}
.step-num {
  font-family: var(--font-heading);
  font-size: 0.78rem;
  color: var(--gold-light);
  letter-spacing: 0.25em;
  margin-bottom: 14px;
  font-weight: 600;
}
.step-icon {
  width: 84px;
  height: 84px;
  background: var(--primary);
  border: 2px solid var(--gold);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 22px;
  position: relative;
  z-index: 2;
  color: var(--gold-light);
  font-size: 1.7rem;
  box-shadow: 0 15px 35px rgba(0,0,0,0.3);
  transition: var(--transition);
}
.journey-step:hover .step-icon {
  background: var(--gold);
  color: var(--primary-dark);
  transform: scale(1.05);
}
.journey-step h4 {
  font-size: 1.15rem;
  margin-bottom: 10px;
  color: var(--white);
}
.journey-step p {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.65);
  line-height: 1.65;
}

/* ============================================================
   VIDEO / SPIRITUAL SECTION
   ============================================================ */
.video-section {
  position: relative;
  min-height: 560px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 120px 0;
  overflow: hidden;
}
.video-bg {
  position: absolute;
  inset: 0;
  background: url('https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=1920&q=80') center/cover no-repeat;
  z-index: -2;
}
.video-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(8,40,32,0.92) 0%, rgba(13,59,50,0.75) 100%);
  z-index: -1;
}
.video-content {
  max-width: 760px;
  margin: 0 auto;
  padding: 0 20px;
}
.video-content h2 {
  font-size: clamp(1.8rem, 4vw, 3rem);
  color: var(--white);
  line-height: 1.25;
  margin-bottom: 30px;
  font-style: italic;
  font-weight: 500;
}
.video-content h2 .gold {
  color: var(--gold-light);
}
.play-btn {
  width: 86px;
  height: 86px;
  border-radius: 50%;
  background: var(--gold);
  color: var(--primary-dark);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  border: none;
  position: relative;
  margin-bottom: 24px;
  transition: var(--transition);
  cursor: pointer;
}
.play-btn::before,
.play-btn::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid var(--gold);
  animation: pulse 2s infinite;
}
.play-btn::after { animation-delay: 0.5s; }
@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(1.6); opacity: 0; }
}
.play-btn:hover {
  transform: scale(1.08);
  background: var(--gold-light);
}
.video-content .play-text {
  color: var(--white);
  font-size: 0.85rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 500;
}

/* ============================================================
   GALLERY
   ============================================================ */
.gallery-section { background: var(--cream); }
.gallery-grid {
  column-count: 3;
  column-gap: 18px;
  margin-top: 50px;
}
@media (max-width: 991px) { .gallery-grid { column-count: 2; } }
@media (max-width: 575px) { .gallery-grid { column-count: 1; } }
.gallery-item {
  break-inside: avoid;
  margin-bottom: 18px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  background: var(--primary-dark);
}
.gallery-item img {
  width: 100%;
  display: block;
  transition: transform 0.6s ease;
}
.gallery-item:hover img { transform: scale(1.08); }
.gallery-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(8,40,32,0.85) 0%, rgba(8,40,32,0.2) 60%, transparent 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px;
  opacity: 0;
  transition: var(--transition);
}
.gallery-item:hover .gallery-overlay { opacity: 1; }
.gallery-overlay .cat {
  color: var(--gold-light);
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 4px;
}
.gallery-overlay .title {
  color: var(--white);
  font-family: var(--font-heading);
  font-size: 1.15rem;
  margin-bottom: 10px;
}
.gallery-overlay .view {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--white);
  font-size: 0.82rem;
  font-weight: 500;
}
.gallery-overlay .view i { color: var(--gold-light); }

/* ============================================================
   TESTIMONIAL
   ============================================================ */
.testimonial-section {
  background: var(--white);
}
.testimonial-carousel {
  max-width: 880px;
  margin: 50px auto 0;
}
.testimonial-card {
  background: var(--cream);
  border-radius: 12px;
  padding: 50px 50px 40px;
  position: relative;
  text-align: center;
  border: 1px solid rgba(201,162,39,0.15);
}
.testimonial-card .quote-mark {
  position: absolute;
  top: 20px;
  left: 30px;
  font-family: var(--font-heading);
  font-size: 6rem;
  color: rgba(201,162,39,0.18);
  line-height: 1;
  font-weight: 700;
}
.testimonial-rating {
  color: var(--gold);
  font-size: 1rem;
  margin-bottom: 18px;
  letter-spacing: 2px;
}
.testimonial-text {
  font-size: 1.1rem;
  font-style: italic;
  color: var(--dark);
  line-height: 1.8;
  margin-bottom: 28px;
  position: relative;
  z-index: 2;
  font-family: var(--font-heading);
  font-weight: 400;
}
.testimonial-author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
}
.testimonial-author img {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--gold);
}
.testimonial-author .info {
  text-align: left;
}
.testimonial-author h5 {
  font-size: 1rem;
  margin: 0 0 2px;
  color: var(--primary-dark);
  font-family: var(--font-body);
  font-weight: 600;
}
.testimonial-author .meta {
  font-size: 0.78rem;
  color: var(--gray);
}
.testimonial-author .meta .dot { color: var(--gold); margin: 0 6px; }

.testimonial-carousel .carousel-control-prev,
.testimonial-carousel .carousel-control-next {
  width: 50px;
  height: 50px;
  background: var(--primary);
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  opacity: 1;
  transition: var(--transition);
}
.testimonial-carousel .carousel-control-prev { left: -70px; }
.testimonial-carousel .carousel-control-next { right: -70px; }
.testimonial-carousel .carousel-control-prev:hover,
.testimonial-carousel .carousel-control-next:hover {
  background: var(--gold);
}
.testimonial-carousel .carousel-control-prev-icon,
.testimonial-carousel .carousel-control-next-icon {
  width: 16px; height: 16px;
}
@media (max-width: 991px) {
  .testimonial-carousel .carousel-control-prev,
  .testimonial-carousel .carousel-control-next {
    position: relative;
    left: auto; right: auto;
    transform: none;
    display: inline-flex;
    margin: 20px 8px 0;
  }
  .testimonial-carousel .carousel-controls {
    text-align: center;
  }
}

/* ============================================================
   PARTNERS
   ============================================================ */
.partners-section {
  background: var(--cream);
  padding: 80px 0;
}
.partner-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 24px 16px;
  border-radius: 8px;
  background: var(--white);
  border: 1px solid rgba(13,59,50,0.05);
  filter: grayscale(100%);
  opacity: 0.65;
  transition: var(--transition);
  height: 130px;
}
.partner-logo:hover {
  filter: grayscale(0);
  opacity: 1;
  transform: translateY(-4px);
  box-shadow: var(--shadow-sm);
  border-color: var(--gold);
}
.partner-logo i {
  font-size: 1.8rem;
  color: var(--primary);
}
.partner-logo .name {
  font-family: var(--font-heading);
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--primary-dark);
  text-align: center;
  letter-spacing: 0.02em;
}
.partner-logo .industry {
  font-size: 0.65rem;
  color: var(--gray);
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

/* ============================================================
   FAQ
   ============================================================ */
.faq-section { background: var(--white); }
.faq-wrap {
  max-width: 820px;
  margin: 50px auto 0;
}
.accordion-item {
  background: var(--cream);
  border: 1px solid rgba(13,59,50,0.07) !important;
  border-radius: 8px !important;
  margin-bottom: 14px;
  overflow: hidden;
}
.accordion-button {
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 0.98rem;
  color: var(--primary-dark);
  padding: 22px 26px;
  background: transparent;
  box-shadow: none !important;
}
.accordion-button:not(.collapsed) {
  background: var(--primary-dark);
  color: var(--gold-light);
}
.accordion-button::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='%23C9A227' d='M8 11L3 6h10z'/%3e%3c/svg%3e");
}
.accordion-button:not(.collapsed)::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='%23E5C76B' d='M8 5l5 5H3z'/%3e%3c/svg%3e");
}
.accordion-body {
  padding: 4px 26px 26px;
  color: var(--gray);
  font-size: 0.92rem;
  line-height: 1.8;
}

/* ============================================================
   CTA SECTION
   ============================================================ */
.cta-section {
  background: var(--primary-dark);
  position: relative;
  padding: 100px 0;
  overflow: hidden;
}
.cta-section::before {
  content: '';
  position: absolute;
  top: -150px; left: -150px;
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(201,162,39,0.12) 0%, transparent 70%);
  border-radius: 50%;
}
.cta-section::after {
  content: '';
  position: absolute;
  bottom: -200px; right: -200px;
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(201,162,39,0.08) 0%, transparent 70%);
  border-radius: 50%;
}
.cta-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 720px;
  margin: 0 auto;
}
.cta-content h2 {
  font-size: clamp(2rem, 4.5vw, 3.2rem);
  color: var(--white);
  margin-bottom: 22px;
  line-height: 1.2;
}
.cta-content h2 .gold { color: var(--gold-light); font-style: italic; }
.cta-content p {
  color: rgba(255,255,255,0.78);
  font-size: 1.05rem;
  margin-bottom: 36px;
  font-weight: 300;
}
.cta-buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 14px;
}

/* ============================================================
   FOOTER
   ============================================================ */
.footer {
  background: var(--dark);
  color: rgba(255,255,255,0.7);
  padding: 80px 0 0;
}
.footer-brand .brand-main { color: var(--white); }
.footer-tagline {
  font-family: var(--font-heading);
  font-style: italic;
  color: var(--gold-light);
  font-size: 1rem;
  margin: 18px 0 16px;
  line-height: 1.6;
}
.footer-desc {
  font-size: 0.88rem;
  color: rgba(255,255,255,0.6);
  margin-bottom: 24px;
  line-height: 1.7;
}
.footer-social {
  display: flex;
  gap: 10px;
}
.footer-social a {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255,255,255,0.06);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  transition: var(--transition);
}
.footer-social a:hover {
  background: var(--gold);
  color: var(--primary-dark);
  transform: translateY(-3px);
}
.footer h5 {
  color: var(--white);
  font-family: var(--font-body);
  font-size: 0.82rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 24px;
  position: relative;
  padding-bottom: 14px;
}
.footer h5::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0;
  width: 30px; height: 2px;
  background: var(--gold);
}
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}
.footer-links li { margin-bottom: 12px; }
.footer-links a {
  color: rgba(255,255,255,0.65);
  font-size: 0.88rem;
  transition: var(--transition);
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.footer-links a:hover {
  color: var(--gold-light);
  transform: translateX(4px);
}
.footer-links a i { font-size: 0.7rem; color: var(--gold); }
.footer-contact li {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  font-size: 0.86rem;
  color: rgba(255,255,255,0.65);
  line-height: 1.6;
}
.footer-contact li i {
  color: var(--gold);
  font-size: 1rem;
  margin-top: 3px;
}
.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.08);
  padding: 22px 0;
  margin-top: 60px;
  font-size: 0.82rem;
  color: rgba(255,255,255,0.5);
}
.footer-bottom a { color: var(--gold-light); }

/* ============================================================
   BACK TO TOP
   ============================================================ */
.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 48px;
  height: 48px;
  background: var(--primary);
  color: var(--gold-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: var(--transition);
  z-index: 999;
  border: none;
  box-shadow: var(--shadow-md);
}
.back-to-top.visible {
  opacity: 1;
  visibility: visible;
}
.back-to-top:hover {
  background: var(--gold);
  color: var(--primary-dark);
  transform: translateY(-4px);
}

/* ============================================================
   SCROLL ANIMATIONS
   ============================================================ */
[data-animate] {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.9s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94);
}
[data-animate].in-view {
  opacity: 1;
  transform: translateY(0);
}
[data-delay="1"] { transition-delay: 0.1s; }
[data-delay="2"] { transition-delay: 0.2s; }
[data-delay="3"] { transition-delay: 0.3s; }
[data-delay="4"] { transition-delay: 0.4s; }
[data-delay="5"] { transition-delay: 0.5s; }

/* ============================================================
   RESPONSIVE
   ============================================================ */
@media (max-width: 991px) {
  .navbar-collapse {
    background: rgba(8,40,32,0.98);
    margin-top: 14px;
    padding: 20px;
    border-radius: 8px;
    backdrop-filter: blur(10px);
  }
  .navbar-nav .nav-link {
    margin: 4px 0;
    padding: 10px 0 !important;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .navbar .btn-gold { margin-top: 14px; width: 100%; }
  section { padding: 80px 0; }
  .hero { padding: 130px 0 70px; }
  .about-image-wrap { padding-right: 20px; padding-bottom: 20px; margin-bottom: 50px; }
  .about-image-wrap .main-img { height: 420px; }
  .about-image-wrap::before { top: 20px; left: 20px; }
  .glass-card { padding: 30px 24px; }
  .testimonial-card { padding: 40px 30px 30px; }
  .testimonial-carousel { margin-top: 40px; }
}
@media (max-width: 575px) {
  section { padding: 65px 0; }
  .hero { padding: 120px 0 60px; min-height: auto; }
  .scroll-indicator { display: none; }
  .cta-group .btn { width: 100%; }
  .trust-badges { gap: 14px 20px; }
  .trust-badges li { font-size: 0.78rem; }
  .glass-card { padding: 26px 20px; }
  .about-image-wrap .main-img { height: 340px; }
  .about-experience { padding: 18px 22px; }
  .about-experience .exp-num { font-size: 2rem; }
  .package-actions { flex-direction: column; }
  .footer { padding: 60px 0 0; }
  .footer-bottom { margin-top: 40px; }
}
