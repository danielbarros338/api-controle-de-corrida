const passport = require('passport');
const GoogleStrategy = require('./passport-strategies/google');
const FacebookStrategy = require('./passport-strategies/facebook');

passport.use(GoogleStrategy);
passport.use(FacebookStrategy);

module.exports = passport;
