const GoogleStrategy = require('passport-google-oidc');

module.exports = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/oauth2/redirect/google',
    scope: ['profile'],
  },
  (_, profile, done) => done(null, profile),
);
