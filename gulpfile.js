/******************************
 * REQUIRES
 ******************************/
var gulp = require('gulp');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var del = require('del');
var runSequence = require('run-sequence');

/******************************
* TASKS
******************************/
// TODO: Find a way to combine tasks, using multiple/relative
//       source and destination paths
gulp.task('useref', function(){
	return gulp.src('src/*.html')
		.pipe(useref())
		.pipe(gulpIf('*.js', uglify()))
		.pipe(gulpIf('*.css', cleanCSS()))
		.pipe(gulp.dest('dist'))
});

gulp.task('useref-views', function(){
	return gulp.src('src/views/*.html')
		.pipe(useref())
		.pipe(gulpIf('*.js', uglify()))
		.pipe(gulpIf('*.css', cleanCSS()))
		.pipe(gulp.dest('dist/views'))
});

gulp.task('images', function() {
	return gulp.src('src/img/*.+(png|jpg|gif|svg)')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'))
});

gulp.task('images-views', function() {
	return gulp.src('src/views/images/*.+(png|jpg|gif|svg)')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/views/images'))
});

gulp.task('clean:dist', function() {
	return del.sync('dist');
});

gulp.task('default', function(callback) {
	runSequence('clean:dist', ['useref', 'useref-views', 'images', 'images-views'],
		callback
	)
});