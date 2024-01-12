// Importing necessary React functionality
import React, { useState } from 'react'; // Import React and useState hook
import './App.css'; // Import CSS styles for this component
// import InputDisplay from './InputDisplay'; // This line is currently commented out. If you have a separate InputDisplay component, you can uncomment this line to use it.

// Defining the functional component 'App'
function App() {
  // Initializing state using the useState hook.
  // 'inputValue' holds the current state, 'setInputValue' is a function to update this state.
  const [inputValue, setInputValue] = useState(''); // State is initially set to an empty string

  // This function is called every time the input in the textarea changes.
  // 'event' is an object that holds information about the change event.
  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Updates 'inputValue' with text from textarea
  };

  // The JSX that the component returns.
  return (
    <div>
      {/* Textarea element for user input */}
      <textarea
        id="largeTextInput" // An identifier for the textarea
        rows="4"          // Number of rows (height of the textarea)
        cols="50"         // Number of columns (width of the textarea)
        placeholder="Enter your text here" // Placeholder text when textarea is empty
        value={inputValue} // The value in the textarea is bound to our 'inputValue' state
        onChange={handleInputChange} // Assigning the event handler to the 'onChange' event
      ></textarea>

      {/* Displaying the current state */}
      <p>Your Note: {inputValue}</p> {/* Paragraph element that displays the current value of 'inputValue' */}

      {/* Optional: Uncomment below to use the InputDisplay component */}
      {/* <InputDisplay /> */}
    </div>
  );
}

export default App; // Exporting the App component for use in other files
