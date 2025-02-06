const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const path = require('path');

const inputFolder = 'src/assets/img';
const outputFolder = 'src/assets/img';

(async () => {
  await imagemin([`${inputFolder}/*.{jpg,png}`], {
    destination: outputFolder,
    plugins: [
      imageminMozjpeg({ quality: 75 }),
      imageminPngquant({ quality: [0.6, 0.8] })
    ]
  });
  console.log('Gambar berhasil dioptimasi!');
})();
