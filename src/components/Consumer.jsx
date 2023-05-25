import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/Theme.context'

export function Consumer() {
  let { myThemes, toggleTheme } = useContext(ThemeContext);
  console.log("Customer context", myThemes);
  const buttonClicked = () => {
    console.log("Clicked");
    myThemes.light.background = "#000";
    toggleTheme();
  };

  return (
    <button onClick={()=>buttonClicked()} 
      style={{ background: myThemes.light.background, 
                color: myThemes.light.foreground }}>
      I am styled by theme context!
    </button>
  );
}