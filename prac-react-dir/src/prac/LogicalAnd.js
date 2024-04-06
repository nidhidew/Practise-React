import React from 'react'

const LogicalAnd = ({ isLoggedIn }) => {
    const script = ` isLoggedIn && <p>Welcome, user!</p> `
    const backgroundColor = {
      color: 'black',
      backgroundColor: 'lightgray',
    }
  return (
    <div style={backgroundColor}>
      { isLoggedIn && <p>Welcome, user!</p> }
      <h1>Logical && Operator</h1>
      <code>{script}</code>
    </div>
  )
}

export default LogicalAnd
