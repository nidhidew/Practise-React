import React from 'react'

const IfElse = ({ isLoggedIn }) => {
    const script = `
    In React, you can use if-else conditions in both functional and class components, but the syntax differs slightly between the two.

    Functional Components:
    
    In functional components, you can use regular JavaScript if-else statements inside the component's return statement or within other functions. Here's an example:
    
    
    import React from 'react';
    
    const MyFunctionalComponent = ({ isLoggedIn }) => {
      return (
        <div>
          {isLoggedIn ? (
            <p>Welcome, User!</p>
          ) : (
            <p>Please log in to continue</p>
          )}
        </div>
      );
    };
    
    export default MyFunctionalComponent;
    
    Class Components:
    
    In class components, you can use if-else statements inside the render() method to conditionally render different parts of the component. Here's an example:
    
    import React, { Component } from 'react';
    
    class MyComponent extends Component {
      render() {
        const { isLoggedIn } = this.props;
        
        if (isLoggedIn) {
          return <p>Welcome, User!</p>;
        } else {
          return <p>Please log in to continue</p>;
        }
      }
    }
    
    export default MyComponent;
    
    In both examples, the component will render different content based on the value of the isLoggedIn prop or state.
    `
  return (
    <div>
      {
        isLoggedIn ? (
            <p>Welcome, User!</p>
        ) : (
            <p>Please log in to continue</p>
        )
      }

      <h1>If Else condition</h1>
      <p>{script}</p>
    </div>
  )
}

export default IfElse
