import React, { useState } from 'react'

const SynthaticHandlingComponent = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }
    const backgroundColor = {
      color: 'black',
      backgroundColor: 'lightgray',
    }
  return (
    <div style={backgroundColor}>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Input value: {inputValue}</p>
    </div>
  )
}

export default SynthaticHandlingComponent
