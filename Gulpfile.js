var gulp = require('gulp'),
	gutil = require('gulp-util'),
  watch = require('gulp-watch'),
  aglio = require('gulp-aglio'),
  docPaths = ['index.md', './docs/**/*.md'];

gulp.task('express', function() {
  var express = require('express');
  var app = express();
  app.use(express.static(__dirname));
  app.listen(4000);
});

gulp.task('docs', function() {
  gulp.src(docPaths)
    .pipe(aglio({ template: 'flatly' }))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
	gulp.watch(docPaths, ['docs']);
})

gulp.task('default', ['docs']);
