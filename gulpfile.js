/**
 * Created by Nomad_Mystic on 8/8/2016.
 */


var gulp = require('gulp');
// JS
var babel = require('gulp-babel');
var jslint = require('gulp-jslint');

// SASS
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');


// compile from ES6 to ES5
gulp.task('babel', () => {
   return gulp.src('./src/js/*.js')
       .pipe(sourcemaps.init())
       .pipe(babel({
           presets: ['es2015']
       }))
       .pipe(jslint())
       // .pipe(jslint.reporter('default', errorsOnly))
       .pipe(concat('main.js'))
       .pipe(sourcemaps.write('.'))
       .pipe(gulp.dest('./build/js'));
});

// css tasks
gulp.task('sass', () => {
    return gulp.src('./src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./build/css'));
});



// stating watch and default tasks
gulp.task('watch', () => {
   gulp.watch('./src/js/*.js', ['babel']);
   gulp.watch('./src/sass/main.scss', ['sass']);
});

gulp.task('default', ['watch', 'babel', 'sass']);
