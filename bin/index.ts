import app from '../src';

const { PORT } = process.env;

app.set("port", process.env.PORT || 5000);

const server = app.listen(app.get("port"), () => {
  console.log(`App is running at http://localhost:${app.get("port")} in ${app.get("env")} mode`);
  console.log("  Press CTRL-C to stop\n");
});

export default server;
