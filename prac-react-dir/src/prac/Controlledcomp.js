import React, {useState} from 'react'

const Controlledcomp = () => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const script = `import React, {useState} from 'react'

    const Controlledcomp = () => {
        const [value, setValue] = useState('');
    
        const handleChange = (e) => {
            setValue(e.target.value);
        }
      return (
        <div>
          <input type="text" value={value} onChange={handleChange}/>
        </div>
      )
    }
    
    export default Controlledcomp
    `
    const backgroundColor = {
      color: 'black',
      backgroundColor: 'lightgray',
    }
  return (
    <div style={backgroundColor}>
      <input type="text" value={value} onChange={handleChange}/>
      <h1>Controlled component</h1>
      <code>{script}</code>
    </div>
  )
}

export default Controlledcomp
