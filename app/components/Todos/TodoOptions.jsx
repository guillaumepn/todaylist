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
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from '@chakra-ui/core';

const TodoOptions = ({ todo, todos, setSelectedTodo, updateTodo }) => {
  const onTodoNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTodo({ ...todo, text: event.currentTarget.value });
  };

  const onTodoHoursChange = (value: string) => {
    const date = new Date(todo.date);
    date.setHours(parseInt(value));
    setSelectedTodo({ ...todo, date });
  };

  const onTodoMinutesChange = (value: string) => {
    const date = new Date(todo.date);
    date.setMinutes(parseInt(value));
    setSelectedTodo({ ...todo, date });
  };

  const onOptionsSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const todoName = data.get('todoName');
    const todoHours = data.get('todoHours');
    const todoMinutes = data.get('todoMinutes');

    const todoDate = new Date(todo.date);
    todoDate.setHours(parseInt(todoHours));
    todoDate.setMinutes(parseInt(todoMinutes));

    updateTodo(
      todos.map(t =>
        t.id === todo.id ? { ...todo, text: todoName, date: todoDate } : t
      )
    );

    // const n = new Notification(todoName, {
    //   body: `it is ${todoHours}:${todoMinutes}`
    // });
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
            <FormLabel mt={4}>Time of task</FormLabel>
            <Box display="flex" alignItems="center">
              <NumberInput
                value={new Date(todo.date).getHours()}
                min={0}
                max={23}
                onChange={onTodoHoursChange}
              >
                <NumberInputField name="todoHours" />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              &nbsp;{':'}&nbsp;
              <NumberInput
                value={new Date(todo.date).getMinutes()}
                onChange={onTodoMinutesChange}
                min={0}
                max={59}
              >
                <NumberInputField name="todoMinutes" />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <FormHelperText m={0} ml={4} fontStyle="italic">
                (H:m)
              </FormHelperText>
            </Box>
            <Button type="submit" mt={4}>
              Update task
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
