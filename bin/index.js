const app = require('../src');

const { PORT = 3000 } = process.env;

// Run the server!
app.listen(PORT, function(err, address) {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`server listening on ${address}`);
});
