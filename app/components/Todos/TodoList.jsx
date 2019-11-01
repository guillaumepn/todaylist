import React from 'react'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'

export default function TodoList({todos, updateTodo}) {
  return (
    <div className="todolist">
      {todos && todos.length ? todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} todos={todos} updateTodo={updateTodo} />
      )) : null}
    </div>
  )
}
