import React, { useRef } from 'react';
import { Input } from '@chakra-ui/core';

const getRandomID = () => {
  return (
    Math.random()
      .toString(36)
      .substr(2, 9) + new Date().getTime().toString(16)
  );
};

export default function AddTodo({ todos, createTodo }) {
  const inputRef = useRef();

  const onAddTodoSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const todoName = data.get('todoname');
    if (todoName) {
      const newTodo = {
        id: getRandomID(),
        title: todoName,
        status: false,
        date: new Date(),
        disableNotification: false
      };
      createTodo(newTodo);
      inputRef.current.value = '';
    }
  };

  return (
    <form onSubmit={onAddTodoSubmit}>
      <Input
        placeholder='"Read a chapter", "Do 50 push-ups"...'
        ref={inputRef}
        name="todoname"
        my={5}
      />
    </form>
  );
}
