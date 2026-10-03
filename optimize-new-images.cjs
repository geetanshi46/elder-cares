const sharp = require("sharp");

const images = [
  "src/assets/our-services/Banner photo.jpeg",
  "src/assets/our-services/Compassionate.png",
  "src/assets/our-services/bedside-assistant.jpg",
  "src/assets/our-services/dementia-care.jpeg",
  "src/assets/our-services/family-caregiver.jpeg",
  "src/assets/our-services/lifesaving-skills.jpeg",
  "src/assets/our-services/student-internships.jpeg",

  "src/assets/our-services/Kasturinagar1.JPG",
  "src/assets/our-services/Kothanur1.JPG",
  "src/assets/our-services/kolar.png",
];

async function optimize() {
  for (const input of images) {
    const output = input.replace(/\.(png|jpg|jpeg)$/i, ".webp");

    await sharp(input)
      .webp({
        quality: 82,
        effort: 6,
      })
      .toFile(output);

    console.log(`Optimized: ${input} → ${output}`);
  }

  console.log("\n✅ All our-services images optimized successfully!");
}

optimize().catch((error) => {
  console.error("❌ Image optimization failed:", error);
  process.exit(1);
});