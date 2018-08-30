module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "@vue/airbnb",
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "max-len": ["error", 120, 2, {
      "ignoreUrls": true,
      "ignoreComments": false,
      "ignoreRegExpLiterals": true,
      "ignoreStrings": true,
      "ignoreTemplateLiterals": true,
    }],
    "indent": ["error", 4],
    "vue/html-indent": ["error", 4],
    "no-param-reassign": ["error", {
      "ignorePropertyModificationsFor": [
        "state" // for Vue state mutations
      ]
    }],
    "no-shadow": ["error", {
      "allow": ["state"]
    }],
    "import/no-unresolved": ["allow"],
  },
  "globals": {
    "Modernizr": false,
    "Vue": true,
    "ga": true
  },
  parserOptions: {
    parser: "babel-eslint",
  },
};

