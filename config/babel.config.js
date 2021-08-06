const babelConfig = (env, test) => {
    const isEsmEnv = () => env === "esm";
    const isUmdEnv = () => env === "umd";
    return {
        "presets": [
            ["@babel/preset-env", {
                "loose": isUmdEnv() ? false : true,
                "modules": test ? "auto": isEsmEnv() ? false : isUmdEnv() ? false : "cjs",
            }],
            "@babel/preset-react",
            "@babel/preset-typescript"
        ],
        "plugins": [
            ["@babel/plugin-proposal-decorators", {
                "legacy": true
            }],
            ["@babel/plugin-proposal-class-properties", {
                "loose": isUmdEnv() ? false : true
            }],
            ["@babel/plugin-transform-runtime", {
                "corejs": 3,
                "useESModules": isEsmEnv() ? true : false,
            }]
        ]
    };
};

module.exports = babelConfig;