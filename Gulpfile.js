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
  console.log("you may now view your api at:");
  console.log("http://localhost:4000");
});

gulp.task('docs', function() {
  gulp.src(docPaths)
    .pipe(aglio({ template: 'flatly' }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
	gulp.watch(['index.md', './docs/**/*.md'], ['docs']);
})

gulp.task('default', ['docs']);
