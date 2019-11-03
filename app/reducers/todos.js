import { CREATE_TODO, UPDATE_TODO, REMOVE_TODO, initialTodoState } from '../actions/todos';

export const todos = (state = initialTodoState, action) => {
  switch (action.type) {
    case CREATE_TODO: {
      const todos = [...state, action.payload];
      return todos;
      break;
    }
    case UPDATE_TODO: {
      return action.payload;
      break;
    }
    case REMOVE_TODO: {
      return action.payload;
      break;
    }
    default:
      return state;
  }
};
