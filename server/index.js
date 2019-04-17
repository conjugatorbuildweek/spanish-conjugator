const { server } = require('./server.js');

const port = process.env.PORT || 4000; // run process env port, if nothing there, use 3300


server.listen(port, () => {
  console.log(`\n=== Server listening on port ${port}\n`);
});
