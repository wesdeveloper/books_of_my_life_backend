import app from '../src';

const { PORT = '5000' } = process.env;

// Run the server!
app.listen(parseInt(PORT, 10), '0.0.0.0', (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }

  app.log.info(`server listening on ${address}`);
});

export default app;
