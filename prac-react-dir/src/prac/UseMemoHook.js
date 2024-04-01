import React, { useState, useMemo } from 'react'

const UseMemoHook = () => {

    const [count, setCount] = useState(0);

    const expensiveValue1 = () => {
        console.log('Calculating expensive value 1');
        return count * 2;
    }

    const expensiveValue2 = useMemo(() => {
        console.log( "Calculating expensive value 2" );
        return count * 4;
    }, [count]);

    const script = `import React, { useState, useMemo } from 'react'

    const UseMemoHook = () => {
    
        const [count, setCount] = useState(0);
    
        const expensiveValue1 = () => {
            console.log('Calculating expensive value 1');
            return count * 2;
        }
    
        const expensiveValue2 = useMemo(() => {
            console.log( "Calculating expensive value 2" );
            return count * 4;
        }, [count]);
    
      return (
        <div>
          <h1>Count: {count}</h1>
          <button onClick={() => setCount(count+1)}>Increment</button>
          <p>Expensive Value 1: {expensiveValue1()}</p>
          <p>expensive Value 2 (optimized with useMemo): {expensiveValue2}</p>      
        </div>
      )
    }
    
    export default UseMemoHook
    `

  return (
    <div>
      <h1>UseMemo hook</h1>
      <p>The useMemo hook in React allows you to memoize a value derived from other values within a component. Memoization, in this context, refers to caching the result of an expensive calculation or complex expression so that it's not recomputed unnecessarily on every render. This can significantly improve the performance of your React application, especially when dealing with expensive computations.</p>
      <code>{script}</code>
      <h3>Output:-</h3>
      <h5>Count: {count}</h5>
      <button onClick={() => setCount(count+1)}>Increment</button>
      <p>Expensive Value 1: {expensiveValue1()}</p>
      <p>expensive Value 2 (optimized with useMemo): {expensiveValue2}</p>      
    </div>
  )
}

export default UseMemoHook
