import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
  const [visible, setVisible] = useState(false);

  const stylePara = visible ? 'show' : 'hide';
  
  
  return (
    <div className="App" id="main">
      {/* // Do not alter the main div */}
      <button id="click" onClick={() => setVisible(!visible)}>Show</button>
      <p id="para" className={stylePara}>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
    </div>
  );
}

export default App
