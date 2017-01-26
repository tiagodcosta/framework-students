var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	reload = browserSync.reload;


gulp.task('browser-sync', function(){
		browserSync({
			server: {
				baseDir: "./"
			}
		});
	});

gulp.task('sass', function(){
	return gulp.src('./source/buttons.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer())
	.pipe(gulp.dest('./buttons'));
});		

gulp.task('watch', ['sass', 'browser-sync'], function () {
	gulp.watch('./source/*.scss', ['sass']);
    gulp.watch("./*.css").on('change', reload);
    gulp.watch("./*.html").on('change', reload);
});


gulp.task('default', ['watch']);