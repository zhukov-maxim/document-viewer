module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
    "jest": true
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "import",
    "jest"
  ],
  "rules": {
    "comma-dangle": ["error", "never"],
    "no-console": "off",
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
    "no-confusing-arrow": "off",
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/valid-expect": "error",
    "max-len": "off"
  }
};