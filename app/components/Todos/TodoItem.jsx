import React from 'react';
import { Checkbox, useToast } from '@chakra-ui/core';

export default function TodoItem({ todo, todos, updateTodo }) {
  const toast = useToast();

  const showToast = () => {
    toast({
      title: "Good job!",
      description: "You've just completed a task",
      status: "success",
      duration: 5000,
      isClosable: true,
    })
  }

  const toggleTodoStatus = event => {
    const status = event.currentTarget.checked;
    updateTodo(todos.map(t => (t.id === todo.id ? { ...t, status } : t)));
    if (status) {
      showToast();
    }
  };

  return (
    <div className={todo.status ? 'completed' : ''}>
      <Checkbox
        size="lg"
        variantColor="green"
        type="checkbox"
        isChecked={todo.status}
        onChange={toggleTodoStatus}
      >
        {todo.text}
      </Checkbox>
    </div>
  );
}
