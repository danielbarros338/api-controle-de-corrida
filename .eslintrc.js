module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      files: ['src/**/*.js'],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {},
};
