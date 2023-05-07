const Course = require('../models/Course')
const { multipleMongooseToObject } = require("../../ulti/mongoose");

class MeController{
    storedCourses(req, res, next){
        Course.find({}).then((courses)=>{
            res.render('me/stored-course',{courses: multipleMongooseToObject(courses)});
        }).catch((err) => res.status(400).json({ Error: "error!!" }));
        
    }
}

module.exports = new MeController;