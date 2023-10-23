const express = require('express');
const router = express.Router();
const Task = require('../models/task');

router.get('/', async (req, res) => {
  try {
    const task = await Task.find({})
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
})

router.post('/', async (req, res) => {
  const { body } = req;
  try {
    const task = await Task.create(body)
    res.status(200).json({ body })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
})

router.get('/:id', async (req, res) => {
  const { id: taskID } = req.params;
  try {
    const task = await Task.findOne({ _id: taskID });
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
})

router.put('/:id', async (req, res) => {
  const { id: taskID } = req.params;
  const { body } = req;
  try {
    const task = await Task.findOneAndUpdate({ _id: taskID }, body);
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
})

router.delete('/:id', async (req, res) => {
  const { id: taskID } = req.params;
  try {
    const task = await Task.findOneAndDelete({ _id: taskID });
    res.status(200).json({ msg: "succeeded" })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
})

module.exports = router;

