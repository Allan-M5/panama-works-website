const TYPE_TEXT = 'BUILDING WORKS \u00B7 ROAD WORKS \u00B7 WATER WORKS';

document.addEventListener('DOMContentLoaded', async () => {
  // TYPEWRITER
  const el = document.getElementById('typewriter');
  if (el) {
    let i = 0;
    el.textContent = '';
    const timer = setInterval(() => {
      el.innerHTML += TYPE_TEXT[i++];
      if (i === TYPE_TEXT.length) clearInterval(timer);
    }, 90);
  }

  // HERO SLIDESHOW (ALL MEDIA)
  const hero = document.querySelector('.hero');
  if (!hero) return;

  let media = hero.querySelector('.hero-media');
  if (!media) {
    media = document.createElement('div');
    media.className = 'hero-media';
    hero.appendChild(media);
  }

  const res = await fetch('assets/media.json');
  const data = await res.json();

  const HERO_IMAGES = Object.values(data).flat();
  if (!HERO_IMAGES.length) return;

  let index = 0;
  media.style.backgroundImage = 'url(' + HERO_IMAGES[0] + ')';

  setInterval(() => {
    index = (index + 1) % HERO_IMAGES.length;
    media.style.opacity = '0';
    setTimeout(() => {
      media.style.backgroundImage = 'url(' + HERO_IMAGES[index] + ')';
      media.style.opacity = '0.65';
    }, 600);
  }, 8000);
});

// SCROLL REVEAL
if (!window.__scrollRevealInitialized) {
  window.__scrollRevealInitialized = true;
  document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('in-view');
        });
      },
      { threshold: 0.25 }
    );
    document.querySelectorAll('.animate').forEach(el => observer.observe(el));
  });
}


document.addEventListener('DOMContentLoaded', () => {
  const title = document.getElementById('typewriter');
  if (!title) return;

  if (document.querySelector('.hero-logo')) return;

  const logo = document.createElement('img');
  logo.src = 'https://res.cloudinary.com/dicvwaud3/image/upload/v1769780718/panama-works/logo/neoigtde0phmzcrdc53i.png';
  logo.alt = 'Panama Works Limited Logo';
  logo.className = 'hero-logo';

  title.parentNode.insertBefore(logo, title);
});
