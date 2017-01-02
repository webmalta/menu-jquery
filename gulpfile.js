var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync');


gulp.task('browserSync',function(){
	browserSync.init({
		files: [
            "./css/**",
            "./js/**",
            "*.html",
        ],
        server: {
            baseDir: './',
            index: './index.html'
        }
    	});
});

gulp.task('watch', ['browserSync'], function(){
		 gulp.watch('*.html');
		 gulp.watch('./css/*.css');
		 gulp.watch('./js/*.js');
});