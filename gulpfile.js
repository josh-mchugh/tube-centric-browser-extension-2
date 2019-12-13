var gulp = require("gulp");
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var webpack = require("webpack");
var webpackStream = require('webpack-stream');
var del = require("del");
var exec = require('child_process').exec;

gulp.task("clean:dist", del.bind(null, ["dist/**", "package"]));

gulp.task("build:background:js", function() {
    return gulp.src("./background/src/main.js")
        .pipe(webpackStream(require("./background/webpack.config"), webpack))
        .pipe(gulp.dest("dist/background"));
});

gulp.task("build:content-scripts:js", function() {
    return gulp.src("./content-scripts/src/main.js")
        .pipe(webpackStream(require("./content-scripts/webpack.config"), webpack))
        .pipe(gulp.dest("dist/content-scripts"));
});

gulp.task("build:content-scripts:app", function(cb) {
    exec('cd content-scripts/app && ng build --prod', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task("copy:manifest", function() {
    return gulp.src("manifest/**/*")
        .pipe(gulp.dest("dist"));
});

gulp.task("copy:locales", function() {
    return gulp.src("_locales/**")
        .pipe(gulp.dest("dist/_locales"));
});

gulp.task("copy:content-scripts:app:js", function() {
    const files = [
        "content-scripts/app/dist/**/runtime-es2015.*.js",
        "content-scripts/app/dist/**/polyfills-es2015..js",
        "content-scripts/app/dist/**/scripts.*.js",
        "content-scripts/app/dist/**/main-es2015.*.js"
    ]
    return gulp.src(files)
        .pipe(concat("app.js"))
        .pipe(gulp.dest("dist/content-scripts/app"));
});

gulp.task("copy:content-scripts:app:css", function() {
    return gulp.src("content-scripts/app/dist/**/*.css")
        .pipe(rename("styles.css"))
        .pipe(gulp.dest("dist/content-scripts/app"));
});

gulp.task("build", gulp.series(
    "clean:dist",
    "build:background:js",
    "build:content-scripts:js",
    "build:content-scripts:app",
    "copy:manifest",
    "copy:locales",
    "copy:content-scripts:app:js",
    "copy:content-scripts:app:css"
));