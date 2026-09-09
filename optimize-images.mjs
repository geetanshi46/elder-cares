import sharp from "sharp";
import path from "path";

const input = path.resolve("src/assets/hero-banner.webp");
const output = path.resolve("src/assets/hero-banner-optimized.webp");

await sharp(input)
  .resize({
    width: 1600,
    withoutEnlargement: true,
  })
  .webp({
    quality: 70,
    effort: 6,
  })
  .toFile(output);

console.log("✅ Hero banner optimized!");