import React from 'react'

export default function AddTodo() {
  const onAddTodoSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const todoName = data.get('todoname');
    if (todoName) {
      console.log(todoName);
    }
  }

  return (
      <form onSubmit={onAddTodoSubmit}>
        <input type="text" name="todoname" />
      </form>
  )
}
