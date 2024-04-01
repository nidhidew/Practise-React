import React, { useRef } from 'react'

const UseRefHook = () => {

    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

    const script = `import React, { useRef } from 'react'

    const UseRefHook = () => {
    
        const inputRef = useRef(null);
    
        const focusInput = () => {
            inputRef.current.focus();
        };
    
      return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={focusInput}>Focus Input</button>
        </div>
      )
    }
    
    export default UseRefHook
    `

  return (
    <div>
      <h1>UseRef hook</h1>
      <p>The useRef Hook in React allows you to create a mutable reference object that persists throughout the component's lifecycle. Unlike state variables managed with useState, the value stored in a useRef object doesn't trigger a re-render when updated.</p>
      <code>{script}</code>
      <h3>Output</h3>
        <input ref={inputRef} type="text" />
        <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default UseRefHook
