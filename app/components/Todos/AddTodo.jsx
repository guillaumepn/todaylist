import React, {useRef} from 'react'

import {jsonStore} from '../../containers/HomePage';

export default function AddTodo({todos, createTodo}) {
  const inputRef = useRef();

  const onAddTodoSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const todoName = data.get('todoname');
    if (todoName) {
      const newTodo = {
        id: todos.length,
        text: todoName,
        status: false
      }
      createTodo(newTodo);
      inputRef.current.value = '';
      console.debug(inputRef.current);
      jsonStore.set('todos', [...todos, newTodo]);
    }
  }

  return (
      <form onSubmit={onAddTodoSubmit}>
        <input type="text" ref={inputRef} name="todoname" />
      </form>
  )
}
