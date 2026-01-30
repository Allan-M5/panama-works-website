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
