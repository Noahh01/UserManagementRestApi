const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please add a first name']
    },
    lastName: {
        type: String,
        required: [true, 'Please add a last name']
    },
    email: {
        type: String,
        required: [true, 'Please add a email']
    },
    address: {
        type: String,
        required: [true, 'Please add a address']
    }
  }, 
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)