module.exports = {
<<<<<<< HEAD
  extends: [
    'semistandard',
    'standard'
  ]
}
=======
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react/recommended", "plugin:jest/recommended", "prettier", "prettier/@typescript-eslint"],
  rules: {
    "react/prop-types": false
  },
  parserOptions: {
    ecmaVersion: 6,
    project: "./tsconfig.json",
    sourceType: "module"
  },
  settings: {
    react: {
      version: "detect"
    },
    linkComponents: [
      {"name": "Link", "linkAttribute": "href"}
    ]
  },
  env: {
    "jest/globals": true
  }
};
>>>>>>> 43e66e21525f83e5a8ac168def6981d56fc8ab20
