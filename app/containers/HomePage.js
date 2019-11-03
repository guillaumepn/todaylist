import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as TodoActions from '../actions/todos';
import Todos from '../components/Todos/Todos';
import { jsonStore } from '../store';

type Props = {
  createTodo: (todo: Todo) => void,
  updateTodo: (todos: Todo[]) => void,
  removeTodo: (todos: Todo[]) => void
};

const HomePage = ({ createTodo, updateTodo, removeTodo }: Props) => {
  const todos = jsonStore.get('todos');
  return (
    <Todos todos={todos} createTodo={createTodo} updateTodo={updateTodo} removeTodo={removeTodo} />
  );
};

function mapStateToProps(state) {
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
