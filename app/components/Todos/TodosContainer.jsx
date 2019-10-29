import React, {useState} from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'

export default function TodosContainer() {
  const [todos, setTodos] = useState([]);

  console.log("TCL: TodosContainer -> todos", todos)

  return (
    <div>
      <AddTodo todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}
