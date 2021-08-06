module.exports = {
    "components/**/*.{jsx,tsx,ts,js}": [
        "prettier --config .prettierrc --write",
        "eslint --fix"
    ],
    "test/**/*.{jsx,tsx,ts,js}": [
        "prettier --config .prettierrc --write",
        "eslint --fix"
    ]
};