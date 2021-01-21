const { model, Schema } = require('mongoose')

const User = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    ref: 'password'
  },
  campaigns: [{
    type: Schema.Types.ObjectId.get,
    required: true,
    ref: 'campaigns'
  }],
  entries: [{
    type: Schema.Types.ObjectId,
    require: true,
    ref: 'entries'
  }]
}, { timestamps: true })


module.exports = model('User', User)