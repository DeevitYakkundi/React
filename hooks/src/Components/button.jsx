import React, {useState} from 'react';

const currentState = false;

export function Button(){
  const [currentText, setText] = useState(currentState);
  console.log(currentText);

  function clickHandle(){
    setText(!currentText);
  }
    return(
    <div>
          {currentText? <p>Hello World</p>: null}
          <button onClick={clickHandle}>Toggle Text</button>
        </div>
    );
}