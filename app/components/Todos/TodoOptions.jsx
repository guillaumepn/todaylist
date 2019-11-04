import React, { useState } from 'react';

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button
} from '@chakra-ui/core';

const TodoOptions = ({ todo, setSelectedTodo }) => {
  const onTodoNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTodo({ ...todo, text: event.currentTarget.value });
  };

  const onOptionsSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const todoName = data.get('todoName');
    console.log('TCL: onOptionsSubmit -> todoName', todoName);
  };

  return (
    <Box mt={4} p={4} style={{ border: '1px solid lightgray' }}>
      {todo ? (
        <form onSubmit={onOptionsSubmit}>
          <FormControl>
            <FormLabel htmlFor="todoName">Task name</FormLabel>
            <Input
              type="text"
              id="todoName"
              name="todoName"
              onChange={onTodoNameChange}
              value={todo.text}
            />
            <FormHelperText id="email-helper-text">
              We'll never share your email.
            </FormHelperText>
            <Button type="submit" mt={4}>
              Submit
            </Button>
          </FormControl>
        </form>
      ) : (
        <Alert status="info">
          <AlertIcon />
          No task selected
        </Alert>
      )}
    </Box>
  );
};

export default TodoOptions;
