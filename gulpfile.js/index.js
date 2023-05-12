const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const minimist = require('minimist');
const gulpSass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const { envOptions } = require('./envOptions');

// 指令
//   $ gulp default --env develop 開發模式
//   $ gulp build --env production 編譯模式
const options = minimist(process.argv.slice(2), envOptions)
console.log(options);
console.log(`目前模式: ${options.env}`);

function copyFile() {
  return gulp.src(envOptions.copyFile.src)
    .pipe(gulp.dest(envOptions.copyFile.path))
    .pipe(browserSync.stream())
}

function layoutHTML() {
  return gulp.src(envOptions.html.src)
    .pipe($.plumber())
    .pipe($.frontMatter())
    .pipe(
      $.layout((file) => {
        return file.frontMatter;
      })
    )
    .pipe(gulp.dest(envOptions.html.path))
    .pipe(browserSync.stream())
}

function sass() {
  return gulp.src(envOptions.style.src)
    .pipe($.sourcemaps.init())
    .pipe(gulpSass().on('error', gulpSass.logError))
    .pipe($.postcss())
    .pipe($.if(options.env === 'production', $.cleanCss()))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(envOptions.style.path))
    .pipe(browserSync.stream())
}

function babel() {
  return gulp.src(envOptions.javascript.src)
    .pipe($.sourcemaps.init())
    .pipe($.babel({
      presets: ['@babel/env'],
    }))
    .pipe($.concat(envOptions.javascript.concat))
    .pipe($.if(options.env === 'production', $.uglify({
      compress: {
        drop_console: true
      }
    })))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(envOptions.javascript.path))
    .pipe(browserSync.stream())
}

function vendorJs() {
  return gulp.src(envOptions.vendors.src)
    .pipe($.concat(envOptions.vendors.concat))
    .pipe($.if(options.env === 'production', $.uglify()))
    .pipe(gulp.dest(envOptions.vendors.path))
}

function browser() {
  return browserSync.init({
    server: {
      baseDir: envOptions.browserDir,
      reloadDebounce: 2000
    }
  });
}

function imageMin() {
  return gulp.src(envOptions.images.src)
    .pipe($.if(options.env === 'production', $.imagemin()))
    .pipe(gulp.dest(envOptions.images.path))
}

function clean() {
  return gulp.src(envOptions.clean.src, {
      read: false,
      allowEmpty: true
    })
    .pipe($.clean())
}

function deploy() {
  return gulp.src(envOptions.deploySrc)
    .pipe($.ghPages());
}

function watch() {
  gulp.watch(envOptions.html.src, layoutHTML);
  gulp.watch(envOptions.html.ejsSrc, layoutHTML);
  gulp.watch(envOptions.javascript.src, babel);
  gulp.watch(envOptions.javascript.src, copyFile);
  gulp.watch(envOptions.style.src, sass);
}

exports.deploy = deploy;
exports.clean = clean;

exports.build = gulp.series(clean, copyFile, layoutHTML, sass, babel, vendorJs, imageMin);
exports.default = gulp.series(clean, copyFile, layoutHTML, sass, babel, vendorJs, imageMin, gulp.parallel(browser, watch));
