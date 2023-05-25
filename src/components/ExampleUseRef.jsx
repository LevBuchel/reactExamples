import React, { useState, useRef } from 'react';

// export function ExampleUseRef() {
//     const inputRef = useRef(null)

//     const focusInput = () => {
//       inputRef.current.focus()
//     }
  
//     return (
//       <div>
//         <br/>
//         <input ref={inputRef} />
//         <button onClick={focusInput}>Focus Input</button>
//         <br/><br/>
//       </div>
//     )
// }

// Wrong usage:
// function Component() {
//     const [inputValue, setInputValue] = useState('');
//     const inputRef = useRef(null)
  
//     const addInput = () => {
//       inputRef.current.value = "example";
//     }
  
//     return (
//       <>
//         <input ref={inputRef} value={inputValue} 
//            onChange={e => setInputValue(e.target.value)}/>
//         <button onClick={addInput}>Add Input</button>
//       </>
//     )
//   }


// render count example:
export function ExampleUseRef() {
    const [inputValue, setInputValue] = useState('');
    const [counterState, setCounterState] = useState(0);
    const inputRef = useRef(null)
    const renderCounter = useRef(0)
  
    renderCounter.current += 1;
    // setCounterState(counterState+1)
    console.log(renderCounter.current, counterState);

    return (
        <>
            <br/>
            <input ref={inputRef} value={inputValue} 
                onChange={e => setInputValue(e.target.value) }/>
           <br/><br/>
        </>
    )
  }

