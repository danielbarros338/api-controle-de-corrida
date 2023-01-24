const FacebookStrategy = require('passport-facebook');

module.exports = new FacebookStrategy(
  {
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: '/oauth2/redirect/facebook',
  },
  (_accessToken, _refreshToken, profile, done) => done(null, profile),
);
