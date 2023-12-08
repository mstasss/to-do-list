import React, { useState } from 'react';

function InputDisplay() {
  const [inputText, setInputText] = useState('');
  const [savedText, setSavedText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSave = () => {
    setSavedText(inputText);
    setInputText('');
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text here"
      />
      <button onClick={handleSave}>Save</button>
      <div>
        <p>Saved Text: {savedText}</p>
      </div>
    </div>
  );
}

export default InputDisplay;
