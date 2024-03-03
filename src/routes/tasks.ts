const express = require('express');
const router = express.Router();
const {
  getAllTasks,
  createTask,
  getTaskByID,
  updateTask,
  deleteTask
} = require('../controlers/tasks');

router.route('/').get(getAllTasks).post(createTask);;
router.route('/:id').get(getTaskByID).put(updateTask).delete(deleteTask);

module.exports = router;

