'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ChatSchema = new Schema({
  from: String,
  content: String,
  time: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Chat', ChatSchema);