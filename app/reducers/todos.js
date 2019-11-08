import {
  FETCH_TODOS,
  RESET_TODOS,
  CREATE_TODO,
  UPDATE_TODO,
  REMOVE_TODO,
  initialTodoState
} from '../actions/todos';

export const todos = (state = initialTodoState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
    case RESET_TODOS:
    case REMOVE_TODO:
    case UPDATE_TODO:
      return action.payload;
    case CREATE_TODO: {
      const todos = [...state, action.payload];
      return todos;
      break;
    }
    default:
      return state;
  }
};
