require('dotenv').config(); // load .env variables

const server = require('./server/api/server.js');

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`\n=== Server listening on port ${port}\n`);
});
