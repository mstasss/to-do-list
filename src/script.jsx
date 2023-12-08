import React, { useState } from 'react';

function SimpleForm() {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = () => {
        alert('You entered: ' + inputValue);
        // You can also perform other actions upon submission
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter something"
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default SimpleForm;