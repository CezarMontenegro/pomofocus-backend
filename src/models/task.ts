const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: [true, 'must provide task name'],
  },
  completed: {
    type: Boolean,
    required: [true, 'must provide completed']
  }
})

module.exports = mongoose.model('Task', TaskSchema);