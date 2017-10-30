var gulp = require('gulp')
,jshint = require('gulp-jshint')
,map = require('map-stream')
,autoprefixer = require('gulp-autoprefixer')
,uglify = require('gulp-uglify')
;

gulp.task('default' , function(){
    gulp.src('./app/main.js')
        .pipe(gulp.dest('./public/js/main.js'));
});

gulp.task('required-tasks' , ['taskA' ,'taskB'],function(){
    
});



var customReport = map((file,cb)=>{
   if(!file.jshint.success){
       //output sth
       console.log(`jshint fail in: ${file.path}`);
       file.jshint.results.forEach((err)=>{
           if(err){
               console.log("[错误]："+err.error.reason);
               console.log("[位置]："+file.path+" 文件的第"+err.error.line+"行的第"+err.error.character+"列发生错误");  
           }
       });
   }
});

gulp.task('check-code', function(){
   gulp.src("app/main.js")
       .pipe(jshint())
       // .pipe(jshint.reporter("default"));
       .pipe(customReport);
});

gulp.task('append-prefixer-for-code',function(){
   gulp.src("app/main.js")
   .pipe(autoprefixer({
       browsers: ['last 2 versions', 'Android >= 4.0'],
       cascade: true, //是否美化属性值 默认：true 像这样：
       //-webkit-transform: rotate(45deg);
       //        transform: rotate(45deg);
       remove:true //是否去掉不必要的前缀 默认：true 
   }))
   .pipe(gulp.dest('public/js'));
});

gulp.task('test-options' ,function(){
   gulp.src("app/core/app.core.js" , {base: './'})
       .pipe(uglify())
       .pipe(gulp.dest('public/build'));
});



