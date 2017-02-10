var gulp                = require('gulp');
var notify              = require('gulp-notify');
var source              = require('vinyl-source-stream');
var browserify          = require('browserify');
var babelify            = require('babelify');
var ngAnnotate          = require('browserify-ngannotate');
var browserSync         = require('browser-sync').create();
var modRewrite          = require('connect-modrewrite');
var compass             = require('gulp-compass');
var flatten             = require('gulp-flatten');
var rename              = require('gulp-rename');
var templateCache       = require('gulp-angular-templatecache');
var uglify              = require('gulp-uglify');
var merge               = require('merge-stream');
var gulpDocs            = require('gulp-ngdocs');
var connect             = require('gulp-connect');

// Where our files are located
var jsFiles   = "src/app/**/*.js";
var viewFiles = "src/app/**/*.html";
var scssFiles = "src/app/**/*.scss";
var cssFiles = "src/assets/css/**/*.css";

var interceptErrors = function(error) {
  var args = Array.prototype.slice.call(arguments);

  // Send error to notification center with gulp-notify
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);

  // Keep gulp from hanging on this task
  this.emit('end');
};

gulp.task('browserify', ['views'], function() {
  return browserify('src/app/app.js')
      .transform(babelify, {presets: ["es2015"]})
      .transform(ngAnnotate)
      .bundle()
      .on('error', interceptErrors)
      //Pass desired output filename to vinyl-source-stream
      .pipe(source('main.js'))
      // Start piping stream to tasks!
      .pipe(gulp.dest('build/'));
});

gulp.task('html', function() {
  return gulp.src("src/index.html")
      .on('error', interceptErrors)
      .pipe(gulp.dest('build/'));
});

gulp.task('css', function() {
  return gulp.src(cssFiles)
      .on('error', interceptErrors)
      //.pipe(flatten())
      .pipe(gulp.dest('build/css'));
});

gulp.task('compass', function() {
  gulp.src(scssFiles)
    .pipe(compass({
      config_file: 'config.rb',
      relative: false,
      css: 'src/assets/css',
      sass: 'src/app/modules',
      image: 'src/assets/images',
      font: 'src/assets/fonts'
    }));
    //.pipe(minifyCSS())
    //.pipe(gulp.dest('src/temp'));
});

gulp.task('views', function() {
  return gulp.src(viewFiles)
      .pipe(templateCache({
        standalone: true
      }))
      .on('error', interceptErrors)
      .pipe(rename("templates.module.js"))
      .pipe(gulp.dest('src/app/modules/templates'));
});

gulp.task('ngdocs', [], function () {
  return gulp.src(jsFiles)
    .pipe(gulpDocs.process())
    .pipe(gulp.dest('docs/'));
});

gulp.task('connect_ngdocs', function() {
  connect.server({
    root: 'docs',
    livereload: true,
    fallback: 'docs/index.html',
    port: 8083
  });
});

// This task is used for building production ready
// minified JS/CSS files into the dist/ folder
gulp.task('build', ['html', 'browserify'], function() {
  var html = gulp.src("build/index.html")
                 .pipe(gulp.dest('dist/'));

  var js = gulp.src("build/main.js")
               .pipe(uglify())
               .pipe(gulp.dest('dist/'));

  return merge(html,js);
});

gulp.task("default", ["html", "compass", "css", "browserify", "ngdocs"], function() {
  browserSync.init(["build/**/**.**"], {
    server: "build/",
    https: {
        key: "tls/localhost.key",
        cert: "tls/localhost.crt"
    },
    middleware: modRewrite([
        '!\\.\\w+$ /index.html [L]'
    ]),
    port: 4000,
    notify: false,
    ui: {
      port: 4001
    },
    socket: {
        path: "/socket.io",
        //domain: "localhost:8000",
        //domain: "192.168.10.1:8000",
        domain: "muime.ddns.net:8000",
        //port: 8000
    }
  });

  gulp.watch("src/index.html", ["html"]);
  gulp.watch(scssFiles, ["compass"]);
  gulp.watch(cssFiles, ["css"]);
  gulp.watch(viewFiles, ["views"]);
  gulp.watch(jsFiles, ["browserify", "ngdocs"]);
});
