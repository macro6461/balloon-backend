const mongoose = require("mongoose");
const Scehma = mongoose.Schema;

let CreditCard = new Schema({
  user_id:{
    type: Number
  },
  credit_card_number:{
    type: String
  },
  zip_code: {
    type: Number
  },
  exp_date: {
    type: String
  }
})


module.exports = mongoose.model('CreditCard', CreditCard);
