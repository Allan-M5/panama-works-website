const TYPE_TEXT = 'BUILDING WORKS · ROAD WORKS · WATER WORKS';

document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('typewriter');
  if (!el) return;

  let i = 0;
  el.textContent = '';

  const timer = setInterval(() => {
    el.textContent += TYPE_TEXT[i];
    i++;
    if (i === TYPE_TEXT.length) clearInterval(timer);
  }, 90);
});
document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  if (!hero || document.querySelector('.hero-media')) return;

  const media = document.createElement('div');
  media.className = 'hero-media';
  media.style.backgroundImage =
    'url(https://res.cloudinary.com/dicvwaud3/image/upload/f_auto,q_auto,w_1600/panama-works/road/panama_road_construction_17.jpg)';

  hero.appendChild(media);
});
if (!window.__heroSlideshowInitialized) {
  window.__heroSlideshowInitialized = true;

  const HERO_IMAGES = [
    'https://res.cloudinary.com/dicvwaud3/image/upload/f_auto,q_auto,w_1600/panama-works/road/panama_road_construction_17.jpg',
    'https://res.cloudinary.com/dicvwaud3/image/upload/f_auto,q_auto,w_1600/panama-works/building/panama_building_construction_3.jpg',
    'https://res.cloudinary.com/dicvwaud3/image/upload/f_auto,q_auto,w_1600/panama-works/water/panama_sewer_works_2.jpg'
  ];

  document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    let media = hero.querySelector('.hero-media');
    if (!media) {
      media = document.createElement('div');
      media.className = 'hero-media';
      hero.appendChild(media);
    }

    let i = 0;
    media.style.backgroundImage = 'url(' + HERO_IMAGES[0] + ')';

    setInterval(() => {
      i = (i + 1) % HERO_IMAGES.length;
      media.style.opacity = '0';
      setTimeout(() => {
        media.style.backgroundImage = 'url(' + HERO_IMAGES[i] + ')';
        media.style.opacity = '0.65';
      }, 600);
    }, 8000);
  });
}
if (!window.__scrollRevealInitialized) {
  window.__scrollRevealInitialized = true;

  document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.25 }
    );

    document.querySelectorAll('.animate').forEach(el => observer.observe(el));
  });
}
