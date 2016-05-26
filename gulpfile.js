var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var reload      = browserSync.reload;
var jade = require('gulp-jade');
var autoprefix = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var filter = require('gulp-filter')
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var jsmin = require('gulp-jsmin');
var uncss = require('gulp-uncss');

gulp.task('templates', function() {

    var YOUR_LOCALS = {};

    return gulp.src('./app/templates/**/*.jade')
        .pipe(jade({
            locals: YOUR_LOCALS
        }))
        .pipe(filter(function (file) {
            return !/\/_/.test(file.path) && !/^_/.test(file.relative);
        }))
        .pipe(gulp.dest('./'))
});

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

gulp.task('jade-watch', ['templates'], reload);

gulp.task('sass', function () {
    return gulp.src('./app/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefix())
        // .pipe(uncss({
        //     html: ['index.html'],
        //     ignore: ['*:hover','*:active','*:link','*:focus']
        // }))
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

gulp.task('watch', ['sass', 'templates', 'js', 'imgs', 'fonts'], function () {

    browserSync({server: './', notify: false});

    gulp.watch('./app/imgs/**/*', ['imgs']);
    gulp.watch('./app/scss/*.scss', ['sass']);
    gulp.watch('./app/templates/*.jade',      ['jade-watch']);
    gulp.watch('./app/js/*.js', ['js']);
});

gulp.task('build', ['sass', 'templates', 'js', 'imgs', 'fonts']);