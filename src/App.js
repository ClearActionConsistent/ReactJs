import React from 'react';
import './App.scss';
import Routers from './Routes';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  )
};

export default App;