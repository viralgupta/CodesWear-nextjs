const mongoose = require('mongoose')

const {Schema} = mongoose;
const UserSchema = new Schema({
  name: {
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
    required: true
  },
  tag:{
    type: String,
    default: 'General'
  },
  date: {
    type: Date,
    default: Date.now
  }
});
mongoose.models={}
const User = mongoose.model('User', UserSchema)
module.exports = User