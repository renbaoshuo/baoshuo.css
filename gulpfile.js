const gulp = require('gulp');
const fs = require('fs');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const header = require('gulp-header');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const prettier = require('gulp-prettier');
const less = require('gulp-less');
const pkg = require('./package.json');

const banner = [
    '/*! baoshuo.css v<%= pkg.version %>',
    '<%= pkg.license %> License',
    '<%- pkg.homepage %> */\n',
].join(' | ');

const configs = {
    autoprefixer: {},
    cleanCSS: {},
    rename: {
        suffix: '.min',
    },
    prettier: require('./.prettierrc.json'),
};

gulp.task('build', () =>
    gulp
        .src('src/**/*.less')
        .pipe(less())
        .pipe(concat('baoshuo.css'))
        .pipe(header(fs.readFileSync('node_modules/modern-normalize/modern-normalize.css')))
        .pipe(header(banner, { pkg }))
        .pipe(autoprefixer(configs.autoprefixer))
        .pipe(prettier(configs.prettier))
        .pipe(gulp.dest('dist'))
        .pipe(cleanCSS(configs.cleanCSS))
        .pipe(rename(configs.rename))
        .pipe(gulp.dest('dist'))
);

gulp.task('watch', () => gulp.watch('src/**/*.less', gulp.task('build')));

gulp.task('default', gulp.task('build'));
