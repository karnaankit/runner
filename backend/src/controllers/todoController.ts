import { NextFunction, Request, Response } from 'express'

import * as todoService from '../services/todoService'

export const getAllTodos = (req: Request, res: Response, next: NextFunction) => {
  todoService
    .getAllTodos()
    .then(data => res.json(data))
    .catch(err => next(err))
}

export const getTodo = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params
  todoService
    .getTodo(parseInt(id))
    .then(data => res.json(data))
    .catch(err => next(err))
}

export const addTodo = (req: Request, res: Response, next: NextFunction) => {
  const { task } = req.body
  todoService
    .addTodo(task)
    .then(data => res.json(data))
    .catch(err => next(err))
}

export const updateTodo = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params
  const {task, completed: completed} = req.body
  todoService
    .updateTodo(parseInt(id), task, completed)
    .then(data => res.json(data))
    .catch(err => next(err))
}

export const deleteTodo = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params
  todoService
    .deleteTodo(parseInt(id))
    .then(data => res.json(data))
    .catch(err => next(err))
}
