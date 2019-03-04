const mongoose = require("mongoose");
const Schema = mongoose.Schema

let User = new Schema({
  first_name: {
    type: String, required: true, trim: true, default: null
  },
  last_name: {
    type: String, required: true, trim: true, default: null
  },
  username: {
    type: String, required: true, trim: true, default: null
  },
  password: {
    type: String, required: true, trim: true, default: null
  },
  email: {
    type: String, required: true, trim: true, default: null
  },
  age: {
    type: Number, required: true, trim: true, default: null
  },
  credit_card_id: {
    type: Number, required: true, trim: true, default: null
  },
  scores:{
    math:{
      latest: {
        type: Number, required: true, trim: true, default: 0
      },
      last:{
        type: Number, required: true, trim: true, default: 0
      },
      average:{
        type: Number, required: true, trim: true, default: 0
      }
    },
    words:{
      latest: {
        type: Number, required: true, trim: true, default: 0
      },
      last:{
        type: Number, required: true, trim: true, default: 0
      },
      average:{
        type: Number, required: true, trim: true, default: 0
      }
    },
    infant:{
      latest: {
        type: Number, required: true, trim: true, default: 0
      },
      last:{
        type: Number, required: true, trim: true, default: 0
      },
      average:{
        type: Number, required: true, trim: true, default: 0
      }
    }
  },
  plan_id:{
    type: Number, required: true, trim: true, default: null
  },
  disable_instructions:{
    type: Boolean, required: true, default: null
  }
})

module.exports = mongoose.model('User', User);
