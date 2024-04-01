import React, { useState } from 'react'

const EventHandlingComponent = () => {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    const funcscript = `
    import React, { useState } from 'react';

const MyFunctionalComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default MyFunctionalComponent;
    `

    const classscript = `
    import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default MyComponent;

    `
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>

      <h2>Functional Component:-</h2>
      <code>{funcscript}</code>
      <br></br><br></br><br></br>

      <h2>Class Component:-</h2>
      <code>{classscript}</code>
    </div>
  )
}

export default EventHandlingComponent
