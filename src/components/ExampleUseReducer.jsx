import React, { useReducer } from 'react';
import { VendingReducer, initialState } from '../reducers/Vending.reducer';

export function ExampleUseReducer() {
    const [state, dispatch] = useReducer(VendingReducer, initialState);
    let x = 2; //amount of cents at once.
    let y = 3; //amount of dollars at once.
    return (
        <div>
            <br/>
            Price left: {state.total} cents
            <button onClick={() => dispatch({ type: 'cent', payload: x })}>
                Insert {x} cents</button>
            <button onClick={() => dispatch({ type: 'dollar', payload: y })}>
                Insert {y} dollars
            </button>
        </div>
    );
}