const { src, dest, watch } = require('gulp'); // npm i -D gulp

function css(done) {
  src('./src/scss/app.scss')
    .pipe(sass())
    .pipe(dest('./build/css'))
  done();
};

exports.css = css;