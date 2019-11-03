import React from 'react';
import { Switch, Route } from 'react-router';
import { Box } from "@chakra-ui/core";

import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';

export default () => (
  <App>
    <Box p={4}>
    <Switch>
      <Route path={routes.HOME} component={HomePage} />
    </Switch>
    </Box>
  </App>
);
