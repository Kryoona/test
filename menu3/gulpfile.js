var gulp = require('gulp')
    var sass = require('gulp-sass')
    gulp.task('gulpsass',function(){
        return gulp.src('style/menu.scss')
        .pipe(sass())
        .pipe(gulp.dest('style'))
    })
    gulp.task('default',['gulpsass'])
    gulp.watch('style/menu.scss',['gulpsass'])
