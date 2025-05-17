import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define source and destination directories
const srcDir = path.join(__dirname, '../public/assets');
const destDir = path.join(__dirname, '../dist/assets');

// Ensure the destination directory exists
fs.ensureDirSync(destDir);

// Copy assets
fs.copySync(srcDir, destDir, {
  filter: (src) => {
    // Skip .git directory and other unnecessary files
    return !src.includes('.git') && !src.includes('.DS_Store');
  }
});

console.log('Assets copied successfully!'); 