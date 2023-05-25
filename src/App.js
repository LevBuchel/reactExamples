import React from 'react';
import { ExampleUseState } from './components/ExampleUseState';
import { ExampleUseEffect } from './components/ExampleUseEffect';
import { ExampleUseContext } from './components/ExampleUseContext';
import { ExampleUseReducer } from './components/ExampleUseReducer';
import { ExampleUseMemo } from './components/ExampleUseMemo';
import { ExampleUseCallback } from './components/ExampleUseCallback';
import { ExampleUseRef } from './components/ExampleUseRef';

export default function App(props) {
  return (
    <div className='App'>
      <h1>useState:</h1>
      <ExampleUseState/> 
      <br/>
      <hr/>
      <h1>useEffect:</h1>
      <ExampleUseEffect/>
      <br/>
      <hr/>
      <h1>useContext:</h1>
      <ExampleUseContext/>
      <br/><br/>
      <hr/>
      <h1>useReducer:</h1>
      <ExampleUseReducer/>
      <br/>
      <hr/>
      <h1>useMemo:</h1>
      <ExampleUseMemo/>
      <br/>
      <hr/>
      <h1>useCallback:</h1>
      <ExampleUseCallback/>
      <br/>
      <hr/>
      <h1>useRef:</h1>
      <ExampleUseRef/>
    </div>
  );
}