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
	return gulp.src('./src/scss/index.scss')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('copy', function () {
	gulp.src('./src/index.html')
		.pipe(gulp.dest('./dist'));
	gulp.src('./src/img/*.{png,gif,jpg}')
		.pipe(gulp.dest('./dist/img'));
});

gulp.task('watch', ['sass', 'copy', 'browser-sync'], function () {
	gulp.watch('./src/scss/*/*.scss', ['sass']);
	gulp.watch('./src/index.html', ['copy']);
	gulp.watch("./dist/css/*.css").on('change', reload);
	gulp.watch("./src/*.html").on('change', reload);
});


gulp.task('default', ['watch']);