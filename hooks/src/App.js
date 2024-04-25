import React from 'react';
import './App.css';
import { Button } from './Components/button';
import { DropMenu } from './Components/dropMenu';
import { UseEffect } from './Components/useEffect';
import UseContextHook from './Components/context/use-context';

function App() {
  return (
    <div className="App">
      {/* <h1>Demo App to understand how Hooks work</h1><hr/> */}
      {/* <h2><u>UseState Hook</u></h2> */}
        {/* <Button /> */}
        {/* <DropMenu /><hr/> */}
      {/* <h2><u>useEffect Hook</u></h2> */}
        {/* <UseEffect /><hr/> */}
      
      <div style={{display:'flex', gap:'10px', justifyContent:'center'}}>
        <UseContextHook />

      <hr/>
      </div>
    </div>
  );
}
export default App;
