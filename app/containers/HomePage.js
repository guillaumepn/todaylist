import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Store from '../store';
import * as TodoActions from '../actions/todos';
import Todos from '../components/Todos/Todos';

type Props = {
  todos: Todo[],
  createTodo: (todo: Todo) => void,
  updateTodo: (todo: Todo) => void
};

export const jsonStore = new Store({
  configName: 'user-data',
  defaults: {
    todos: []
  }
});

const HomePage = ({ createTodo, updateTodo }: Props) => {
  const todos = jsonStore.get('todos');
  console.log("TCL: todos", todos)
  return <Todos todos={todos} createTodo={createTodo} updateTodo={updateTodo} />
}

function mapStateToProps(state) {
  console.log("TCL: mapStateToProps -> state", state)
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TodoActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
