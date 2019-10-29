import React from 'react'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'

export default function TodoList({todos, setTodos}) {
  return (
    <div className="todolist">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  )
}
