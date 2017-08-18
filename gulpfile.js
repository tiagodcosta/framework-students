var gulp = require('gulp'),
browserSync = require('browser-sync'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
reload = browserSync.reload;


gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: "./dist"
		}
	});
});

gulp.task('sass', function(){
	return gulp.src('./src/scss/main.scss')
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(autoprefixer())
	.pipe(gulp.dest('./dist/css'));
});

gulp.task('copy', function () {
	gulp.src('./src/img/*.{png,gif,jpg}')
		.pipe(gulp.dest('./dist/img'));
});

gulp.task('watch', ['sass', 'copy', 'browser-sync'], function () {
	gulp.watch('./src/scss/*/*.scss', ['sass']);
	gulp.watch("./dist/css/*.css").on('change', reload);
	gulp.watch("./dist/*.html").on('change', reload);
});


gulp.task('default', ['watch']);