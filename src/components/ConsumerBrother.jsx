import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/Theme.context'

export function ConsumerBrother() {
    let { myThemes  } = useContext(ThemeContext);
    return (
        <button style={{ background: myThemes.light.background, color: myThemes.light.foreground }}>
        I am styled by theme context!
        </button>
  );
}