import { CREATE_TODO, UPDATE_TODO, initialTodoState } from '../actions/todos';

export const todos = (state = initialTodoState, action) => {
  switch (action.type) {
    case CREATE_TODO: {
      const todos = [...state, action.payload];
      return todos;
      break;
    }
    case UPDATE_TODO: {
      const todos = [...state, action.payload];
      return todos;
      break;
    }
    default:
      return state;
  }
};
