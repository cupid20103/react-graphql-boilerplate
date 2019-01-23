import React from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';

import Meta from '../Meta';
import { StyledPage, Inner } from './style';

// Add other properties shared across the app
const theme = {
  maxWidth: '1000px',
};

injectGlobal`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: Arial, sans-serif;
  }
`;

export default class Page extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}
