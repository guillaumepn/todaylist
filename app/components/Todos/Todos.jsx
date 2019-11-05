import React, { useState } from 'react';
import { Heading } from '@chakra-ui/core';

import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoOptions from './TodoOptions';
import type { Todo } from '../../reducers/types';

type Props = {
  todos: Todo[],
  createTodo: (todo: Todo) => void,
  updateTodo: (todos: Todo[]) => void,
  removeTodo: (todos: Todo[]) => void
};

export default function Todos({
  todos,
  createTodo,
  updateTodo,
  removeTodo
}: Props) {
  const [selectedTodo, setSelectedTodo] = useState(null);
  return (
    <div data-tid="container">
      <Heading as="h1" size="2xl">
        TodayList
      </Heading>
      <AddTodo todos={todos} createTodo={createTodo} />
      <TodoList
        todos={todos}
        updateTodo={updateTodo}
        removeTodo={removeTodo}
        selectedTodo={selectedTodo}
        setSelectedTodo={setSelectedTodo}
      />
      <TodoOptions todo={selectedTodo} setSelectedTodo={setSelectedTodo} />
    </div>
  );
}
