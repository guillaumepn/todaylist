import {jsonStore} from '../store';

export const CREATE_TODO = 'CREATE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const initialTodoState = [];

export const createTodo = (todo) => {
  const todos = jsonStore.get('todos');
  jsonStore.set('todos', [...todos, todo]);
  return {
    type: CREATE_TODO,
    payload: todo
  }
}

export const updateTodo = (todos) => {
  jsonStore.set(
    'todos',
    todos
  );
  return {
    type: UPDATE_TODO,
    payload: todos
  }
}

export const removeTodo = (todos) => {
  jsonStore.set(
    'todos',
    todos
  );
  return {
    type: REMOVE_TODO,
    payload: todos
  }
}
