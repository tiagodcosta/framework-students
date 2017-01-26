var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	sass = require('gulp-sass'),
	reload = browserSync.reload;


gulp.task('browser-sync', function(){
		browserSync({
			server: {
				baseDir: "./"
			}
		});
	});

gulp.task('sass', function(){
	return gulp.src('./source/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./'));
});		

gulp.task('watch', ['browser-sync', 'sass'], function () {
    gulp.watch("./*.css").on('change', reload);
    gulp.watch("./*.html").on('change', reload);
});


gulp.task('default', ['watch']);