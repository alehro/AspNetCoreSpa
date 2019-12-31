var gulp = require('gulp'),
    //sass = require('gulp-sass'),
    //jade = require('gulp-jade');
    //pug = require('gulp-pug'),
    changed = require('gulp-changed');
const pug = require('gulp-pug');



var path = {
    jade: {
        out: './_Site',
        src: ['./_Site/**/*.pug']
    }
};

gulp.task('pug_changed', function () {
    return gulp.src(path.jade.src)
        .pipe(changed(path.jade.out, { extension: '.html' }))
        .pipe(pug({
            pretty: true
        }))
        //someone in the chain lists all the content of the html file on every error, so, cut the stupid stuff
        .on('error', (err) => {
            let es = err.toString()
            let detailsIndex = es.indexOf("Details:");
            let message = es.substr(0, detailsIndex);
            console.log(message + "The details go here but they does not relate to the pug error we need, so they are truncated. All the info we need is above.");
        })
        .pipe(gulp.dest(path.jade.out));
});
//var path = {
//    cs: {
//        out: './ClientApp/_Site',
//        src: ['./ClientApp/_Site/**/*.cs']
//    },
//    // sass : {
//    //   out: "./Content",  
//    //   src: ['./Content/*.scss', './Content/**/*.scss', './_ACE/**/*.scss', './_Legacy/**/*.scss']
//    // } 
//}
////Obsolete. The Ts generation is integrated into dotnet cli.
//gulp.task('csharp_changed', function () {
//    return gulp.src(path.cs.src)
//        .pipe(changed(path.cs.out, { extension: '.cs' }))
//        .pipe(print(function (filepath) {
//            console.log("hello file: " + filepath);
//        }))
//        //.pipe(pug({
//        //    pretty: true// puggers advice against it but reading not formatted html is real pain.
//        //}))
//        //someone in the chane list all the content of the html file on every error, so, cut the stupid stuff
//        .on('error', (err) => {
//            //let es = err.toString()
//            //let detailsIndex = es.indexOf("Details:");
//            //let message = es.substr(0, detailsIndex);
//            console.log(message );
//        })
//        //.pipe(gulp.dest(path.jade.out))
//});
