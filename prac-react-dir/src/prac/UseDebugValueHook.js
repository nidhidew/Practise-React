import React, { useState, useDebugValue } from 'react'

const UseDebugValueHook = () => {

    const  [count , setCount] = useState(0);

    useDebugValue(count, (value) => `Current count: ${value}`);
    const script = `import React, { useState, useDebugValue } from 'react'

    const UseDebugValueHook = () => {
    
        const  [count , setCount] = useState(0);
    
        useDebugValue(count, (value) => 'Current count: value');
      return ({count});
    }
    
    export default UseDebugValueHook
    `
  return (
    <div> 
      <h1>UseDebugValue hook</h1>
      <p>The useDebugValue hook is designed to be used within custom hooks, not directly in functional components. It allows you to add a custom label to your custom hook in React DevTools for better debugging.</p>
      <code>{script}</code>
      <h3>Output:-</h3>
      {count}
    </div>
    
    );
}

export default UseDebugValueHook
