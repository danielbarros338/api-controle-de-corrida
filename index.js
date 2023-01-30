const path = require('path');
require('dotenv').config({
  path: path.resolve(
    process.env.NODE_ENV === 'development' ? './.env.development' : './.env.production',
  ),
});
const app = require('./src/config/express');

const port = process.env.PORT || 3030;

app.listen(port, () => console.log(`Server running on port ${port}`));
