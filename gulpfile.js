'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./scss/*.scss')
    .pipe(sass({
      // outputStyle: 'compressed'
      }).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('default', function () {
  gulp.watch('./scss/*.scss', ['sass']);
});



// var gulp = require('gulp');
// var less = require('gulp-sass');
//
//
// var sassPaths = [
//   '*.scss'
// ];
//
//
// gulp.task('sass', function () {
//   return gulp.src('scss/app.scss')
//     .pipe(scss({
//       paths: sassPaths,
//       outputStyle: 'compressed'
//     }))
//     .pipe(gulp.dest('/css'));
// });
//
//
//     gulp.task('default', ['sass'], function() {
//       gulp.watch(['*.sass', '*.sass'], ['sass']);
// });
