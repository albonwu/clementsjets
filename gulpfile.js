const gulp = require('gulp')
const browserSync = require('browser-sync')
const sass = require('gulp-sass')
const reload = browserSync.reload
const pug = require('gulp-pug')
const autoprefix = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')
const filter = require('gulp-filter')
const rename = require('gulp-rename')
const imagemin = require('gulp-imagemin')
const jsmin = require('gulp-jsmin')
const cache = require('gulp-cache')
const spawn = require('child_process')

gulp.task('templates', function() {
	const YOUR_LOCALS = {}

	return gulp
		.src('./app/templates/**/*.pug')
		.pipe(pug())
		.pipe(
			filter(function(file) {
				return !/\/_/.test(file.path) && !/^_/.test(file.relative)
			})
		)
		.pipe(gulp.dest('./'))
})

gulp.task('imgs', function() {
	return gulp
		.src('./app/imgs/**/*')
		.pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
		.pipe(gulp.dest('./dist/imgs'))
})

gulp.task('fonts', function() {
	return gulp.src('./app/fonts/*').pipe(gulp.dest('./dist/fonts'))
})

gulp.task('setWatch', function() {
	global.isWatching = true
})

gulp.task('pug-watch', ['templates'], reload)

gulp.task('sass', function() {
	return gulp
		.src('./app/scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefix())
		.pipe(cssmin())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('./dist/css'))
		.pipe(reload({ stream: true }))
})

gulp.task('js', function() {
	return gulp
		.src('./app/js/*.js')
		.pipe(jsmin())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('./dist/js'))
		.pipe(reload({ stream: true }))
})

gulp.task('data', function() {
	return gulp
		.src('./app/data/*.txt')
		.pipe(gulp.dest('./dist/data'))
		.pipe(reload({ stream: true }))
})

gulp.task('watch', ['sass', 'js', 'imgs', 'fonts', 'data'], function() {
	// browserSync({server: './', notify: false});

	gulp.watch('./app/imgs/**/*', ['imgs'])
	gulp.watch('./app/scss/*.scss', ['sass'])
	gulp.watch('./app/js/*.js', ['js'])
	gulp.watch('./app/data/*.txt', ['data'])
})

gulp.task('build', ['sass', 'js', 'imgs', 'fonts', 'data'])
