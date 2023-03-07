const fs = require('fs');
const { execSync } = require('child_process');
const UglifyJS = require('uglify-js');
const CleanCSS = require('clean-css');

function compressJs() {
  const files = fs.readdirSync('./out/_next/static/chunks', 'utf-8');

  files.forEach((file) => {
    if (file.endsWith('.js')) {
      const filePath = `./out/_next/static/chunks/${file}`;
      const content = fs.readFileSync(filePath, 'utf-8');
      const result = UglifyJS.minify(content);

      fs.writeFileSync(filePath, result.code, 'utf-8');
    }
  });

  console.log('Javascript files compressed.');
}

function compressCss() {
  const files = fs.readdirSync('./out/_next/static/css', 'utf-8');

  files.forEach((file) => {
    if (file.endsWith('.css')) {
      const filePath = `./out/_next/static/css/${file}`;
      const content = fs.readFileSync(filePath, 'utf-8');
      const result = new CleanCSS().minify(content);

      fs.writeFileSync(filePath, result.styles, 'utf-8');
    }
  });

  console.log('CSS files compressed.');
}

function main() {
  compressJs();
  compressCss();
}

main();
