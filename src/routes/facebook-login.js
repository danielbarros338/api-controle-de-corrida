const router = require('express').Router();
const passport = require('../config/passport');

router.get(
  '/login/federated/facebook',
  passport.authenticate('facebook', {
    session: false,
  }),
);

router.get(
  '/oauth2/redirect/facebook',
  passport.authenticate('facebook', {
    session: false,
  }),
  (req, res) => {
    res.send('placeholder text');
  },
);

module.exports = router;
