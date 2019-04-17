const gulp = require("gulp"),
      sass = require("gulp-sass")


function styles(){
    return(
        gulp.src("index.scss")
            .pipe(sass())
            .on("error", sass.logError)
            .pipe(gulp.dest('dist'))
    )
}

exports.styles = styles;


function watch(){
    gulp.watch('**/*.sass', styles)
}

exports.default = watch
