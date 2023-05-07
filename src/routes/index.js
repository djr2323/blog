const newsRouter = require("./news");
const siteRouter = require("./site");
const coursesRouter = require("./courses");
const meRouter = require("./me");

route = (app) => {
  app.use("/courses",coursesRouter);
  app.use("/news", newsRouter);
  app.use("/me",meRouter);
  app.use("/", siteRouter);
};
module.exports = route;
