let timers = new WeakMap();

async function loadMedia(){
  const r = await fetch('assets/media.json');
  return r.json();
}

function buildGallery(frame, images){
  const track = document.createElement('div');
  track.className = 'media-track';

  images.forEach(url=>{
    const item = document.createElement('div');
    item.className = 'media-item';
    item.style.backgroundImage = 'url('+url+')';
    track.appendChild(item);
  });

  frame.appendChild(track);

  let index = 0;
  function auto(){
    index = (index+1)%images.length;
    track.scrollTo({left:index*300,behavior:'smooth'});
  }

  function reset(){
    clearInterval(timers.get(track));
    timers.set(track,setInterval(auto,4500));
  }

  reset();
  ['wheel','mousedown','touchstart'].forEach(e=>track.addEventListener(e,reset));
}

document.addEventListener('DOMContentLoaded',async()=>{
  const MEDIA = await loadMedia();
  document.querySelectorAll('.media-frame').forEach(f=>{
    const k = f.dataset.media;
    if(MEDIA[k]) buildGallery(f,MEDIA[k]);
  });
});
