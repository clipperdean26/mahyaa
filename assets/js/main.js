// Navbar scroll effect
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});

// Collapse mobile menu on link click
document.querySelectorAll('#navMenu .nav-link-mahyaa').forEach(link=>{
  link.addEventListener('click', ()=>{
    const menu = document.getElementById('navMenu');
    if(menu.classList.contains('show')){
      new bootstrap.Collapse(menu).hide();
    }
  });
});

// Package filter
document.querySelectorAll('.filter-tabs .btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.filter-tabs .btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.package-item').forEach(item=>{
      if(filter==='all' || item.dataset.cat.includes(filter)){
        item.style.display='block';
      } else {
        item.style.display='none';
      }
    });
  });
});

// Gallery modal
const imgModal = document.getElementById('imgModal');
imgModal.addEventListener('show.bs.modal', (e)=>{
  const trigger = e.relatedTarget;
  document.getElementById('imgModalPic').src = trigger.getAttribute('data-img');
  document.getElementById('imgModalCaption').textContent = trigger.getAttribute('data-caption');
});

// Video modal (placeholder YouTube embed, stops on close)
const videoModal = document.getElementById('videoModal');
videoModal.addEventListener('show.bs.modal', ()=>{
  // TODO: ganti GANTI_ID_VIDEO dengan ID video YouTube perjalanan jamaah Mahyaa Tour
  document.getElementById('ytFrame').src = 'https://www.youtube.com/embed/GANTI_ID_VIDEO?autoplay=1&mute=0';
});
videoModal.addEventListener('hide.bs.modal', ()=>{
  document.getElementById('ytFrame').src = '';
});

// Scroll reveal (simple IntersectionObserver, respects reduced motion)
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!prefersReduced){
  // apply per-element stagger delay from data-aos-delay
  document.querySelectorAll('[data-aos]').forEach(el=>{
    const delay = el.getAttribute('data-aos-delay');
    if(delay) el.style.transitionDelay = (parseInt(delay,10)/1000) + 's';
  });

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('aos-animate');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:0.15});
  document.querySelectorAll('[data-aos]').forEach(el=>observer.observe(el));

  // Gold divider grow-in
  const dividerObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('grown');
        dividerObserver.unobserve(entry.target);
      }
    });
  }, {threshold:0.6});
  document.querySelectorAll('.divider-gold').forEach(el=>dividerObserver.observe(el));

  // Timeline dots pulse-in with stagger
  const dotObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry,i)=>{
      if(entry.isIntersecting){
        setTimeout(()=>entry.target.classList.add('dot-in'), i*80);
        dotObserver.unobserve(entry.target);
      }
    });
  }, {threshold:0.4});
  document.querySelectorAll('.timeline-dot').forEach(el=>dotObserver.observe(el));

  // Subtle hero parallax on scroll
  const heroSection = document.querySelector('.hero');
  window.addEventListener('scroll', ()=>{
    const y = window.scrollY;
    if(y < window.innerHeight){
      heroSection.style.backgroundPosition = `center ${y * 0.25}px`;
    }
  }, {passive:true});
} else {
  document.querySelectorAll('[data-aos]').forEach(el=>el.classList.add('aos-animate'));
  document.querySelectorAll('.divider-gold').forEach(el=>el.classList.add('grown'));
  document.querySelectorAll('.timeline-dot').forEach(el=>el.classList.add('dot-in'));
}
