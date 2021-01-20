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
    type: Number,
    require: true
  },
  user: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
}, { timestamps: true })

module.exports = model('Campaign', Campaign)