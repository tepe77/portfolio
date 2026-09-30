// Theme management controller with persistence and system preference sync

export type Theme = 'dark' | 'light';

export function getPreferredTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  const saved = localStorage.getItem('theme') as Theme | null;
  if (saved === 'dark' || saved === 'light') {
    return saved;
  }
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export function applyTheme(theme: Theme) {
  if (typeof document === 'undefined') return;
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem('theme', theme);
  } catch {
    // localStorage might be unavailable in private browsing
  }

  // Update theme-color meta tag
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute('content', theme === 'light' ? '#F8FAFC' : '#060B12');
  }

  // Update button state and icon
  const btn = document.getElementById('theme-toggle-btn');
  if (btn) {
    const isLight = theme === 'light';
    btn.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
    btn.setAttribute('title', isLight ? 'Switch to dark theme' : 'Switch to light theme');
    btn.classList.toggle('is-light', isLight);
  }

  // Dispatch custom event for canvas and reactive SVG listeners
  window.dispatchEvent(new CustomEvent('theme-changed', { detail: { theme } }));
}

export function toggleTheme(event?: MouseEvent) {
  const current = (document.documentElement.dataset.theme as Theme) || getPreferredTheme();
  const next: Theme = current === 'dark' ? 'light' : 'dark';

  const isReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!('startViewTransition' in document) || isReducedMotion) {
    applyTheme(next);
    return;
  }

  // Calculate coordinates: anchor to the theme toggle button center for maximum visual consistency
  const btn = document.getElementById('theme-toggle-btn');
  let x = window.innerWidth / 2;
  let y = 30;

  if (btn) {
    const rect = btn.getBoundingClientRect();
    x = rect.left + rect.width / 2;
    y = rect.top + rect.height / 2;
  } else if (event && event.clientX && event.clientY) {
    x = event.clientX;
    y = event.clientY;
  }

  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  );

  // Freeze background CSS transitions during view-transition snapshot generation
  document.documentElement.classList.add('theme-transitioning');

  const transition = (document as any).startViewTransition(() => {
    applyTheme(next);
  });

  transition.ready.then(() => {
    const animation = document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`
        ]
      },
      {
        duration: 520,
        easing: 'cubic-bezier(0.2, 0, 0, 1)',
        pseudoElement: '::view-transition-new(root)'
      }
    );

    animation.finished.finally(() => {
      document.documentElement.classList.remove('theme-transitioning');
    });
  });

  transition.finished.finally(() => {
    document.documentElement.classList.remove('theme-transitioning');
  });
}

export function initThemeToggle() {
  const btn = document.getElementById('theme-toggle-btn');
  if (btn) {
    btn.onclick = (e) => toggleTheme(e);

    // Sync initial button state
    const current = (document.documentElement.dataset.theme as Theme) || getPreferredTheme();
    const isLight = current === 'light';
    btn.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
    btn.setAttribute('title', isLight ? 'Switch to dark theme' : 'Switch to light theme');
    btn.classList.toggle('is-light', isLight);
  }

  // Listen to OS preference changes if user hasn't explicitly set a theme
  if (window.matchMedia) {
    const media = window.matchMedia('(prefers-color-scheme: light)');
    media.addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        applyTheme(e.matches ? 'light' : 'dark');
      }
    });
  }
}
