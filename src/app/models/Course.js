const mongoose = require('mongoose')
const schema = mongoose.Schema;

const Course = new schema({
    name:{type:String},
    description:{type:String},
    createAt:{type:Date, default:Date.now},
    updateAt:{type:Date, default:Date.now},
})

module.exports = mongoose.model('Course',Course)