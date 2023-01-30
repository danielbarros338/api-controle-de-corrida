const googleLoginRoute = require('./google-login');
const facebookLoginRoute = require('./facebook-login');

/**
 * @param {import('express').Express} app
 */
module.exports = (app) => {
  app.use(googleLoginRoute);
  app.use(facebookLoginRoute);
};
