import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const studioDir = path.join(process.cwd(), 'public', 'Our Studio');

async function getDimensions() {
  const files = fs.readdirSync(studioDir).filter(f => f.endsWith('.webp'));
  const landscape = [];
  const portrait = [];

  for (const file of files) {
    const filePath = path.join(studioDir, file);
    const metadata = await sharp(filePath).metadata();
    
    // Check orientation
    if (metadata.width > metadata.height) {
      landscape.push(file);
    } else {
      portrait.push(file);
    }
  }

  console.log("Landscape Images:", JSON.stringify(landscape));
  console.log("Portrait Images:", JSON.stringify(portrait));
}

getDimensions();
