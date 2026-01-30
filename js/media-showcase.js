/* =========================
   MEDIA SHOWCASE LOGIC
========================= */

const MEDIA = {
  background: [
    "https://res.cloudinary.com/dicvwaud3/image/upload/v1769763997/panama-works/backgrounds/panama_contractor_noticeboard.jpg"
  ],
  building: [
    "https://res.cloudinary.com/dicvwaud3/image/upload/v1769763954/panama-works/building/panama_building_construction_1.jpg",
    "https://res.cloudinary.com/dicvwaud3/image/upload/v1769763951/panama-works/building/panama_building_construction_2.jpg",
    "https://res.cloudinary.com/dicvwaud3/image/upload/v1769763948/panama-works/building/panama_building_construction_3.jpg"
  ],
  road: [
    "https://res.cloudinary.com/dicvwaud3/image/upload/v1769763955/panama-works/road/panama_road_construction_1.jpg",
    "https://res.cloudinary.com/dicvwaud3/image/upload/v1769763986/panama-works/road/panama_road_construction_9.jpg",
    "https://res.cloudinary.com/dicvwaud3/image/upload/v1769763964/panama-works/road/panama_road_construction_14.jpg"
  ],
  water: [
    "https://res.cloudinary.com/dicvwaud3/image/upload/v1769763994/panama-works/water/panama_sewer_works_1.jpg",
    "https://res.cloudinary.com/dicvwaud3/image/upload/v1769763996/panama-works/water/panama_sewer_works_2.jpg",
    "https://res.cloudinary.com/dicvwaud3/image/upload/v1769763990/panama-works/water/panama_facility_installation2.jpg"
  ]
};

function startSlideshow(el, images) {
  let index = 0;
  const img = document.createElement("img");
  img.src = images[0];
  el.appendChild(img);

  setInterval(() => {
    img.classList.add("fade-out");
    setTimeout(() => {
      index = (index + 1) % images.length;
      img.src = images[index];
      img.classList.remove("fade-out");
    }, 600);
  }, 4500);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-media]").forEach(box => {
    const key = box.dataset.media;
    if (MEDIA[key]) startSlideshow(box, MEDIA[key]);
  });
});
