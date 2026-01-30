(function heroMedia(){
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const layer = document.createElement('div');
  layer.className = 'hero-media';
  hero.appendChild(layer);

  fetch('assets/media.json')
    .then(r => r.json())
    .then(media => {
      const images = Object.values(media).flat();
      if (!images.length) return;

      let i = 0;
      layer.style.backgroundSize = 'cover';
      layer.style.backgroundPosition = 'center';
      layer.style.backgroundImage = 'url(' + images[0] + ')';

      setInterval(() => {
        i = (i + 1) % images.length;
        layer.style.opacity = 0;
        setTimeout(() => {
          layer.style.backgroundImage = 'url(' + images[i] + ')';
          layer.style.opacity = 0.6;
        }, 700);
      }, 9000);
    });
})();
