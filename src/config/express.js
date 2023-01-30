const express = require('express');
const cors = require('cors');
const session = require('express-session');

const app = express();

app.use(express.json());
app.set('trust proxy', 1); // trust first proxy
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      httpOnly: process.env.NODE_ENV === 'production',
    },
  }),
);
app.use(cors());

require('../routes/routes')(app);

module.exports = app;
