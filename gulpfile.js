'use strict';

/* пути к исходным файлам (src), к готовым файлам (build), а также к тем, за изменениями которых нужно наблюдать (watch) */
var path = {
    build: {
        html: 'assets/assets/build/build/',
        js: 'assets/assets/build/build/js/',
        js_libs: 'assets/assets/build/build/js/libs/',
        css: 'assets/assets/build/build/css/',
        img: 'assets/assets/build/build/img/',
        favicon: 'assets/assets/build/build/favicon/',
        fonts: 'assets/assets/build/build/fonts/'
    },
    src: {
        html: 'assets/assets/build/src/*.html',
        js: 'assets/assets/build/src/js/interface.js',
        style: 'assets/assets/build/src/style/main.scss',
        img: 'assets/assets/build/src/img/**/*.*',
        favicon: 'assets/assets/build/src/favicon/**/*.*',
        fonts: 'assets/assets/build/src/fonts/**/*.*'
    },
    watch: {
        html: 'assets/assets/build/src/**/*.html',
        js: 'assets/assets/build/src/js/*.js',
        css: 'assets/assets/build/src/style/**/*.scss',
        img: 'assets/assets/build/src/img/**/*.*',
        favicon: 'assets/assets/build/src/favicon/**/*.*',
        fonts: 'assets/assets/build/srs/fonts/**/*.*'
    },
    libs: {
        js: 'assets/assets/build/src/js/libs/*.js',
        style: 'assets/assets/build/src/style/libs.scss',
    },
    clean: './assets/assets/build/build/*'
};

/* настройки сервера */
var config = {
    server: {
        baseDir: './assets/assets/build/build'
    },
    notify: false
};

/* подключаем gulp и плагины */
var gulp = require('gulp'),  // подключаем Gulp
    webserver = require('browser-sync'), // сервер для работы и автоматического обновления страниц
    plumber = require('gulp-plumber'), // модуль для отслеживания ошибок
    concat =        require('gulp-concat'),
    rigger = require('gulp-rigger'), // модуль для импорта содержимого одного файла в другой
    sourcemaps = require('gulp-sourcemaps'), // модуль для генерации карты исходных файлов
    sass = require('gulp-sass'), // модуль для компиляции SASS (SCSS) в CSS
    autoprefixer = require('gulp-autoprefixer'), // модуль для автоматической установки автопрефиксов
    cleanCSS = require('gulp-clean-css'), // плагин для минимизации CSS
    uglify = require('gulp-uglify'), // модуль для минимизации JavaScript
    cache = require('gulp-cache'), // модуль для кэширования
    imagemin = require('gulp-imagemin'), // плагин для сжатия PNG, JPEG, GIF и SVG изображений
    jpegrecompress = require('imagemin-jpeg-recompress'), // плагин для сжатия jpeg 
    pngquant = require('imagemin-pngquant'), // плагин для сжатия png
    del = require('del'), // плагин для удаления файлов и каталогов
    rename = require('gulp-rename');

/* задачи */

// запуск сервера
gulp.task('webserver', function () {
    webserver(config);
});

// сбор html
gulp.task('html:build', function () {
    return gulp.src(path.src.html) // выбор всех html файлов по указанному пути
        .pipe(plumber()) // отслеживание ошибок
        .pipe(rigger()) // импорт вложений
        .pipe(gulp.dest(path.build.html)) // выкладывание готовых файлов
        .pipe(webserver.reload({ stream: true })); // перезагрузка сервера
});

// сбор стилей
gulp.task('css:build', function () {
    return gulp.src(path.src.style) // получим main.scss
        .pipe(plumber()) // для отслеживания ошибок
        .pipe(sourcemaps.init()) // инициализируем sourcemap
        .pipe(sass()) // scss -> css
        .pipe(autoprefixer()) // добавим префиксы
        .pipe(gulp.dest(path.build.css))
        //.pipe(rename({ suffix: '.min' }))
        .pipe(cleanCSS()) // минимизируем CSS
        .pipe(sourcemaps.write('./')) // записываем sourcemap
        .pipe(gulp.dest(path.build.css)) // выгружаем в build
        .pipe(webserver.reload({ stream: true })); // перезагрузим сервер
});
gulp.task('css_libs:build', function () {
    return gulp.src(path.libs.style) // получим main.scss
        .pipe(plumber()) // для отслеживания ошибок
        //.pipe(sourcemaps.init()) // инициализируем sourcemap
        .pipe(sass()) // scss -> css
        .pipe(autoprefixer()) // добавим префиксы
        //.pipe(gulp.dest(path.build.css))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cleanCSS()) // минимизируем CSS
        //.pipe(sourcemaps.write('./')) // записываем sourcemap
        .pipe(gulp.dest(path.build.css)) // выгружаем в build
        .pipe(webserver.reload({ stream: true })); // перезагрузим сервер
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
<<<<<<< Updated upstream
            'assets/src/js/pages.js',
            'assets/src/js/maps.js',
=======
            'assets/assets/build/src/js/pages.js',
>>>>>>> Stashed changes
        ]) // получим файл interface.js
        .pipe(plumber()) // для отслеживания ошибок
        .pipe(rigger()) // импортируем все указанные файлы в interface.js
        .pipe(gulp.dest(path.build.js))
        //.pipe(rename({ suffix: '.min' }))
        //.pipe(sourcemaps.init()) //инициализируем sourcemap
        //.pipe(uglify()) // минимизируем js
        //.pipe(sourcemaps.write('./')) //  записываем sourcemap
        .pipe(gulp.dest(path.build.js)) // положим готовый файл
        .pipe(webserver.reload({ stream: true })); // перезагрузим сервер
});

// сбор libs_js
gulp.task('libs:build', function () {
    return gulp.src([
            'assets/assets/build/src/js/jquery/jquery.js',
            path.libs.js
        ]) // файлы libs
        .pipe(plumber()) // для отслеживания ошибок
        .pipe(concat('libs.js')) //concat

        //.pipe(sourcemaps.init()) //инициализируем sourcemap
        .pipe(uglify()) // минимизируем js
        .pipe(rename({ suffix: '.min' }))
        //.pipe(sourcemaps.write('./')) //  записываем sourcemap
        .pipe(gulp.dest(path.build.js_libs)) // положим готовый файл
        .pipe(webserver.reload({ stream: true })); // перезагрузим сервер
});

// перенос шрифтов
gulp.task('fonts:build', function () {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts));
});

// обработка картинок
gulp.task('image:build', function () {
    return gulp.src(path.src.img) // путь с исходниками картинок
        .pipe(cache(imagemin([ // сжатие изображений
            imagemin.gifsicle({ interlaced: true }),
            jpegrecompress({
                progressive: true,
                max: 90,
                min: 80
            }),
            pngquant(),
            imagemin.svgo({ plugins: [{ removeViewBox: false }] })
        ])))
        .pipe(gulp.dest(path.build.img)); // выгрузка готовых файлов
});

// удаление каталога build 
gulp.task('clean:build', function () {
    return del(path.clean);
});

// очистка кэша
gulp.task('cache:clear', function () {
    cache.clearAll();
});

// сборка
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

// запуск задач при изменении файлов
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

// задача по умолчанию
gulp.task('default', gulp.series(
    'build',
    gulp.parallel('webserver','watch')      
));
