const BUILD_DIRECTORY = './dist';
const timestamp = new Date().getTime();
const gulp = require('gulp');
const runSequence = require('run-sequence');
const del = require('del');
const replace = require('gulp-replace');
const templates = require('./modules/templates')({
  path: process.env.CMS_PROD_LOCAL_PATH,
  device: require('yargs').argv.mobile ? 'mobile-generic' : 'pc',
  rules: require('./rules.json')
});

gulp.task('clean', () => {
  return del([BUILD_DIRECTORY]);
});

gulp.task('bust', () => {
  return gulp.src(templates, {cwd: './'}).pipe(replace(/(min.js|min.css)[^\/"&]/g, (match, p1, offset, string) => {
    // See http://mdn.io/string.replace#Specifying_a_function_as_a_parameter
    // https://www.npmjs.com/package/gulp-replace
    return `${match}${timestamp}`;
  })).on('error', () => {
    console.log(arguments);
  }).pipe(gulp.dest(BUILD_DIRECTORY)).on('end', () => {
    console.log(`UPDATE ${templates.length} FILES WITH TIMESTAMP: ${timestamp}`);
  });
});

gulp.task('default', () => {
  runSequence(['clean'], ['bust']);
});
