'use strict';

var path = {
    build: {
        html: 'assets/build/',
        js: 'assets/build/js/',
        js_libs: 'assets/build/js/libs/',
        css: 'assets/build/css/',
        img: 'assets/build/img/',
        favicon: 'assets/build/favicon/',
        fonts: 'assets/build/fonts/'

    },
    src: {
        html: 'assets/src/*.html',
        js: 'assets/src/js/interface.js',
        style: 'assets/src/style/main.scss',
        img: 'assets/src/img/**/*.*',
        favicon: 'assets/src/favicon/**/*.*',
        fonts: 'assets/src/fonts/**/*.*'

    },
    watch: {
        html: 'assets/src/**/*.html',
        js: 'assets/src/js/*.js',
        css: 'assets/src/style/**/*.scss',
        img: 'assets/src/img/**/*.*',
        favicon: 'assets/src/favicon/**/*.*',
        fonts: 'assets/srs/fonts/**/*.*'

    },
    libs: {
        js: 'assets/src/js/libs/*.js',
        style: 'assets/src/style/libs.scss',
    },
    clean: './assets/build/*'
};

var config = {
    server: {
        baseDir: './assets/build'
    },
    notify: false
};


var gulp = require('gulp'),
    webserver = require('browser-sync'),
    plumber = require('gulp-plumber'),
    concat =        require('gulp-concat'),
    rigger = require('gulp-rigger'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    cache = require('gulp-cache'),
    imagemin = require('gulp-imagemin'),
    jpegrecompress = require('imagemin-jpeg-recompress'),  
    pngquant = require('imagemin-pngquant'), 
    del = require('del'),
    rename = require('gulp-rename');


gulp.task('webserver', function () {
    webserver(config);
});

gulp.task('html:build', function () {
    return gulp.src(path.src.html)
        .pipe(plumber()) 
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html)) 
        .pipe(webserver.reload({ stream: true }));
});

gulp.task('css:build', function () {
    return gulp.src(path.src.style)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest(path.build.css))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(path.build.css))
        .pipe(webserver.reload({ stream: true }));
});
gulp.task('css_libs:build', function () {
    return gulp.src(path.libs.style)
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(rename({ suffix: '.min' }))
        .pipe(cleanCSS())
        .pipe(gulp.dest(path.build.css))
        .pipe(webserver.reload({ stream: true }));
});

//favicon
gulp.task('favicon:build', function() {
    return gulp.src(path.src.favicon)
        .pipe(gulp.dest(path.build.favicon));
});

// сбор js
gulp.task('js:build', function () {
    return gulp.src([
            path.src.js,
            'assets/src/js/pages.js',
            'assets/src/js/maps.js',
        ])
        .pipe(plumber())
        .pipe(rigger()) 
        .pipe(gulp.dest(path.build.js))
        .pipe(gulp.dest(path.build.js))
        .pipe(webserver.reload({ stream: true }));
});

//libs_js
gulp.task('libs:build', function () {
    return gulp.src([
            'assets/src/js/jquery/jquery.js',
            path.libs.js
        ])
        .pipe(plumber())
        .pipe(concat('libs.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(path.build.js_libs))
        .pipe(webserver.reload({ stream: true }));
});


gulp.task('fonts:build', function () {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts));
});


gulp.task('image:build', function () {
    return gulp.src(path.src.img)
        .pipe(cache(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            jpegrecompress({
                progressive: true,
                max: 90,
                min: 80
            }),
            pngquant(),
            imagemin.svgo({ plugins: [{ removeViewBox: false }] })
        ])))
        .pipe(gulp.dest(path.build.img));
});


gulp.task('clean:build', function () {
    return del(path.clean);
});


gulp.task('cache:clear', function () {
    cache.clearAll();
});


gulp.task('build',
    gulp.series('clean:build',
        gulp.parallel(
            'html:build',
            'css:build',
            'css_libs:build',
            'libs:build',
            'js:build',
            'favicon:build',
            'fonts:build',
            'image:build'
        )
    )
);


gulp.task('watch', function () {
    gulp.watch(path.watch.html, gulp.series('html:build'));//+++
    gulp.watch(path.watch.css, gulp.series('css_libs:build'));
    gulp.watch(path.watch.css, gulp.series('css:build'));
    gulp.watch(path.libs.js, gulp.series('libs:build'));//+++
    gulp.watch(path.watch.js, gulp.series('js:build'));//+++
    gulp.watch(path.watch.img, gulp.series('image:build'));
    gulp.watch(path.watch.fonts, gulp.series('fonts:build'));
    gulp.watch(path.watch.favicon, gulp.series('favicon:build'));
});


gulp.task('default', gulp.series(
    'build',
    gulp.parallel('webserver','watch')      
));
