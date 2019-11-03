import React, {useRef} from 'react'
import { Input } from "@chakra-ui/core";

import {jsonStore} from '../../containers/HomePage';

const getRandomID = () => {
  return Math.random().toString(36).substr(2, 9) + (new Date().getTime()).toString(16);
}

export default function AddTodo({todos, createTodo}) {
  const inputRef = useRef();

  const onAddTodoSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const todoName = data.get('todoname');
    if (todoName) {
      const newTodo = {
        id: getRandomID(),
        text: todoName,
        status: false,
        date: new Date()
      }
      createTodo(newTodo);
      inputRef.current.value = '';
      console.debug(inputRef.current);
      jsonStore.set('todos', [...todos, newTodo]);
    }
  }

  return (
      <form onSubmit={onAddTodoSubmit}>
        <Input placeholder='"Read a chapter", "Do 50 push-ups"...' ref={inputRef} name="todoname" my={5} />
      </form>
  )
}
