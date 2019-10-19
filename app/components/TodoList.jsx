import React from 'react'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'

export default function TodoList() {
  return (
    <div className="todolist">
      <AddTodo />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  )
}
