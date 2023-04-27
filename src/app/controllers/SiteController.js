const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../ulti/mongoose");

class SiteController {
  index(req, res) {
    Course.find({})
      .then((courses) => {
        res.render("home", { courses:multipleMongooseToObject(courses) });
      })
      .catch((err) => res.status(400).json({ Error: "error!!" }));

    //
  }
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
