var gulp        = require('gulp');
var sass        = require('gulp-sass');

//Compilar o Sass
gulp.task('sass', gulp.series(function(){

    return gulp.src(['node_modules/bootstrap/scss/*.scss','src/scss/*.scss'])
    .pipe(sass()) // Coverter scss em CSS
    .pipe(gulp.dest("src/css"))
    

}));

//Mover JS para src/js
gulp.task('js', gulp.series(function(){
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js','node_modules/jquery/dist/jquery.min.js','node_modules/popper.js/dist/umd/popper.min.js'])
    .pipe(gulp.dest("src/js"))
    

}));

//Servidor para olhar os HTML/SCSS


gulp.task('watch', gulp.series (function (){  
    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], gulp.parallel(['sass']))


}));

gulp.task('default',gulp.series(['sass','watch']));