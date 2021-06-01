import './App.css';
import React from 'react';
import AppPage from './shared/components/AppPage'
import {ThemeProvider} from './shared/context/ThemeContext';

const App = () => {

  return (
    <ThemeProvider>
      <AppPage />
    </ThemeProvider>
  );
}

export default App;
