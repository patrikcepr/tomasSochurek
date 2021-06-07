const {
    series,
    parallel,
    src,
    dest,
    watch
} = require('gulp');

const polyfill = require('./node_modules/@babel/polyfill/browser.js'),
    sass = require('gulp-dart-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    babel = require('gulp-babel'),
    browserSync = require('browser-sync'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify-es').default,
    webpack = require('webpack-stream');

browserSync({
    proxy: 'localhost:80/studioJizak/dist/',
    port: 80,
    open: false,
    notify: false
});

// Work the sass and compile to css
function dart() {
    return src('./src/sass/*.sass')
        .pipe(sourcemaps.init())
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer({
            // browsers: ['last 5 versions'],
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./dist/assets/css'));
}

// Move the javascript libs into my /dist/js folder
function scripts() {
    return src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/popper.min.js'])
        .pipe(dest("./dist/assets/js"))
        .pipe(browserSync.stream());
}

// Work the custom js file I created
function myscripts() {
    return src('./src/js/**/*.js')
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(webpack({
            mode: "development",
            output: {
                filename: '[name].js'
            },
            module: {
                rules: [{
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader'
                    }
                }]
            }
        }))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('index.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./dist/assets/js'));
}

function reload() {
    return src('./dist/**/*.html')
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(browserSync.reload({
            stream: true
        }));
}

exports.default =
    parallel(function () {
            watch('src/sass/**/*.sass', {
                queue: false
            }, series(dart, reload));
        },
        function () {
            watch('src/js/**/*.js', {
                queue: false
            }, series(scripts, myscripts, reload));
        },
        function () {
            watch('dist/*.html', {
                queue: false
            }, reload);
        });