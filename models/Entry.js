const { model, Schema } = require('mongoose')

const Entry = new Schema({
  count: {
    type: String,
    required: true,
  },
  campaign: [{
    type: Schema.Types.ObjectId,
    require: true,
    ref: 'campaign'
  }],
  user: [{
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }]
}, { timestamps: true })

module.exports = model('Entry', Entry)