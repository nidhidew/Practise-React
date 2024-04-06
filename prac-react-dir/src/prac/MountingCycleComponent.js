import React, { useEffect } from 'react'

const MountingCycleComponent = () => {

    useEffect(() => {
        console.log('Component mounted');

        return () => {
            console.log('Component unmounted');
        }
    }, []);

    const codeSnippet = `import React, { useEffect } from 'react'

    const CycleComponent = () => {
    
        useEffect(() => {
            console.log('Component mounted');
    
            return () => {
                console.log('Component unmounted');
            }
        }, []);
      return (
        <div>
          <h1>Cycle Component</h1>
          <p>using functional component and useEffect.</p>
          <code>
            
          </code>
        </div>
      )
    }
    
    export default CycleComponent`;
    const backgroundColor = {
      color: 'black',
      backgroundColor: 'lightgray',
    }
  return (
    <div style={backgroundColor}>
      <h1>Mounting</h1>
      <p>using functional component and useEffect.</p>
      <p>render method used in class component for returning the ui of page and constructor.</p>
      <p>for functional component use useState and useEffect hooks to manage state and side effects.</p>
      <code>
        {codeSnippet}
      </code>
    </div>
  )
}

export default MountingCycleComponent
