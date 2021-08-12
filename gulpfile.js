const gulp = require('gulp');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const replace = require('gulp-replace');
const postcss = require('gulp-postcss');
const compileLess = require('gulp-less');
const cleanCss = require('gulp-clean-css');
const log = require('./scripts/log.script');
const sourceMap = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

// 需要处理的包含 ts|tsx 的目录
const tsDir = [
    "components/**/*.ts",
    "components/**/*.tsx",
    "!components/index.ts",
    "!components/**/__test__/*.ts",
    "!components/**/__test__/*.tsx",
    "!components/**/*.test.ts",
    "!components/**/*.test.tsx",
];

// 需要处理的包含 less 的目录
const lessDir = [
    "components/**/*.less",
];

const cssDir = [
    "components/**/*.css",
];

// 需要处理的 css in js 的目录
const cssInJsDir = [
    "components/**/_style/*.tsx",
    "components/**/style/*.tsx",
];

const componentsLessPath = 'lib/_style/components.less';

// 将 tsx 编译为 js 并输出到指定目录
const compileTsx2Js = (src, target) => {
    return () => {
        return gulp.src(src)
            .pipe(babel())
            .pipe(rename((path) => {
                path.extname = ".js";
            }))
            .pipe(gulp.dest(target))
            .on('end', () => {
                log.success(`successful: tsx 成功编译为 js 并输出到 ${ target } 目录`)
            });
    };
};
// 将 tsx 以 CommonJS 的格式转换为 js 并输出到 lib 目录
gulp.task("compile-tsx-cjs", compileTsx2Js(tsDir, 'lib'));
// 将 tsx 以 ES Module 的格式转换为 js 并输出到 es 目录
gulp.task("compile-tsx-esm", compileTsx2Js(tsDir, 'es'));

// 将文件拷贝到 lib 或者 es 目录下
const copy2LibAndEs = (src) => {
    return () => {
        return gulp.src(src)
            .pipe(gulp.dest('lib'))
            .pipe(gulp.dest('es'))
            .on('end', () => {
                log.success(`successful: 已成功将文件拷贝到 lib、es 目录`)
            });
    };
};
// 将 less 拷贝到 lib 和 es 对应目录下
gulp.task("copy-less", copy2LibAndEs(lessDir));

// 将 less 编译为 css 并输出到 lib、es 目录
const compileLess2css = (src) => {
    return () => {
        return gulp.src(src)
            .pipe(compileLess())
            .pipe(autoprefixer())
            .pipe(gulp.dest('lib'))
            .pipe(gulp.dest('es'))
            .on('end', () => {
                log.success(`successful: less 成功编译为 css 并输出到 lib、es 目录`)
            });
    };
};
// 将 less 编译为 css 并输出
gulp.task('compile-less', compileLess2css(lessDir));
// 根据打包模式生成对应模式的 css in js 文件
const cssInJS = (src, target) => {
    return () => {
        return gulp.src(src)
            .pipe(babel())
            .pipe(replace('less', 'css'))
            .pipe(rename((path) => {
                path.basename = 'css';
                path.basename = 'css';
                path.extname = '.js';
            }))
            .pipe(gulp.dest(target))
            .on('end', () => {
                log.success(`successful: css.js 生成完毕并输出到 ${ target } 目录`)
            });
    }
};
// 生成 cjs 模式的 css in js 文件
gulp.task('generator-cssInJs-cjs', cssInJS(cssInJsDir, 'lib'));
// 生成 esm 模式的 css in js 文件
gulp.task('generator-cssInJs-esm', cssInJS(cssInJsDir, 'es'));

gulp.task('generator-athene-css', () => {
    return gulp.src([...lessDir, ...cssDir])
        .pipe(compileLess())
        .pipe(autoprefixer())
        .pipe(postcss())
        .pipe(concat('athene.css'))
        .pipe(gulp.dest('dist'))
        .on('end', () => {
            log.success(`successful: athene.css 生成完毕，并输出到 dist 目录`)
        });
});

const lessSuffix2Css = (src, target) => {
    return () => {
        return gulp.src(src)
            .pipe(replace('less', 'css'))
            .pipe(rename((path) => {
                path.extname = '.css';
            }))
            .pipe(gulp.dest(target))
            .on('end', () => {
                log.success(`successful: 成功将文件内部引用中的 less 替换成了 css，并输出到 ${ target } 目录`)
            });
    }
};
// 将 lib 下的 components.less 生成对应的 css
gulp.task('generator-components-css', lessSuffix2Css(componentsLessPath, 'lib/_style'));

gulp.task('clean-athene-css', () => {
    return gulp.src('dist/athene.css')
        .pipe(cleanCss())
        .pipe(rename((path) => {
            path.extname = '.min.css';
        }))
        .pipe(gulp.dest('dist'))
        .on('end', () => {
            log.success(`successful: 成功将 athene.css 压缩并输出到 dist 目录`)
        });
});

gulp.task('distDir-generator-css-sourceMap', () => {
    return gulp.src('dist/athene*.css')
        .pipe(sourceMap.init())
        .pipe(sourceMap.write('.', {
            addComment: true
        }))
        .pipe(gulp.dest('dist'))
        .on('end', () => {
            log.success(`successful: 成功生成 css 的 sourceMap 并输出到 dist 目录`)
        });
});

// 将 components 目录下的 css 复制到 lib、es 对应的目录下
gulp.task('copy-css', copy2LibAndEs(cssDir));