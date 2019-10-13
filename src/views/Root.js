import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import Button from 'components/Button/Button';
import { theme } from 'theme/mainTheme';

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <h1>Field Service Report</h1>
        <Button>Hello</Button>
      </>
    </ThemeProvider>
  </div>
);

export default Root;
