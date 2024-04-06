import React, { useCallback, useState } from 'react'

const BindingEventsComponent = () => {

    const [count, setCount] = useState(0);

    //useCallback to memoize  the event handler
    const handleClick = useCallback(() => {
        setCount(count + 1);
    }, [count]); // dependency array ensure the handler is recreated when count changes

    const script = `
    In React, event handlers need to be bound to the component instance to access this within the handler function. In class components, you typically use the class constructor or arrow functions to bind event handlers. In functional components, you can use the useCallback hook to achieve a similar effect. Here's how you can bind events in both functional and class components:

 Class Components:


import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    // Bind event handler in the constructor
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        {/* Use the bound event handler */}
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default MyComponent;


 Functional Components:


import React, { useState, useCallback } from 'react';

const MyFunctionalComponent = () => {
  const [count, setCount] = useState(0);

  // Use useCallback to memoize the event handler
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]); // Dependency array ensures the handler is recreated when count changes

  return (
    <div>
      <p>Count: {count}</p>
      {/* Use the memoized event handler */}
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default MyFunctionalComponent;

In the class component example, we bind the handleClick event handler in the constructor to ensure that this refers to the component instance when the handler is called. In the functional component example, we use useCallback to memoize the event handler and recreate it only when the count state changes, ensuring that the event handler always has the correct reference to count.
    `
    const backgroundColor = {
      color: 'black',
      backgroundColor: 'lightgray',
    }
  return (
    <div style={backgroundColor}>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
      <h2>Binding Events:</h2>
      <p>{script}</p>
    </div>
  )
}

export default BindingEventsComponent
