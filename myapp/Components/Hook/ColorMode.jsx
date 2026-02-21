import React, { useState } from 'react';

export default function ColorMode() {
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => {
    setIsDark(prev => !prev);
  };

  const themeStyle = {
    backgroundColor: isDark ? "black" : "white",
    color: isDark ? "white" : "black",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    alignItems: "center"
  };

  return (
    <div style={themeStyle}>
      <h1>{isDark ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={handleToggle}>
        Switch to {isDark ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}