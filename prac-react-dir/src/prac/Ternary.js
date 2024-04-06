import React from 'react'

const Ternary = ({ isLoggedIn }) => {

    const script = `isLoggedIn ? ( <p>Welcome</p> ) : ( <p>Please login</p> )`;
    const backgroundColor = {
      color: 'black',
      backgroundColor: 'lightgray',
    }
  return (
    
    <div style={backgroundColor}>
      {
        isLoggedIn ? ( <p>Welcome</p> ) : ( <p>Please login</p> )
    // 'condition ? expressionIfTrue :  expressionIfFalse'
      }
      <h1>Ternary operator</h1>
      <p>for functional and class components condition writing type is same</p>
      <code>{script}</code>
    </div>
  )
}

export default Ternary
