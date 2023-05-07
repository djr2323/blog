const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Course = new schema(
  {
    name: { type: String, required: true },
    description: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", Course);
