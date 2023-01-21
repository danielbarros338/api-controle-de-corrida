const passport = require('../config/passport');

/**
 * @param {import('express').Express} app
 */
module.exports = (app) => {
  app.get('/login/federated/google', passport.authenticate('google', {
    session: false,
  }));
  app.get('/oauth2/redirect/google', passport.authenticate('google', {
    session: false,
  }), (req, res) => {
    res.redirect('/');
  });
  app.get('/', (_, res) => res.send('ok'));
};
