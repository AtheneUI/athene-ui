const chalk = require('chalk');

const success = (text) => {
    console.log(chalk.green.bold(text));
};

const failed = (text) => {
    console.log(chalk.red.bold(text));
};

const log = {
    success,
    failed,
};

module.exports = log;
