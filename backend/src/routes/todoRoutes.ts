import { Router } from 'express';

import * as todoController from '../controllers/todoController';

const router = Router();

router.get('/', todoController.getAllTodos);
router.get('/:id', todoController.getTodo);
router.post('/', todoController.addTodo);
router.put('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);

export default router;
