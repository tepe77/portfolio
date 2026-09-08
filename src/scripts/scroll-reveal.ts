// Scroll Reveal & Animated Number Counter
export function initScrollReveal() {
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const revealElements = document.querySelectorAll<HTMLElement>('[data-reveal]');

  if (isReducedMotion) {
    revealElements.forEach((el) => {
      el.classList.add('revealed');
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    }
  );

  revealElements.forEach((el) => observer.observe(el));

  // Metric Counter Animation
  const metricElements = document.querySelectorAll<HTMLElement>('[data-counter-target]');
  const metricObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const targetVal = parseFloat(el.dataset.counterTarget || '0');
          const unit = el.dataset.counterUnit || '';
          const isDecimal = targetVal % 1 !== 0;

          if (isReducedMotion) {
            el.textContent = `${targetVal.toLocaleString()}${unit}`;
            obs.unobserve(el);
            return;
          }

          const duration = 1200;
          const startTime = performance.now();

          const updateCounter = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = targetVal * easeProgress;

            if (isDecimal) {
              el.textContent = `${currentVal.toFixed(2)}${unit}`;
            } else {
              el.textContent = `${Math.round(currentVal).toLocaleString()}${unit}`;
            }

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              el.textContent = `${isDecimal ? targetVal.toFixed(2) : targetVal.toLocaleString()}${unit}`;
            }
          };

          requestAnimationFrame(updateCounter);
          obs.unobserve(el);
        }
      });
    },
    { threshold: 0.2 }
  );

  metricElements.forEach((el) => metricObserver.observe(el));
}
