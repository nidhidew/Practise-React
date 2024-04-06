import React from 'react'

const TestProps = (props) => {
  const script = `
  import React from 'react'

const TestProps = (props) => {
  return (
    <div>
      <h1>Hello, {props.name}</h1>
    </div>
  )
}

export default TestProps

  `
  const backgroundColor = {
    color: 'black',
    backgroundColor: 'lightgray',
  }
  return (
    <div style={backgroundColor}>
      <h1>Hello, {props.name}</h1>
      <p>following code is used to display the props of this component</p>
      <code>{script}</code>
    </div>
  )
}

export default TestProps
