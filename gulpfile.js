import gulp from 'gulp'
import browserSync from 'browser-sync'
import dartSass from "sass"
import gulpSass from "gulp-sass"
import rename from 'gulp-rename'
// import sass from 'sass'

const sass = gulpSass(dartSass);

import cleanCSS from 'gulp-clean-css'
import autoprefixer from 'gulp-autoprefixer'

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    // gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'expanded'})).on('error', sass.logError)
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("src/sass/**/*.+(scss|sass)", gulp.parallel('styles'));
    // gulp.watch("src/*.html").on("change", browserSync.reload);
})

gulp.task('default', gulp.parallel('watch', 'server', 'styles'));