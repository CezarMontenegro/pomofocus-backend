const Task = require('../models/task')

const getAllTasks = async (req, res) => {
  try {
    const task = await Task.find({})
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const createTask = async (req, res) => {
  const { body } = req;
  try {
    const task = await Task.create(body)
    res.status(200).json({ body })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const getTaskByID = async (req, res) => {
  const { id: taskID } = req.params;
  try {
    const task = await Task.findOne({ _id: taskID });
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const updateTask = async (req, res) => {
  const { id: taskID } = req.params;
  const { body } = req;
  try {
    const task = await Task.findOneAndUpdate({ _id: taskID }, body);
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const deleteTask = async (req, res) => {
  const { id: taskID } = req.params;
  try {
    const task = await Task.findOneAndDelete({ _id: taskID });
    res.status(200).json({ msg: "succeeded" })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

module.exports = {
  getAllTasks,
  createTask,
  getTaskByID,
  updateTask,
  deleteTask
}