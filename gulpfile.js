const gulp = require('gulp');
const backstopjs = require('backstopjs');

gulp.task('ref', () => backstopjs('reference'));
gulp.task('test', () => backstopjs('test'));

// https://github.com/garris/BackstopJS
// https://css-tricks.com/automating-css-regression-testing/

// 1. cd project/root/
// 2. npm install -g backstopjs
// 3. backstop init
// 4. update backstop.json
// 5. backstop reference
// 6. backstop test
// 7. backstop approve

const Gemini = require('gemini/api'),
      gemini = new Gemini('./.gemini.yml');

// var collection = gemini.readTests();
// gulp.task('update', () => { gemini.update(collection); } );
// var collection = gemini.readTests('gemini/tests/desktop');

gulp.task('default', () => {
  // gemini.readTests()
  //   .done(function(collection) {
  //     collection.topLevelSuites().forEach(function(suite) {
  //       console.log(suite.name);
  //     });
  //   });
  return gemini.readTests()
    .then((collection) => gemini.test(collection));
});