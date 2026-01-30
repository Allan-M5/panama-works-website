let idleTimers = new WeakMap();

async function loadMedia() {
  const res = await fetch('assets/media.json');
  return await res.json();
}

function setupGallery(frame, images) {
  const track = document.createElement('div');
  track.className = 'media-track';

  images.forEach(url => {
    const item = document.createElement('div');
    item.className = 'media-item';
    item.style.backgroundImage = 'url(' + url + ')';
    track.appendChild(item);
  });

  frame.appendChild(track);

  let index = 0;

  function autoScroll() {
    index = (index + 1) % images.length;
    track.scrollTo({
      left: index * 280,
      behavior: 'smooth'
    });
  }

  function resetIdle() {
    clearInterval(idleTimers.get(track));
    idleTimers.set(track, setInterval(autoScroll, 4500));
  }

  resetIdle();

  ['mousedown', 'wheel', 'touchstart'].forEach(evt =>
    track.addEventListener(evt, resetIdle)
  );
}

document.addEventListener('DOMContentLoaded', async () => {
  const MEDIA = await loadMedia();

  document.querySelectorAll('.media-frame').forEach(frame => {
    const type = frame.dataset.media;
    if (MEDIA[type]) {
      setupGallery(frame, MEDIA[type]);
    }
  });
});
