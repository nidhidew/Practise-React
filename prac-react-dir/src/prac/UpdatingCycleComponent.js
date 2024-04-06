import React, { useEffect, useState } from 'react';

const UpdatingCycleComponent = ({value}) => {

    const [prevValue, setPrevValue] = useState(null);

    useEffect(() => {
        if(value !== prevValue) {
            console.log('Component has updated');
        }
        setPrevValue(value);
    }, [value, prevValue]);

    const funcScript = `
    import React, { useEffect, useState } from 'react';

const MyFunctionalComponent = ({ someValue }) => {
  const [prevSomeValue, setPrevSomeValue] = useState(null);

  useEffect(() => {
    if (someValue !== prevSomeValue) {
      console.log('Component has updated');
      setPrevSomeValue(someValue);
    }
  }, [someValue, prevSomeValue]); 

  return <div>Hello, World!</div>;
};

export default MyFunctionalComponent;
    `

    const classScript = `
    import React, { Component } from 'react';

    class MyComponent extends Component {
      componentDidUpdate(prevProps, prevState) {
        if (this.props.someValue !== prevProps.someValue) {
          console.log('Component has updated');
        }
      }
    
      render() {
        return <div>Hello, World!</div>;
      }
    }
    
    export default MyComponent;
    
    `
    const backgroundColor = {
      color: 'black',
      backgroundColor: 'lightgray',
    }
  return (
    <div style={backgroundColor}>
      <h1>Update</h1>
      <p>for functional component we use useEffect().</p>
      <code>
        {funcScript}
      </code>
      <p>for class component we use componentDidUpdate().</p>
      <code>
        {classScript}
      </code>
    </div>
  )
}

export default UpdatingCycleComponent
