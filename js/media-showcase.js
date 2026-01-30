async function loadMedia(){
  const r = await fetch('assets/media.json');
  return r.json();
}

function buildGallery(frame, images){
  const track = document.createElement('div');
  track.className = 'media-track';

  images.forEach(url => {
    const item = document.createElement('div');
    item.className = 'media-item';
    item.style.backgroundImage = 'url(' + url + ')';
    track.appendChild(item);
  });

  frame.innerHTML = '';
  frame.appendChild(track);

  let index = 0;
  let timer;

  function autoSlide(){
    index = (index + 1) % images.length;
    track.scrollTo({ left: index * 300, behavior: 'smooth' });
  }

  function start(){
    stop();
    timer = setInterval(autoSlide, 6000);
  }

  function stop(){
    if (timer) clearInterval(timer);
  }

  start();
  ['mousedown','touchstart','wheel','mouseenter'].forEach(e => track.addEventListener(e, stop));
  ['mouseleave','touchend'].forEach(e => track.addEventListener(e, start));
}

document.addEventListener('DOMContentLoaded', async () => {
  const MEDIA = await loadMedia();
  document.querySelectorAll('.media-frame').forEach(f => {
    const key = f.dataset.media;
    if (MEDIA[key]) buildGallery(f, MEDIA[key]);
  });
});
