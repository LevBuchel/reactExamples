import React, {useState} from 'react';
import { ThemeContext, themes } from '../contexts/Theme.context'
import { Consumer } from './Consumer';
import { ConsumerBrother } from './ConsumerBrother';

export function ExampleUseContext() {
    const [toggle, setToggle] = useState(true);
    const toggleTheme = () => setToggle(!toggle);
    console.log("context main", themes);
    const value = 
        { myThemes: themes, toggleTheme}
    ;
    return (
        <ThemeContext.Provider value={value}>
            <br/>
            <Consumer />
            <ConsumerBrother />
        </ThemeContext.Provider>
    );
}