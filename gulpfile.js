const gulp = require('gulp')
const imageMin = require('gulp-imagemin')
const stylus = require('gulp-stylus')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const stripDebug = require('gulp-strip-debug')

gulp.task('image', () => {
  gulp.src('src/images/**/*.@(jpg|png|jpeg)')
      .pipe(imageMin({ progressive: true }))
      .pipe(gulp.dest('dist/images'))
})

gulp.task('styles', () => {
  gulp.src('src/styles/**/!(utils).styl')
      .pipe(stylus())
      .pipe(gulp.dest('dist/styles'))
})

gulp.task('js', () => {
  gulp.src('dist/**/*.js')
      .pipe(babel())
      // .pipe(stripDebug())
      .pipe(uglify())
      .pipe(gulp.dest('dist/'))
})

gulp.task('default', ['image', 'styles', 'js'])