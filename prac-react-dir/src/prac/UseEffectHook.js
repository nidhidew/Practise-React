import React, { useState, useEffect } from 'react'

const UseEffectHook = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Component did mount');

        return () => {
            console.log('Component will unmount');
        }
    }, []);

    useEffect(() => {
        console.log('Count value changed:', count);
    }, [count]);

    const increment = () => {
        setCount(count+1);
    };

    const script = `import React, { useState, useEffect } from 'react'

    const UseEffectHook = () => {
        const [count, setCount] = useState(0);
    
        useEffect(() => {
            console.log('Component did mount');
    
            return () => {
                console.log('Component will unmount');
            }
        }, []);
    
        useEffect(() => {
            console.log('Count value changed:', count);
        }, [count]);
    
        const increment = () => {
            setCount(count+1);
        };
    
      return (
        <div>
          <h1>Count: {count}</h1>
          <button onClick={increment}>Increment</button>
        </div>
      )
    }
    
    export default UseEffectHook
    `
    const backgroundColor = {
      color: 'black',
      backgroundColor: 'lightgray',
    }
  return (
    <div style={backgroundColor}>
        <h1>UseEffect Hook</h1>
        <code>{script}</code>
        <h3>Output:- </h3>
      <h5>Count: {count}</h5>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default UseEffectHook
