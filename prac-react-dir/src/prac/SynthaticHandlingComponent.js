import React, { useState } from 'react'

const SynthaticHandlingComponent = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Input value: {inputValue}</p>
    </div>
  )
}

export default SynthaticHandlingComponent
