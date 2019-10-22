import React from 'react';
import { GlobalStyle } from './AppStyles';
import { Login } from './view/Login';
import { Register } from './view/Register';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Register />
    </div>
  );
}

export default App;
