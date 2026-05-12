import React, { useState } from "react";

function Theme() {
  const [theme, setTheme] = useState(false);

  const lightTheme = {
    width: "95vw",
    height: "95vh",
    color: "#212121",
    backgroundColor: "white",
  };

  const darkTheme = {
    width: "95vw",
    height: "95vh",
    color: "white",
    backgroundColor: "#212121",
  };

  return (
    <div style={theme === true ? darkTheme : lightTheme}>
      <button onClick={() => setTheme(!theme)}>
        {theme === true ? "Switch to Light" : "Switch to Dark"}
      </button>
      <p>Some Text</p>
      <p>Some Random another Text</p>
      <h3>Hello world...</h3>
    </div>
  );
}

export default Theme;
