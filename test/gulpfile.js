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
    return gulp.src('app/styl/style.styl')
        .pipe(sourcemaps.init())
        .pipe(stylus({
            compress:false
            //use: [autoprefixer()]
        }))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
  //       .pipe(cssnano())
		// .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('scripts', function(){
	return gulp.src('app/libs/js/*.js')
		.pipe(concat('libs.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('app/js'))
});

gulp.task('css-libs', ['stylus'], function() {
	return gulp.src('app/css/libs.css')
		.pipe(cssnano()) // Сжимаем
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('app/css'));
});

// gulp.task('tinypng', function () {
//     gulp.src('app/img/**')
//         .pipe(tinypng('Hb95oOraEhM9rh2dr-OnviPJzjieS1WO'))
//         .pipe(gulp.dest('app/img_min/'));
// });

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "app"
        },
        notify: false
    });
});

gulp.task('clean', function() {
	return del.sync('dist');
});

gulp.task('watch', ['css-libs', 'browser-sync', 'scripts'], function(){
	gulp.watch('app/styl/*.styl', ['stylus']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});


gulp.task('build', ['clean', 'stylus', 'scripts'], function() {

	var buildCss = gulp.src([
		'app/css/style.css',
		'app/css/libs.min.css'
		])
	.pipe(gulp.dest('dist/css'));

	var buildJs = gulp.src('app/js/**/*')
	.pipe(gulp.dest('dist/js'));

	var buildHtml = gulp.src('app/*.html')
	.pipe(gulp.dest('dist'));

	var buildImg = gulp.src('app/img/**')
	.pipe(gulp.dest('dist/img'));

});

gulp.task('clear', function (callback) {
	return cache.clearAll();
});

gulp.task('default', ['watch']);