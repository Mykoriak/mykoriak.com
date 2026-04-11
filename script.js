// Header scroll state
const header = document.getElementById('header');
const hero = document.getElementById('hero');

const heroObserver = new IntersectionObserver(
  ([entry]) => {
    header.classList.toggle('header--scrolled', !entry.isIntersecting);
  },
  { threshold: 0.05 }
);
heroObserver.observe(hero);

// Mobile hamburger toggle
const burger = document.getElementById('nav-burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('nav__links--open');
  burger.classList.toggle('nav__burger--active', isOpen);
  burger.setAttribute('aria-expanded', isOpen);
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('nav__links--open');
    burger.classList.remove('nav__burger--active');
    burger.setAttribute('aria-expanded', 'false');
  });
});

// Scroll reveal
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.card, .section__title, .contact-link, .built-with__quote').forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});
