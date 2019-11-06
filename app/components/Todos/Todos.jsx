// @flow
import React, { useState } from 'react';
import { Heading } from '@chakra-ui/core';

import type { Todo } from '../../reducers/types';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoOptions from './TodoOptions';

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
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

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
      <TodoOptions
        todo={selectedTodo}
        todos={todos}
        setSelectedTodo={setSelectedTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}
