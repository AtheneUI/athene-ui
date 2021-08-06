const util = function util() {
    console.log("TODO ...");
};
module.exports = util;

/*

    "compile:cjs": "cross-env BABEL_ENV=cjs gulp compile-tsx-cjs && tsc -p ./tsconfig.build.json --outDir lib",
    "compile:esm": "cross-env BABEL_ENV=esm gulp compile-tsx-esm && tsc -p ./tsconfig.build.json --outDir es",
    "compile-less": "gulp compile-less",
    "compile-css": "gulp generator-athene-css && gulp clean-athene-css && gulp distDir-generator-css-sourceMap",
    "build:umd": "cross-env BABEL_ENV=umd BUILD_ENV=development webpack --config webpack.prod.config.js",
    "build:umd-min": "cross-env BABEL_ENV=umd BUILD_ENV=production webpack --config webpack.prod.config.js",
    "build:cjs": "cross-env BABEL_ENV=cjs babel components/index.ts -d lib --extensions '.ts' && yarn compile:cjs",
    "build:esm": "cross-env BABEL_ENV=esm babel components/index.ts -d es --extensions '.ts' && yarn compile:esm",
    "build:clean": "node ./scripts/build-clean.script.js",
    "build": "yarn build:clean && yarn build:cjs && yarn build:esm && yarn copy-less && yarn compile-less && yarn generator-cssInJs && yarn build:umd && yarn build:umd-min && yarn polymerize-less && yarn compile-css",
    "copy-less": "gulp copy-less",
    "polymerize-less": "node ./scripts/polymerize-less.script.js",
    "generator-cssInJs": "yarn generator-cssInJs-cjs && yarn generator-cssInJs-esm",
    "generator-cssInJs-cjs": "cross-env BABEL_ENV=cjs gulp generator-cssInJs-cjs",
    "generator-cssInJs-esm": "cross-env BABEL_ENV=esm gulp generator-cssInJs-esm",
    "site": "cross-env APP_ROOT=dumi dumi dev",
    "build:site": "cross-env APP_ROOT=dumi dumi build",
    "start": "webpack-dev-server --config webpack.dev.config.js",
    "test": "cross-env BABEL_ENV=esm JEST_ENV=true jest"

*/