export const CREATE_TODO = 'CREATE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

export const initialTodoState = [];

export const createTodo = (todo) => {
  return {
    type: CREATE_TODO,
    payload: todo
  }
}

export const updateTodo = (todo) => {
  return {
    type: UPDATE_TODO,
    payload: todo
  }
}
