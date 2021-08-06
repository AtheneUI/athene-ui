const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: {
        autoprefixer,
        "postcss-px-to-viewport": {
            unitToConvert: 'px',
            viewportWidth: 750,
            unitPrecision: 5,
            propList: ['*'],
            viewportUnit: 'vw',
            fontViewportUnit: 'vw',
            exclude: /node_modules/,
        },
    },
};