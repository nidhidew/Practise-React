import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1}
        case 'decrement':
            return {count: state.count - 1};    
        default:
            return state;    
    }
};

const UseReducer = () => {

    const [state, dispatch] = useReducer(reducer, {count: 0});

    const increment = () => {
        dispatch({ type: 'increment' })
    }

    const decrement = () => {
        dispatch({ type: 'decrement' })
    }

    const script = `import React, { useReducer } from 'react'

    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return {count: state.count + 1}
            case 'decrement':
                return {count: state.count - 1};    
            default:
                return state;    
        }
    };
    
    const UseReducer = () => {
    
        const [state, dispatch] = useReducer(reducer, {count: 0});
    
        const increment = () => {
            dispatch({ type: 'increment' })
        }
    
        const decrement = () => {
            dispatch({ type: 'decrement' })
        }
    
      return (
        <div>
            <h1>Count: {state.count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
      )
    }
    
    export default UseReducer
    `

  return (
    <div>
        <h1>UseReducer Hook</h1>
        <code>{script}</code>
        <h3>Output:- </h3>
        <h5>Count: {state.count}</h5>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default UseReducer
