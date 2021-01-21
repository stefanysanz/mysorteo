const { model, Schema } = require('mongoose')

const Campaign = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  value: {
    type: String,
    require: true
  }
}, { timestamps: true })

module.exports = model('Campaign', Campaign)