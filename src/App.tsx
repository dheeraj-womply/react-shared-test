import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DARK_GRAY_COLOR } from './lib/themes/default-styles'
import { Logo } from './lib/components/brand'
import { ThemeProvider } from '@material-ui/core/styles';
import muiTheme from './lib/themes/material';

function App() {
  return (
    <div className="App">
    <ThemeProvider theme={muiTheme}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div style={{ display: 'inline-block', backgroundColor: DARK_GRAY_COLOR }}>
          <Logo alt="Womply" />
        </div>
      </header>
     </ThemeProvider>
    </div>
  );
}

export default App;
