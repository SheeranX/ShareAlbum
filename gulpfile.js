var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var open = require('open');

var app = {
    srcPath :'src/',
    devPath:'build/',
    distPath:'dist/'
};

gulp.task('lib',function(){//manage the third-party plugins
    gulp.src(['bower_components/**/*.js','bower_components/**/*.css'])
    .pipe(gulp.dest(app.devPath+'vendor'))
    .pipe(gulp.dest(app.distPath+'vendor'))
    .pipe($.connect.reload()); //refresh automatically (IE8+)
});

gulp.task('html',function(){//manage the html file
    gulp.src(app.srcPath+"**/*.html")
    .pipe(gulp.dest(app.devPath))
    .pipe(gulp.dest(app.distPath))
    .pipe($.connect.reload());
});

gulp.task('less',function(){//convert less to css then zip this 
    gulp.src(app.srcPath+'style/index.less')
    .pipe($.less())
    .pipe(gulp.dest(app.devPath+'css'))
    .pipe($.cssmin())
    .pipe(gulp.dest(app.distPath+'css'))
    .pipe($.connect.reload());
});

gulp.task('js',function(){//concat js file and zip it 
    gulp.src(app.srcPath+"scripts/**/*.js")
    .pipe($.concat('index.js'))
    .pipe(gulp.dest(app.devPath+'js'))
    .pipe($.uglify())
    .pipe(gulp.dest(app.distPath+'js'))
    .pipe($.connect.reload());
});

gulp.task('image',function(){//manage image
    gulp.src(app.srcPath+"images/**/*")
    .pipe(gulp.dest(app.devPath+'image'))
    .pipe($.imagemin())
    .pipe(gulp.dest(app.distPath+'image'))
    .pipe($.connect.reload());
});

gulp.task('build',['image','js','less','lib','html']);

gulp.task('clean',function(){//clean the file in bulid and dist floder
    gulp.src([app.devPath,app.distPath])
    .pipe($.clean());
});

gulp.task('serve',['build','change'],function(){//build server 
    $.connect.server({
        root:[app.devPath],
        livereload:true,
        port:5751
    });

    open('http://localhost:5751');

});

gulp.task('change',function(){//watch the change and apply on the build and dist
    gulp.watch(app.srcPath+'scripts/**/*.js',['js']);
    gulp.watch(app.srcPath+'style/**/*.less',['less']);
    gulp.watch(app.srcPath+'images/**/*',['image']);
    gulp.watch(app.srcPath+'**/*.html',['html']);
    gulp.watch('bower_components/**/*.js',['lib']);
});

gulp.task('default',['serve']);
