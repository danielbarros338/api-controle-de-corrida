const googleLoginRoute = require('./google-login');

/**
 * @param {import('express').Express} app
 */
module.exports = (app) => {
  app.use(googleLoginRoute);
};
