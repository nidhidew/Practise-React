import React, { useState, useCallback } from 'react'

const UseCallbackHook = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count+1);
    }

    const increment2 = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    const script = `import React, { useState, useCallback } from 'react'

    const UseCallbackHook = () => {
        const [count, setCount] = useState(0);
    
        const increment = () => {
            setCount(count+1);
        }
    
        const increment2 = useCallback(() => {
            setCount((prevCount) => prevCount + 1);
        }, []);
    
      return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment 1</button>
            <button onClick={increment2}>Increment 2(optimized with useCallback)</button>
        </div>
      )
    }
    
    export default UseCallbackHook
    `
  return (
    <div>
        <h1>UseCallBack Hook</h1>
        <p>The useCallback Hook in React allows you to memoize a function within a component. Memoization, in this context, refers to caching the function's definition so that it's not recreated unnecessarily on every render. This can improve the performance of your React application by preventing unnecessary re-renders of child components that rely on the memoized function.</p>
        <code>{script}</code>
        <h3>Ouput:-</h3>
        <h5>Count: {count}</h5>
        <button onClick={increment}>Increment 1</button>
        <button onClick={increment2}>Increment 2(optimized with useCallback)</button>
    </div>
  )
}

export default UseCallbackHook
