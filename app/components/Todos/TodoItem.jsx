import React from 'react';
import { Checkbox, CloseButton, Flex, useToast } from '@chakra-ui/core';

export default function TodoItem({ todo, todos, updateTodo, removeTodo }) {
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

  const removeTodoItem = () => {
    removeTodo(todos.filter(t => t.id !== todo.id));
  }

  return (
    <Flex align="center" className={todo.status ? 'completed' : ''}>
      <Checkbox
        size="lg"
        variantColor="green"
        type="checkbox"
        isChecked={todo.status}
        onChange={toggleTodoStatus}
      >
        {todo.text}
      </Checkbox>
      <CloseButton onClick={removeTodoItem} size="sm" ml={1} />
    </Flex>
  );
}
