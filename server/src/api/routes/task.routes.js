const express = require('express');
const { validationResult } = require('express-validator');
const {
  validateTaskName,
  validateTaskDescription,
} = require('../validators/task.validators');
const {
  allTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/task.controller');

// Route pour la gestion des tâches
const router = express.Router();
const Task = require('../models/task.model');

// Endpoint GET all tasks

router.get('/', allTasks);

// Endpoint GET a task by ID

router.get('/:id', getTask);

// Endpoint POST a task

router.post('/', [validateTaskName(), validateTaskDescription()], createTask);

// Endpoint UPDATE a task by ID

router.put('/:id', [validateTaskName(), validateTaskDescription()], updateTask);

// Endpoint DELETE task

router.delete('/:id', deleteTask);

module.exports = router;
