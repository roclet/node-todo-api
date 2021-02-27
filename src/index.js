// Server imports
const Koa = require("koa");
const koaBetterBody = require("koa-better-body");
const convert = require("koa-convert");
const mount = require("koa-mount");
const session = require("koa-session");
const jwt = require('koa-jwt');
const database = require("./database");
const cors = require('@koa/cors');
// Router imports
const todoRoutes = require("./routes/todo");
const authRoutes = require("./routes/auth");

const PORT = process.env.PORT || 3000;

const main = async () => {
  // Create the database tables
  await database.sequelize.sync();
  const app = new Koa();
  app.use(cors());
  app.use(session({key: 'koa.sess'}, app));
  app.use(convert(koaBetterBody({fields: "body"})));
  
  app.use(mount(authRoutes.allowedMethods()));
  app.use(mount(authRoutes.routes()));

  app.use(jwt({ secret: process.env.API_SECRET }));

  app.use(mount(todoRoutes.allowedMethods()));
  app.use(mount(todoRoutes.routes()));

  return app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
}

/* istanbul ignore if*/
if (!module.parent) main().then().catch(console.log);

module.exports = {main}
