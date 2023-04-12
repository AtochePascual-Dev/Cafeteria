const { src, dest, watch } = require('gulp'); // npm i -D gulp
const sass = require('gulp-sass')(require('sass')); // npm i -D sass gulp-sass


function css(done) {
  src('./src/scss/app.scss')
    .pipe(sass())
    .pipe(dest('./build/css'))
  done();
};


function dev() {
  watch('./src/scss/**/*.scss', css);
};


exports.css = css;
exports.dev = dev;