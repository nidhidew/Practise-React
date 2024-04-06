import React, { useState } from 'react'

const UseStateHook = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count+1);
    };

    const decrement = () => {
        setCount(count-1);
    };

    const script = `import React, { useState } from 'react'

    const UseStateHook = () => {
        const [count, setCount] = useState(0);
    
        const increment = () => {
            setCount(count+1);
        };
    
        const decrement = () => {
            setCount(count-1);
        };
    
      return (
        <div>
          <h1>Counter: {count}</h1>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      )
    }
    
    export default UseStateHook
    `
    const backgroundColor = {
      color: 'black',
      backgroundColor: 'lightgray',
    }
  return (
    <div style={backgroundColor}>
      <h1>UseState Hook</h1>
      <code>{script}</code>
      <h3>Output:-</h3>
      <h5>Counter: {count}</h5>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default UseStateHook
