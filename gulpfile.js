const gulp = require('gulp');
const cachebust = require('gulp-cache-refresh');
const template = require('./modules/template'); //('/app/walmart-frontend/cms_production');

console.log('----->>> ', templates);

// gulp.src(templates).pipe(cachebust({
//   type: 'timestamp'
// })).pipe(gulp.dest('./dist'));