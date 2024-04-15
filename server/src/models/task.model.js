// Modèle de données pour une tâche
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
    dueDate: {
      type: Date,
      required: false,
    },
    priority: {
      type: String,
      enum: ['Low', 'Medium', 'High'],
      default: 'Medium',
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    status: {
      type: String,
      enum: ['Todo', 'In Progress', 'Done'],
      default: 'Todo',
    },
  },
  { timestamps: true },
);

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
