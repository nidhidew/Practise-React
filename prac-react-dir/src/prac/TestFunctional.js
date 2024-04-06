import React from 'react'

const TestFunctional = () => {
  const script = `
  import React from 'react'

const TestFunctional = () => {
  return (
    <div>
      
    </div>
  )
}

export default TestFunctional

  `
  const backgroundColor = {
    color: 'black',
    backgroundColor: 'lightgray',
  }
  return (
    <div style={backgroundColor}>
      <h1>Functional Components</h1>
      <p>using arrow function creating a component</p>
      <code>
        {script}
      </code>
    </div>
  )
}

export default TestFunctional
