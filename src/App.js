import React from 'react';
import logo from './logo.svg';
import './App.css';
import CheckboxWithLabel from "./examples/CheckboxWithLabel";
import Clock from "./examples/snapshot/Clock";
import Link from "./examples/snapshot/Link";

function App() {
  return (
    <div className="App">
      <CheckboxWithLabel
        labelOn='On'
        labelOff='Off'
      >
      </CheckboxWithLabel>

        <Clock></Clock>
        <Link page="http://www.google.com">Link</Link>
    </div>

  );
}

export default App;
