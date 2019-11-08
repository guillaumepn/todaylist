// @flow
import React from 'react';

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  Button,
  Checkbox,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from '@chakra-ui/core';

const TodoOptions = ({ todo, todos, setSelectedTodo, updateTodo }) => {
  const onOptionsSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateTodo(todos.map(t => (t.id === todo.id ? todo : t)));
  };

  const onTodoNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTodo({ ...todo, title: event.currentTarget.value });
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

  const toggleTodoDisableNotification = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { checked } = event.currentTarget;
    setSelectedTodo({ ...todo, disableNotification: checked });
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
              value={todo.title}
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
            <FormHelperText>
              You will receive a desktop notification at this time, everyday
            </FormHelperText>
            <Box mt={4}>
              <FormLabel>
                <Checkbox
                  size="lg"
                  variantColor="green"
                  type="checkbox"
                  isChecked={todo.disableNotification}
                  onChange={toggleTodoDisableNotification}
                  mr={2}
                  name="todoDisableNotification"
                />
                Disable desktop notification for this task
              </FormLabel>
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
