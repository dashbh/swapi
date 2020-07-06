import React, { useState } from 'react';
import './App.css';
import People from './containers/People';
import Header from './components/header';

export const HeaderThemeContext = React.createContext('theme');

function App() {
  const [header, toggleHeader] = useState(true);
  const [isLight, toggleTheme] = useState(0);
  return (
    <div className="main">
      <HeaderThemeContext.Provider value={isLight}>
        {header && (<Header display="1"></Header>)}
      </HeaderThemeContext.Provider>
      <div className="toolbar">
        <button onClick={() => toggleHeader(!header)}>Toggle Header</button>
        <button onClick={() => toggleTheme(!isLight)}>Toggle Theme</button>
      </div>
      <People />
    </div>
  );
}

export default App;
