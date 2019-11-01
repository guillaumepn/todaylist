import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import type { Todo } from '../../reducers/types';

type Props = {
  todos: Todo[],
  createTodo: (todo: Todo) => void,
  updateTodo: (todo: Todo) => void
};

export default function Todos({ todos, createTodo, updateTodo }: Props) {
  console.debug('TCL: Todos -> todos', todos);

  return (
    <div data-tid="container">
      <h2>TodayList</h2>
      <AddTodo todos={todos} createTodo={createTodo} />
      <TodoList todos={todos} updateTodo={updateTodo} />
    </div>
  );
}
