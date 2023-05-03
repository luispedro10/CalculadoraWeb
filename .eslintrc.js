module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "airbnb",
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-console": ["error"],
        "no-extra-semi":"error",
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "space-before-blocks": ["error"],
        "parser": "babel-eslint",
        "semi":0
    }
};
