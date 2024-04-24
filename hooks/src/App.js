import React from 'react';
import './App.css';
import { Button } from './Components/button';
import { DropMenu } from './Components/dropMenu';
import { UseEffect } from './Components/useEffect';
import { UseContext } from './Components/UseContext'
import { UseContext2 } from './Components/UseContext2';

function App() {
  return (
    <div className="App">
      {/* <h1>Demo App to understand how Hooks work</h1><hr/> */}
      {/* <h2><u>UseState Hook</u></h2> */}
        {/* <Button /> */}
        {/* <DropMenu /><hr/> */}
      {/* <h2><u>useEffect Hook</u></h2> */}
        {/* <UseEffect /><hr/> */}
      <h2><u>useContext Hook</u></h2>
      <div style={{display:'flex', gap:'10px', justifyContent:'center'}}>
        <UseContext/>
        <UseContext2/>
      <hr/>
      </div>
    </div>
  );
}

export default App;
