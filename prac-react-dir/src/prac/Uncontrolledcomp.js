import React, {useRef} from 'react'

const Uncontrolledcomp = () => {
    const inputRef = useRef(null);
    const handleSubmit = () => {
        console.log(inputRef.current.value);
    };

    const script = `import React, {useRef} from 'react'

    const Uncontrolledcomp = () => {
        const inputRef = useRef(null);
        const handleSubmit = () => {
            console.log(inputRef.current.value);
        };
    
      return (
        <>
            <input type="text" ref={inputRef}/>
            <button onClick={handleSubmit}>Submit</button>
        </>
      )
    }
    
    export default Uncontrolledcomp
    `
    const backgroundColor = {
      color: 'black',
      backgroundColor: 'lightgray',
    }
  return (
    <>
    <div style={backgroundColor}>
        <input type="text" ref={inputRef}/>
        <button onClick={handleSubmit}>Submit</button>
        <h1>Uncontrolled Component</h1>
        <code>{script}</code>
      </div>  
    </>
  )
}

export default Uncontrolledcomp
