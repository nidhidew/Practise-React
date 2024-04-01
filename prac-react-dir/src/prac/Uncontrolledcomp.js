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

  return (
    <>
        <input type="text" ref={inputRef}/>
        <button onClick={handleSubmit}>Submit</button>
        <h1>Uncontrolled Component</h1>
        <code>{script}</code>
    </>
  )
}

export default Uncontrolledcomp
