import React from 'react';
import {
  Button,
  Box,
  Checkbox,
  CloseButton,
  Flex,
  Icon,
  useToast
} from '@chakra-ui/core';

export default function TodoItem({
  todo,
  todos,
  updateTodo,
  removeTodo,
  setSelectedTodo
}) {
  const toast = useToast();

  const showToast = () => {
    toast({
      title: 'Good job!',
      description: "You've just completed a task",
      status: 'success',
      duration: 5000,
      isClosable: true
    });
  };

  const toggleTodoStatus = event => {
    const status = event.currentTarget.checked;
    updateTodo(todos.map(t => (t.id === todo.id ? { ...t, status } : t)));
    if (status) {
      showToast();
    }
  };

  const removeTodoItem = () => {
    removeTodo(todos.filter(t => t.id !== todo.id));
  };

  const onSelectTodo = () => {
    console.log('TCL: onSelectTodo -> todo', todo);
    setSelectedTodo(todo);
  };

  return (
    <Flex align="center" className={todo.status ? 'completed' : ''}>
      <Checkbox
        size="lg"
        variantColor="green"
        type="checkbox"
        isChecked={todo.status}
        onChange={toggleTodoStatus}
        mr={2}
      />
      <Box as="button" onClick={onSelectTodo}>
        {todo.text}
      </Box>
      <CloseButton onClick={removeTodoItem} size="sm" mx={1} />
    </Flex>
  );
}
