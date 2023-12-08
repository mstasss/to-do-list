import React, { useState } from 'react';
import './App.css';
// import InputDisplay from './InputDisplay'; // Uncomment if you use InputDisplay

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <textarea
        id="largeTextInput"
        rows="4"
        cols="50"
        placeholder="Enter your text here"
        value={inputValue}
        onChange={handleInputChange}
      ></textarea>

      <p>Your Note: {inputValue}</p>
      {/* <InputDisplay /> Uncomment if you want to use the InputDisplay component */}
    </div>
  );
}

export default App;
