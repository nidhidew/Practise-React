import React, { useEffect } from 'react'

const MountingCycleComponentClass = () => {

    useEffect(() => {
        console.log('Component has mounted');
    },[]);

    const codeSnippetunmount = `
    import React, { Component } from 'react';

    class MyComponent extends Component {
      componentDidMount() {
        // Perform actions after component has mounted
        console.log('Component has mounted');
      }
    
      render() {
        return <div>Hello, World!</div>;
      }
    }
    
    export default MyComponent;
    `;

    const codeSnippetuseEffect = `
    import React, { useEffect } from 'react';

    const MyFunctionalComponent = () => {
      useEffect(() => {
        // Perform actions after component has mounted
        console.log('Component has mounted');
      }, []); // Empty dependency array ensures the effect runs only once after mounting
    
      return <div>Hello, World!</div>;
    };
    
    export default MyFunctionalComponent;
    
    `;
  return (
    <div>
      <h1>Mount</h1>
      <p> the code inside componentDidMount() (in the class component) and useEffect() (in the functional component) will run after the component has been rendered to the DOM for the first time.</p>
      <p>for class component componentDidMount() and for functional component useEffect().</p>
      <br></br>
      <code>{codeSnippetunmount}</code>
      <br></br>
      <code>{codeSnippetuseEffect}</code>
    </div>
  )
}

export default MountingCycleComponentClass
