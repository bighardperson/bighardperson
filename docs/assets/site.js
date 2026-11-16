(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#site-nav');
  const stored = (() => { try { return localStorage.getItem('hy-theme'); } catch (_) { return null; } })();
  if (stored === 'light' || stored === 'dark') root.dataset.theme = stored;
  else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) root.dataset.theme = 'dark';
  themeButton?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('hy-theme', root.dataset.theme); } catch (_) {}
  });
  menuButton?.addEventListener('click', () => {
    const open = !menu.classList.contains('open');
    menu.classList.toggle('open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Open navigation');
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      menu?.classList.remove('open');
      menuButton?.setAttribute('aria-expanded', 'false');
      menuButton?.setAttribute('aria-label', 'Open navigation');
    }
  });
  document.querySelector('#year').textContent = new Date().getFullYear();
  const progress = document.querySelector('.reading-progress');
  let tick = false;
  const onScroll = () => {
    if (tick) return;
    tick = true;
    requestAnimationFrame(() => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (max > 0 ? Math.min(100, 100 * window.scrollY / max) : 0) + '%';
      tick = false;
    });
  };
  window.addEventListener('scroll', onScroll, {passive: true});
  onScroll();
  if ('IntersectionObserver' in window) {
    const links = [...document.querySelectorAll('.nav-links a')];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        links.forEach(link => {
          const active = link.getAttribute('href') === '#' + entry.target.id;
          link.classList.toggle('active', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, {rootMargin: '-15% 0px -65% 0px'});
    document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
  }
  const copyButton = document.querySelector('[data-copy-email]');
  copyButton?.addEventListener('click', async () => {
    const original = copyButton.innerHTML;
    try {
      await navigator.clipboard.writeText('2023311327@stu.hit.edu.cn');
      copyButton.textContent = 'Email copied ✓';
      window.setTimeout(() => { copyButton.innerHTML = original; }, 1800);
    } catch (_) {
      window.location.href = 'mailto:2023311327@stu.hit.edu.cn';
    }
  });
})();
