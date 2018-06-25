const gulp = require('gulp')
const imageMin = require('gulp-imagemin')
const stylus = require('gulp-stylus')
const babel = require('gulp-babel')

gulp.task('image', () => {
  gulp.src('src/images/**/*.*')
      .pipe(imageMin({ progressive: true }))
      .pipe(gulp.dest('dist/images'))
})

gulp.task('styles', () => {
  gulp.src('src/styles/**/*.*')
      .pipe(stylus())
      .pipe(gulp.dest('dist/styles'))
})

gulp.task('babel', () =>
    gulp.src('dist/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist/'))
);
gulp.task('default', ['image', 'styles', 'babel'])