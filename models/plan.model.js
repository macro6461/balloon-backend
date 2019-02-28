const mongoose = require("mongoose");
const Scehma = mongoose.Schema;

let Plan = new Schema({
  plan_name:{
    type: String
  },
  access:{
    type: Number //from 1 to 3
  },
})

module.exports = mongoose.model('Plan', Plan);
