const mongoose = require("mongoose");
const Schema = mongoose.Schema

let User = new Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  username: {
    type: String
  },
  password: {
    type: String
  },
  email: {
    type: String
  },
  age: {
    type: Integer
  },
  credit_card_id: {
    type: Number
  },
  scores:{
    math:{
      latest: {
        type: Number
      },
      last:{
        type: Number
      },
      average:{
        type: Number
      }
    },
    words:{
      latest: {
        type: Number
      },
      last:{
        type: Number
      },
      average:{
        type: Number
      }
    },
    infant:{
      latest: {
        type: Number
      },
      last:{
        type: Number
      },
      average:{
        type: Number
      }
    }
  },
  plan_id:{
    type: Number
  },
  disable_instructions:{
    type: Boolean
  }
})

module.exports = mongoose.model('User', User);
