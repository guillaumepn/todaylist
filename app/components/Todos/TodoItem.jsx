import React from 'react';

export default function TodoItem({ todo, todos, setTodos }) {
  const toggleTodoStatus = event => {
    const status = event.currentTarget.checked;
    setTodos(todos.map(t => (t.id === todo.id ? { ...t, status } : t)));
  };

  return (
    <div className={todo.status ? 'completed' : ''}>
      <label>
        {todo.text}{' '}
        <input
          type="checkbox"
          checked={todo.status}
          onChange={toggleTodoStatus}
        />
      </label>
    </div>
  );
}
