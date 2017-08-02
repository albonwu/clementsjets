var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var reload      = browserSync.reload;
var pug = require('gulp-pug');
var autoprefix = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var filter = require('gulp-filter')
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var jsmin = require('gulp-jsmin');
var spawn = require('child_process').spawn,
            node;

gulp.task('templates', function() {

    var YOUR_LOCALS = {};

    return gulp.src('./app/templates/**/*.pug')
        .pipe(pug({
            locals: YOUR_LOCALS
        }))
        .pipe(filter(function (file) {
            return !/\/_/.test(file.path) && !/^_/.test(file.relative);
        }))
        .pipe(gulp.dest('./'))
});
/**
 * $ gulp server
 * description: launch the server. If there's a server already running, kill it.
 */
gulp.task('server', function() {
  if (node) node.kill()
  node = spawn('node', ['index.js'], {stdio: 'inherit'})
  node.on('close', function (code) {
    if (code === 8) {
      gulp.log('Error detected, waiting for changes...');
    }
  });
})

// clean up if an error goes unhandled.
process.on('exit', function() {
    if (node) node.kill()
})

gulp.task('imgs', function() {
    return gulp.src('./app/imgs/**/*')
        //.pipe(imagemin())
        .pipe(gulp.dest('./dist/imgs'));
});

gulp.task('fonts', function() {
    return gulp.src('./app/fonts/*')
        .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('setWatch', function() {
    global.isWatching = true;
});

gulp.task('pug-watch', ['templates'], reload);

gulp.task('sass', function () {
    return gulp.src('./app/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefix())
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css'))
        .pipe(reload({stream: true}));
});

gulp.task('js', function() {
    return gulp.src('./app/js/*.js')
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/js'))
        .pipe(reload({stream: true}));
})

gulp.task('data', function() {
    return gulp.src('./app/data/*.txt')
        .pipe(gulp.dest('./dist/data'))
        .pipe(reload({stream: true}));
});

gulp.task('watch', ['sass', 'js', 'imgs', 'fonts', 'data'], function () {

    // browserSync({server: './', notify: false});
    gulp.run('server');

    gulp.watch(['./index.js'], function() {
        gulp.run('server')
    });
    gulp.watch('./app/imgs/**/*', ['imgs']);
    gulp.watch('./app/scss/*.scss', ['sass']);
    gulp.watch('./app/js/*.js', ['js']);
    gulp.watch('./app/data/*.txt', ['data']);
});

gulp.task('build', ['sass', 'js', 'imgs', 'fonts', 'data']);