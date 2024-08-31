const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("styles.scss", { allowEmpty: true })
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("css")); 
}

function watchFiles() {
  watch("styles.scss", buildStyles); 
}

exports.default = series(buildStyles, watchFiles);
