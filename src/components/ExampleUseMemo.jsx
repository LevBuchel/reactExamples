import React, { useState, useMemo, useEffect } from 'react';

export function ExampleUseMemo() {
    const [counter, increaseCounter] = useState(0);
    const [dancing, updateDance] = useState(false);
    let nextValue;
    nextValue = useMemo(() => {
      return calculateNextValue(counter);
    }, [counter]);
    // useEffect(()=> {
    //   nextValue = calculateNextValue(counter);
    // }, [counter]);
  
    return (
      <div>
        <br/>
        {counter} (Check the console)
        <br/><br/>
        <button onClick={()=>{increaseCounter(counter+1)}}>Counter Increase</button>
        <button onClick={()=>{updateDance(true)}}>Press to dance</button>
      </div>
    );
}

const calculateNextValue = (counter) => {
    //forcefully slow to imitate a slow function
    let i = 10;
    while(i > 0) {
      console.log("wow");
      i--;
    };
    return counter++;
  }