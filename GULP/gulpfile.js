const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function compileImages() {
	return gulp.src('./source/images/*').pipe(imagemin()).pipe(gulp.dest('./build/images'));
}

function compileJavaScript() {
	return gulp.src('./source/scripts/*.js').pipe(uglify()).pipe(obfuscate()).pipe(gulp.dest('./build/scripts'))
}

function compileSass() {
 return gulp.src('./source/styles/main.scss').pipe(sourcemaps.init()).pipe(sass({outputStyle: 'compact'})).pipe(sourcemaps.write('./maps')).pipe(gulp.dest('./build/styles'));
}

exports.sass = compileSass;
exports.javascript = compileJavaScript;
exports.images = compileImages;
exports.watch = function() {
 gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compileSass))
}