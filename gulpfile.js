let gulp = require('gulp')
let imageMin = require('gulp-imagemin')
let stylus = require('gulp-stylus')

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

gulp.task('default', ['image', 'styles'])