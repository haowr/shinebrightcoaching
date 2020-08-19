var gulp = require('gulp');
var fs = require('fs');
var server = require('gulp-server-livereload');
// var Server = require('karma').server;
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var header = require('gulp-header');
var footer = require('gulp-footer');
var rename = require('gulp-rename');
var es = require('event-stream');
var del = require('del');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');//To prevent pipe breaking caused by errors at 'watch'
//
var paths = {
  src: 'src/**',
  dist: 'dist',
  distJS: 'dist/*.js'
};
var config = {
  pkg : JSON.parse(fs.readFileSync('./package.json')),
  banner:
      '/*!\n' +
      ' * <%= pkg.name %>\n' +
      ' * <%= pkg.homepage %>\n' +
      ' * Version: <%= pkg.version %> - <%= timestamp %>\n' +
      ' * License: <%= pkg.license %>\n' +
      ' */\n\n\n'
};
gulp.task('webserver', function() {
  gulp.src('')
    .pipe(server({
      livereload: true,
      port:'44044',
      directoryListing: true,
      open: true
    }));
});
// gulp.task('default', ['build','test']);
// gulp.task('build', ['scripts']);
// gulp.task('test', ['build', 'karma']);

// gulp.task('watch', ['build','karma-watch'], function() {
//   gulp.watch(['src/**/*.{js,html}'], ['build']);
// });

gulp.task('clean', function(cb) {
  del(['dist','docs/*.js'], cb);
});

gulp.task('scripts', ['clean'], function() {

  var buildLib = function(){
    return gulp.src(['src/*.js'])
      .pipe(plumber({
        errorHandler: handleError
      }))
      .pipe(header('(function () { \n\'use strict\';\n'))
      .pipe(footer('\n}());'))
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'))
      .pipe(jshint.reporter('fail'));
  };

  return es.merge(buildLib())
    .pipe(plumber({
      errorHandler: handleError
    }))
    .pipe(concat('angular-fullcalendar.js'))
    .pipe(header(config.banner, {
      timestamp: (new Date()).toISOString(), pkg: config.pkg
    }))
    .pipe(gulp.dest('dist'))
    .pipe(gulp.dest('docs'))
    .pipe(uglify({preserveComments: 'some'}))
    .pipe(rename({ext:'.min.js'}))
    .pipe(gulp.dest('dist'))
    .pipe(gulp.dest('docs'));

});
//
// gulp.task('karma', ['build'], function(done) {
//   new Server({
//     configFile: __dirname + '/karma.conf.js',
//     singleRun: true
//   }, done).start();
// });
//
// gulp.task('karma-watch', ['build'], function(done) {
//   new Server({
//     configFile: __dirname + '/karma.conf.js',
//     singleRun: false
//   }, done).start();
// });

var handleError = function (err) {
  console.log(err.toString());
  this.emit('end');
};
