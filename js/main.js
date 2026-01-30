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
if (!window.__heroSlideshowInitialized) {
  window.__heroSlideshowInitialized = true;

  const HERO_IMAGES = [
    'https://res.cloudinary.com/dicvwaud3/image/upload/v1769763997/panama-works/backgrounds/panama_contractor_noticeboard.jpg',
    'https://res.cloudinary.com/dicvwaud3/image/upload/v1769763996/panama-works/water/panama_sewer_works_2.jpg',
    'https://res.cloudinary.com/dicvwaud3/image/upload/v1769763994/panama-works/water/panama_sewer_works_1.jpg',
    'https://res.cloudinary.com/dicvwaud3/image/upload/v1769763992/panama-works/water/panama_facility_installation3.jpg',
    'https://res.cloudinary.com/dicvwaud3/image/upload/v1769763990/panama-works/water/panama_facility_installation2.jpg',
    'https://res.cloudinary.com/dicvwaud3/image/upload/v1769763989/panama-works/water/panama_facility_installation1.jpg',
    'https://res.cloudinary.com/dicvwaud3/image/upload/v1769763988/panama-works/water/panama_facility_installation.jpg',
    'https://res.cloudinary.com/dicvwaud3/image/upload/v1769763986/panama-works/road/panama_road_construction_9.jpg',
    'https://res.cloudinary.com/dicvwaud3/image/upload/v1769763984/panama-works/road/panama_road_construction_8.jpg',
    'https://res.cloudinary.com/dicvwaud3/image/upload/v1769763982/panama-works/road/panama_road_construction_7.jpg',
    'https://res.cloudinary.com/dicvwaud3/image/upload/v1769763981/panama-works/road/panama_road_construction_6.jpg',
    'https://res.cloudinary.com/dicvwaud3/image/upload/v1769763979/panama-works/road/panama_road_construction_5.jpg',
    'https://res.cloudinary.com/dicvwaud3/image/upload/v1769763976/panama-works/road/panama_road_construction_4.jpg',
    'https://res.cloudinary.com/dicvwaud3/image/upload/v1769763974/panama-works/road/panama_road_construction_3.jpg',
    'https://res.cloudinary.com/dicvwaud3/image/upload/v1769763972/panama-works/road/panama_road_construction_2.jpg',
    'https://res.cloudinary.com/dicvwaud3/image/upload/v1769763970/panama-works/road/panama_road_construction_17.jpg',
    'https://res.cloudinary.com/dicvwaud3/image/upload/v1769763968/panama-works/road/panama_road_construction_16.jpg',
    'https://res.cloudinary.com/dicvwaud3/image/upload/v1769763966/panama-works/road/panama_road_construction_15.jpg',
    'https://res.cloudinary.com/dicvwaud3/image/upload/v1769763964/panama-works/road/panama_road_construction_14.jpg',
    'https://res.cloudinary.com/dicvwaud3/image/upload/v1769763961/panama-works/road/panama_road_construction_13.jpg',
    'https://res.cloudinary.com/dicvwaud3/image/upload/v1769763960/panama-works/road/panama_road_construction_12.jpg',
    'https://res.cloudinary.com/dicvwaud3/image/upload/v1769763958/panama-works/road/panama_road_construction_11.jpg',
    'https://res.cloudinary.com/dicvwaud3/image/upload/v1769763957/panama-works/road/panama_road_construction_10.jpg',
    'https://res.cloudinary.com/dicvwaud3/image/upload/v1769763955/panama-works/road/panama_road_construction_1.jpg',
    'https://res.cloudinary.com/dicvwaud3/image/upload/v1769763954/panama-works/building/panama_building_construction_3.jpg',
    'https://res.cloudinary.com/dicvwaud3/image/upload/v1769763951/panama-works/building/panama_building_construction_2.jpg',
    'https://res.cloudinary.com/dicvwaud3/image/upload/v1769763948/panama-works/building/panama_building_construction_1.jpg'
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
