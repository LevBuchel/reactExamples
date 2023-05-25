import React, { useState, useEffect, useCallback } from 'react';

export function ExampleUseCallback() {
    const [counter, setCounter] = useState(0);
    const myAge = 10;
  
    const age = useCallback(() => {
      return counter;
    }, [counter])
  
    return (
      <div>
        <br/>
        <button onClick={()=>{setCounter(counter+1)}}>Increase</button>
        <br/><br/>
        <Child age={age} />
      </div>
  
    );
}

const Child = ({ age }) => {
    useEffect(() => {
      console.log("New Age Data");
    }, [age]);
    return <div>Child's age is: {age()}</div>
  }