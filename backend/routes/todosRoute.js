import express from 'express';
const router = express.Router();

import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodos,
} from '../controllers/todosController.js';

router.route('/').get(getTodos).post(addTodo);
router.route('/:id').put(updateTodo).delete(deleteTodos);

export default router;
