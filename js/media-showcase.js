const MEDIA = {
  building: [
    'https://res.cloudinary.com/dicvwaud3/image/upload/v1769763954/panama-works/building/panama_building_construction_1.jpg',
    'https://res.cloudinary.com/dicvwaud3/image/upload/v1769763951/panama-works/building/panama_building_construction_2.jpg',
    'https://res.cloudinary.com/dicvwaud3/image/upload/v1769763948/panama-works/building/panama_building_construction_3.jpg'
  ],
  road: [
    'https://res.cloudinary.com/dicvwaud3/image/upload/v1769763955/panama-works/road/panama_road_construction_1.jpg',
    'https://res.cloudinary.com/dicvwaud3/image/upload/v1769763986/panama-works/road/panama_road_construction_9.jpg',
    'https://res.cloudinary.com/dicvwaud3/image/upload/v1769763984/panama-works/road/panama_road_construction_8.jpg'
  ],
  water: [
    'https://res.cloudinary.com/dicvwaud3/image/upload/v1769763994/panama-works/water/panama_sewer_works_1.jpg',
    'https://res.cloudinary.com/dicvwaud3/image/upload/v1769763992/panama-works/water/panama_facility_installation3.jpg',
    'https://res.cloudinary.com/dicvwaud3/image/upload/v1769763988/panama-works/water/panama_facility_installation.jpg'
  ]
};

function startSlideshows() {
  document.querySelectorAll('.media-frame').forEach(frame => {
    const type = frame.dataset.media;
    const images = MEDIA[type];
    if (!images) return;

    let index = Math.floor(Math.random() * images.length);
    frame.style.backgroundImage = url();

    setInterval(() => {
      index = (index + 1) % images.length;
      frame.style.opacity = 0;
      setTimeout(() => {
        frame.style.backgroundImage = url();
        frame.style.opacity = 0.85;
      }, 400);
    }, 5000);
  });
}

document.addEventListener('DOMContentLoaded', startSlideshows);
