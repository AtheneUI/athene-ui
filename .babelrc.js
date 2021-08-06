const babelConfig = require("./config/babel.config");
console.log("babel::s", process.env.BABEL_ENV);
module.exports = babelConfig(process.env.BABEL_ENV, process.env.JEST_ENV);