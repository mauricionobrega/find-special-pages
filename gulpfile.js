const path = process.env.CMS_PROD_LOCAL_PATH;
const gulp = require('gulp');
const cachebust = require('gulp-cache-refresh');
const templates = require('./modules/templates')(path);

// console.log('templates ', templates);

gulp.src(templates, {cwd: './'}).pipe(cachebust({
  type: 'timestamp'
})).on('error', function() {
  console.log(arguments);
}).pipe(gulp.dest('./dist'));