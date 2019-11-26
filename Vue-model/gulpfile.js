var gulp = require('gulp'),
    less = require('gulp-less');
    watch = require("gulp-watch"); //定义watch,否则会存在只编译一次的情况

gulp.task('testLess', function () {
    gulp.src('src/less/index.less')
        .pipe(less())
        .pipe(gulp.dest('src/css'));
         console.log('成功')
});
gulp.task('testWatch', function () {
    watch('src/less/index.less', gulp.series('testLess')); //当所有less文件发生改变时，调用testLess任务
});