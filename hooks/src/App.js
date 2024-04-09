import React from 'react';
import './App.css';
import { Button } from './Components/button';
import { DropMenu } from './Components/dropMenu';
import { UseEffect } from './Components/useEffect';

function App() {
  return (
    <div className="App">
      <h1>UseState Hook</h1>
        <Button />
        <DropMenu />
      <h1>useEffect Hook</h1>
        <UseEffect />
    </div>
  );
}

export default App;
