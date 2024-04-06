import React from 'react'

const ClassFunctional = () => {
  const script = `
  import React from 'react'

const ClassFunctional = () => {
  return (
    <div>
      
    </div>
  )
}

export default ClassFunctional

  `
  const backgroundColor = {
    color: 'black',
    backgroundColor: 'lightgray',
  }
  return (
    <div style={backgroundColor}>
      <h1>Class Component</h1>
      <code>{script}</code>
    </div>
  )
}

export default ClassFunctional
