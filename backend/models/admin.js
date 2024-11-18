const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  authToken: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400 
  }
});

module.exports = mongoose.model('Admin', adminSchema);
