var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested'),
	cssImport = require('postcss-import'),
	watch = require('gulp-watch');

gulp.task('default', function() {
	console.log('Gulp[default]');
});

gulp.task('html', function() {
	console.log('Gulp[HTML]');
});

gulp.task('styles', function() {
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
		.pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function() {

	watch('./app/index.html', function() {
		gulp.start('html');
	});
	
	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('styles');
	});	

});