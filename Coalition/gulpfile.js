var gulp         = require('gulp'),
    stylus       = require('gulp-stylus'),
    sourcemaps   = require('gulp-sourcemaps'),
    compress     = require('gulp-compress'),
    browserSync  = require('browser-sync'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer'),
    csslint      = require('gulp-csslint'),
    cssnano      = require('gulp-cssnano'),
    // tinypng      = require('gulp-tinypng'),
    del          = require('del'),
    rename       = require('gulp-rename');




gulp.task('stylus', function () {
    return gulp.src('src/styl/style.styl')
        .pipe(sourcemaps.init())
        .pipe(stylus({
            compress:false
            //use: [autoprefixer()]
        }))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        //       .pipe(cssnano())
        // .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('scripts', function(){
    return gulp.src('src/libs/js/*.js')
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('src/js'))
});

gulp.task('css-libs', ['stylus'], function() {
    return gulp.src('src/css/libs.css')
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('src/css'));
});

// gulp.task('tinypng', function () {
//     gulp.src('src/img/**')
//         .pipe(tinypng('Hb95oOraEhM9rh2dr-OnviPJzjieS1WO'))
//         .pipe(gulp.dest('src/img_min/'));
// });

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "src"
        },
        notify: false
    });
});

gulp.task('clean', function() {
    return del.sync('dist');
});

gulp.task('watch', ['css-libs', 'browser-sync', 'scripts'], function(){
    gulp.watch('src/styl/*.styl', ['stylus']);
    gulp.watch('src/*.html', browserSync.reload);
    gulp.watch('src/js/**/*.js', browserSync.reload);
});

gulp.task('build', ['clean', 'stylus', 'scripts'], function() {

    var buildCss = gulp.src([
        'src/css/style.css',
        'src/css/libs.min.css'
    ])
        .pipe(gulp.dest('dist/css'));

    var buildJs = gulp.src('src/js/**/*')
        .pipe(gulp.dest('dist/js'));

    var buildHtml = gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));

    var buildImg = gulp.src('src/img/**')
        .pipe(gulp.dest('dist/img'));

});

gulp.task('clear', function (callback) {
    return cache.clearAll();
});

gulp.task('default', ['watch']);