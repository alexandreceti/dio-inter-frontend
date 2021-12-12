import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Router } from './routes';

import  GlocalStyle from './styles/globalStyle';
import  { theme }  from './styles/theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlocalStyle />
        <Router />
    </ThemeProvider>
    
  );
}

export default App;
