// Navigation controller for desktop & mobile bottom bar
export function initNavigation() {
  const navbar = document.getElementById('main-navbar');
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-link, .bottom-nav-link');
  const sections = document.querySelectorAll<HTMLElement>('section[id]');

  if (!navbar) return;

  // Scroll effect on top navbar (translucent -> solid with border)
  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active link highlighting via scroll spy
    const scrollPos = window.scrollY + 140;
    let currentActiveId = '';

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (id && scrollPos >= top && scrollPos < top + height) {
        currentActiveId = id;
      }
    });

    // If near the top, default to about or first section
    if (window.scrollY < 200) {
      currentActiveId = 'about';
    }

    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href === `#${currentActiveId}`) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Smooth scroll and active state on bottom nav clicks
  const bottomLinks = document.querySelectorAll<HTMLAnchorElement>('.bottom-nav-link');
  bottomLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetSection = document.getElementById(href.substring(1));
        if (targetSection) {
          const topOffset = targetSection.getBoundingClientRect().top + window.scrollY - 70;
          window.scrollTo({
            top: Math.max(0, topOffset),
            behavior: 'smooth'
          });

          // Instant active state update
          bottomLinks.forEach((l) => l.classList.remove('active'));
          link.classList.add('active');
        }
      }
    });
  });
}
