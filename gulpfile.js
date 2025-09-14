const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
// const imagemin = require('gulp-imagemin');
// const uglify = require('gulp-uglify');

// function scripts (){
//     return gulp.src('./src/scripts/*.js')
//         .pipe(uglify())
//         .pipe(gulp.dest('./public/scripts/'))
// }

function styles(){
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./public/css/'));
}

function html () {
  return gulp.src("src/**/*.html") 
    .pipe(gulp.dest("public"));    
}

// function images() {
//     return gulp.src('./src/images/**/*')
//     .pipe(imagemin())
//     .pipe(gulp.dest('./public/images'));
// }

exports.default = gulp.parallel(styles, html);
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles, html));
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts));
}