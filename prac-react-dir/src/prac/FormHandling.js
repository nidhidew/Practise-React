import React, { useState } from 'react'

const FormHandling = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name] : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    const funcscript = `
    import React, { useState } from 'react';

    const MyFunctionalComponent = () => {
      const [formData, setFormData] = useState({
        username: '',
        password: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      );
    };
    
    export default MyFunctionalComponent;
    
    `

    const classScript = `  
    import React, { Component } from 'react';

    class MyComponent extends Component {
      constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: ''
        };
      }
    
      handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
          [name]: value
        });
      };
    
      handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
      };
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
            <button type="submit">Submit</button>
          </form>
        );
      }
    }
    
    export default MyComponent;
    
    `


  return (
    <div>
        <form>
            <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="username"/>
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="password"/>
            <button type="submit" onChange={handleSubmit}>Submit</button>
            <h1>for Functional component:-</h1>
            <code>{funcscript}</code>
            <h1>for Class component</h1>
            <code>{classScript}</code>
        </form>
    </div>
  )
}

export default FormHandling
