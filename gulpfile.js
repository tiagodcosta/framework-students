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
	return gulp.src('./source-students/*.scss')
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(autoprefixer())
	.pipe(gulp.dest('./students/css'));
});		

gulp.task('watch', ['sass', 'browser-sync'], function () {
	gulp.watch('./source-students/*.scss', ['sass']);
    gulp.watch("./students/css/*.css").on('change', reload);
    gulp.watch("./students/*.html").on('change', reload);
});


gulp.task('default', ['watch']);