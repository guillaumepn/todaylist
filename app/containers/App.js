// @flow
import * as React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

type Props = {
  children: React.Node
};

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    const { children } = this.props;
    return (
      <ThemeProvider>
        <CSSReset />
        {children}
      </ThemeProvider>
    );
  }
}
