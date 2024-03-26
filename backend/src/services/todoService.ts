import { Todo } from '../domain/Todo';
import myTodo from '../models/todoModel';

export const getAllTodos = async (): Promise<{ todo: Todo[]; message: string }> => {
  const todo = await myTodo.getAllTodos();
  return {todo, message: 'Todos fetched successfully'};
}

export const addTodo = async (task: string): Promise<{ todo: Todo[]; message: string }> => {
  const todo = await myTodo.addTodo(task);
  return {todo, message: 'Todo added successfully'};
}

export const getTodo = async (id: number): Promise<{ todo: Todo[]; message: string }> => {
  const todo = await myTodo.getTodoById(id);
  return {todo, message: 'Todo fetched successfully'};
}

export const updateTodo = async (id: number, task: string, completed: boolean): Promise<{ todo: Todo[]; message: string }> => {
  const todo = await myTodo.updateTodo(id, task, completed);
  return {todo, message: 'Todo updated successfully'};
}

export const deleteTodo = async (id: number): Promise<{ todo: Todo[]; message: string }> => {
  const todo = await myTodo.deleteTodo(id);
  return {todo, message: 'Todo deleted successfully'};
}
