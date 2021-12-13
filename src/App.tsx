import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Router } from './routes';

import  GlocalStyle from './styles/globalStyle';
import  { theme }  from './styles/theme';

import {AuthProvader} from './context/AuthContex'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvader>
        <GlocalStyle />
        <Router />
      </AuthProvader>
    </ThemeProvider>
    
  );
}

export default App;
