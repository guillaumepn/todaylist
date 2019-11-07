import React, { useState } from 'react';

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

const GlobalSettings = ({ settings, updateSettings }) => {
  const [resetHours, setResetHours] = useState(settings.resetHours || 0);
  const [resetMinutes, setResetMinutes] = useState(settings.resetMinutes || 0);
  const onOptionsSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const newResetHours = data.get('resetHours');
    const newResetMinutes = data.get('resetMinutes');
    const newSettings = {
      resetHours: newResetHours,
      resetMinutes: newResetMinutes
    };
    updateSettings(newSettings);
  };

  const onResetHoursChange = (value: string) => {
    console.log('reset hours', value, typeof value);
    const hours = Number(value);
    setResetHours(hours);
  };

  const onResetMinutesChange = (value: string) => {
    console.log('reset min');
    const minutes = Number(value);
    setResetMinutes(minutes);
  };

  return (
    <Box mt={4} p={4} style={{ border: '1px solid lightgray' }}>
      <Heading size="lg">Global settings</Heading>

      <form onSubmit={onOptionsSubmit}>
        <FormControl>
          <FormLabel mt={4}>Time of task</FormLabel>
          <Box display="flex" alignItems="center">
            <NumberInput
              value={resetHours}
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
              value={resetMinutes}
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
