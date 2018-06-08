const gulp = require('gulp')
const sass = require('gulp-sass')
const pug = require('gulp-pug')
const autoprefix = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')
const filter = require('gulp-filter')
const rename = require('gulp-rename')
const imagemin = require('gulp-imagemin')
const jsmin = require('gulp-jsmin')
const cache = require('gulp-cache')
const livereload = require('gulp-livereload')

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
		.pipe(livereload())
		.pipe(gulp.dest('./'))
})

gulp.task('imgs', function() {
	return gulp
		.src('./app/imgs/**/*')
		.pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
		.pipe(livereload())
		.pipe(gulp.dest('./dist/imgs'))
})

gulp.task('fonts', function() {
	return gulp.src('./app/fonts/*').pipe(gulp.dest('./dist/fonts'))
})

gulp.task('setWatch', function() {
	global.isWatching = true
})

gulp.task('pug-watch', ['templates'])

gulp.task('scss', function() {
	return gulp
		.src('./app/scss/*.scss')
		.pipe(sass({ style: 'expanded' }).on('error', sass.logError))
		.pipe(autoprefix())
		.pipe(cssmin())
		.pipe(rename({ suffix: '.min' }))
		.pipe(livereload())
		.pipe(gulp.dest('./dist/css'))
})

gulp.task('js', function() {
	return gulp
		.src('./app/js/*.js')
		.pipe(jsmin())
		.pipe(rename({ suffix: '.min' }))
		.pipe(livereload())
		.pipe(gulp.dest('./dist/js'))
})

gulp.task('data', function() {
	return gulp
		.src('./app/data/*.txt')
		.pipe(livereload())
		.pipe(gulp.dest('./dist/data'))
})

gulp.task('watch', ['scss', 'js', 'imgs'], function() {
	livereload.listen()

	// Watch template files
	gulp.watch('./app/views/**/*.pug', event => {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...')
		gulp.run('templates')
	})

	// Watch .scss files
	gulp.watch('./app/scss/**/*.scss', event => {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...')
		gulp.run('scss')
	})

	// Watch .js files
	gulp.watch('./app/js/**/*.js', event => {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...')
		gulp.run('js')
	})

	// Watch image files
	gulp.watch('./app/imgs/**/*', event => {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...')
		gulp.run('imgs')
	})
})

gulp.task('build', ['scss', 'js', 'imgs', 'fonts', 'data'])
