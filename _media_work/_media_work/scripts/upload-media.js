const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const path = require("path");

cloudinary.config({
  cloud_name: "dicvwaud3",
  api_key: "797418351729342",
  api_secret: "DX2dsF5GremkvAh9TGnWNLxB7LE"
});

const BASE = "C:/Users/ADMIN/Downloads";

const groups = {
  building: ["panama building construction"],
  road: ["panama road construction"],
  water: ["panama sewer works", "panama facility installation"],
  backgrounds: ["panama contractor noticeboard"]
};

async function uploadGroup(folder, patterns) {
  const files = fs.readdirSync(BASE)
    .filter(f =>
      patterns.some(p =>
        f.toLowerCase().startsWith(p)
      )
    );

  for (const file of files) {
    const filePath = path.join(BASE, file);
    console.log(`Uploading ${file} → ${folder}`);
    await cloudinary.uploader.upload(filePath, {
      folder: `panama-works/${folder}`,
      use_filename: true,
      unique_filename: false
    });
  }
}

(async () => {
  try {
    await uploadGroup("building", groups.building);
    await uploadGroup("road", groups.road);
    await uploadGroup("water", groups.water);
    await uploadGroup("backgrounds", groups.backgrounds);
    console.log("✅ ALL MEDIA UPLOADED SUCCESSFULLY");
  } catch (err) {
    console.error("❌ Upload failed:", err);
  }
})();
