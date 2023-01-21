const passport = require('passport');
const GoogleStrategy = require('passport-google-oidc');

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/oauth2/redirect/google',
      scope: ['profile'],
    },
    (_, profile, done) => done(null, profile),
  ),
);

module.exports = passport;
