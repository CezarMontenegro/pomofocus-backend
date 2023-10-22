const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
  },
  completed: {
    type: Boolean,
    required: [true, 'must provide completed']
  }
})

module.exports = mongoose.model('Task', TaskSchema);