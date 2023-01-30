const router = require('express').Router();
const passport = require('../config/passport');

router.get('/login/federated/google', passport.authenticate('google', {
  session: false,
}));

router.get('/oauth2/redirect/google', passport.authenticate('google', {
  session: false,
}), (req, res) => {
  res.send('placeholder text');
});

module.exports = router;
