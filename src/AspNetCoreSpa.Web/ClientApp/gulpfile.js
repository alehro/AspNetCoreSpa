var gulp = require('gulp'),
    //sass = require('gulp-sass'),
    //jade = require('gulp-jade');
    //pug = require('gulp-pug'),
    changed = require('gulp-changed');


var path = {
    cs: {
        out: './ClientApp/_Site',
        src: ['./ClientApp/_Site/**/*.cs']
    },
    // sass : {
    //   out: "./Content",  
    //   src: ['./Content/*.scss', './Content/**/*.scss', './_ACE/**/*.scss', './_Legacy/**/*.scss']
    // } 
}
//Obsolete. The Ts generation is integrated into dotnet cli.
gulp.task('csharp_changed', function () {
    return gulp.src(path.cs.src)
        .pipe(changed(path.cs.out, { extension: '.cs' }))
        .pipe(print(function (filepath) {
            console.log("hello file: " + filepath);
        }))
        //.pipe(pug({
        //    pretty: true// puggers advice against it but reading not formatted html is real pain.
        //}))
        //someone in the chane list all the content of the html file on every error, so, cut the stupid stuff
        .on('error', (err) => {
            //let es = err.toString()
            //let detailsIndex = es.indexOf("Details:");
            //let message = es.substr(0, detailsIndex);
            console.log(message );
        })
        //.pipe(gulp.dest(path.jade.out))
});
