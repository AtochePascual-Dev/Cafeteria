const { src, dest, watch, series } = require('gulp'); // npm i -D gulp
const sass = require('gulp-sass')(require('sass')); // npm i -D sass gulp-sass
const postcss = require('gulp-postcss'); // npm i -D gulp-postcss
const autoprefixer = require('autoprefixer'); // npm i -D autoprefixer


function css(done) {
  src('./src/scss/app.scss')
    .pipe(sass({ outputStyle: 'compressed' })) // expanded para debug and  compressed para minificar 
    .pipe(postcss([autoprefixer()]))
    .pipe(dest('./build/css'))
  done();
};


function dev() {
  watch('./src/scss/**/*.scss', css);
};


exports.css = css;
exports.dev = dev;
exports.default = series(css, dev);