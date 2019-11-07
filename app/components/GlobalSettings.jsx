import React from 'react';

import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Heading,
  Input,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from '@chakra-ui/core';

const GlobalSettings = () => {
  const onOptionsSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const resetHours = data.get('resetHours');
    const resetMinutes = data.get('resetMinutes');
  };

  const onResetHoursChange = (value: string) => {
    console.log('reset hours');
  };

  const onResetMinutesChange = (value: string) => {
    console.log('reset min');
  };

  return (
    <Box mt={4} p={4} style={{ border: '1px solid lightgray' }}>
      <Heading size="lg">Global settings</Heading>

      <form onSubmit={onOptionsSubmit}>
        <FormControl>
          <FormLabel mt={4}>Time of task</FormLabel>
          <Box display="flex" alignItems="center">
            <NumberInput
              value={new Date(todo.date).getHours()}
              min={0}
              max={23}
              onChange={onResetHoursChange}
            >
              <NumberInputField name="resetHours" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            &nbsp;{':'}&nbsp;
            <NumberInput
              value={new Date(todo.date).getMinutes()}
              onChange={onResetMinutesChange}
              min={0}
              max={59}
            >
              <NumberInputField name="resetMinutes" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <FormHelperText m={0} ml={4} fontStyle="italic">
              (H:m)
            </FormHelperText>
          </Box>
          <FormHelperText m={0} ml={4} fontStyle="italic">
            (H:m)
          </FormHelperText>
          <Button type="submit" mt={4}>
            Update settings
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default GlobalSettings;
