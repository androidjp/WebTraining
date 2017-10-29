var gulp = require('gulp');

gulp.task('default' , function(){
    gulp.src('./app/main.js')
        .pipe(gulp.dest('./public/js/main.js'));
});