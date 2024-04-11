import React from 'react';
import './App.css';
import { Button } from './Components/button';
import { DropMenu } from './Components/dropMenu';
import { UseEffect } from './Components/useEffect';

function App() {
  return (
    <div className="App">
      <h1>Demo App to understand how Hooks work</h1><hr/>
      <h2><u>UseState Hook</u></h2>
        {/* <Button /> */}
        {/* <DropMenu /> */}<hr/>
      <h2><u>useEffect Hook</u></h2>
        <UseEffect />
    </div>
  );
}

export default App;
