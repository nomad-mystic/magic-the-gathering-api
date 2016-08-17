/**
 * Created by Nomad_Mystic on 8/8/2016.
 */


var gulp = require('gulp');

// JS
// var babel = require('gulp-babel');
var jslint = require('gulp-jslint');
var fs = require("fs");

// var browserify = require("browserify");
// var babelify = require('babelify');
// var source = require('vinyl-source-stream');
// var buffer = require('vinyl-buffer');
// var watchify = require('watchify');

// SASS
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

// Testing
var util = require('gulp-util');

// compile from ES6 to ES5 !!!!!! Moved to Webpack
// gulp.task('babel', () => {
//     return gulp.src('./src/js/*.js')
//         .pipe(sourcemaps.init())
//         .pipe(babel({
//             presets: ['es2015'],
//             plugins: ['transform-runtime']
//         }))
//         .pipe(jslint())
//         // .pipe(jslint.reporter('default', errorsOnly))
//         .pipe(concat('main.js'))
//         .pipe(sourcemaps.write('.'))
//         .pipe(gulp.dest('./build/js'));
// });

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
   // gulp.watch('./src/js/*.js', ['compile']);
   // gulp.watch('./test/builtTests/', ['builtTests']);
   gulp.watch('./src/sass/main.scss', ['sass']);
});

// gulp.task('test', ['buildTests', 'testBuilt']);
gulp.task('compileSCSS', ['sass']);

