import React, { useState, useEffect } from 'react';

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
  const [resetHours, setResetHours] = useState(0);
  const [resetMinutes, setResetMinutes] = useState(0);

  useEffect(
    () => {
      setResetHours(settings.resetHours);
      setResetMinutes(settings.resetMinutes);
    },
    [settings]
  );

  const onOptionsSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const newResetHours = Number(data.get('resetHours'));
    const newResetMinutes = Number(data.get('resetMinutes'));
    const newSettings = {
      resetHours: newResetHours,
      resetMinutes: newResetMinutes
    };
    updateSettings(newSettings);
  };

  const onResetHoursChange = (value: string) => {
    const hours = Number(value);
    setResetHours(hours);
  };

  const onResetMinutesChange = (value: string) => {
    const minutes = Number(value);
    setResetMinutes(minutes);
  };

  return (
    <Box mt={4} p={4} style={{ border: '1px solid lightgray' }}>
      <Heading size="lg">Global settings</Heading>

      <form onSubmit={onOptionsSubmit}>
        <FormControl>
          <FormLabel mt={4}>Tasks reset time</FormLabel>
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
          <FormHelperText>
            Everyday, when the above time comes, all tasks will be unchecked
            <br />
            (default is 00:00 AM)
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
