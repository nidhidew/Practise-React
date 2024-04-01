import React, {useState} from 'react'

const Formvalidation = () => {
    const [formData,setFormData] = useState({
        username: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: ''
        });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newErrors = {};
        if(!formData.username.trim()) {
            newErrors.username = 'username is required';
        }

        if(!formData.password.trim()) {
           newErrors.username = 'password is required';
        }

        if(Object.keys(newErrors).length > 0){
            setErrors(newErrors);
            return;
        }
        console.log(formData);
    }

    const script=`import React, { useState } from 'react';

    const MyFunctionalComponent = () => {
      const [formData, setFormData] = useState({
        username: '',
        password: ''
      });
    
      const [errors, setErrors] = useState({});
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
        setErrors({
          ...errors,
          [name]: ''
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!formData.username.trim()) {
          newErrors.username = 'Username is required';
        }
        if (!formData.password.trim()) {
          newErrors.password = 'Password is required';
        }
        if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors);
          return;
        }
        // Form is valid, submit the form
        console.log(formData);
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
          />
          {errors.username && <p>{errors.username}</p>}
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
          {errors.password && <p>{errors.password}</p>}
          <button type="submit">Submit</button>
        </form>
      );
    };
    
    export default MyFunctionalComponent;
    
    `

    const classscript = `import React, { Component } from 'react';

    class MyComponent extends Component {
      constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: '',
          errors: {}
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
        const { username, password } = this.state;
        const errors = {};
        if (!username.trim()) {
          errors.username = 'Username is required';
        }
        if (!password.trim()) {
          errors.password = 'Password is required';
        }
        if (Object.keys(errors).length > 0) {
          this.setState({ errors });
          return;
        }
        // Form is valid, submit the form
        console.log(this.state);
      };
    
      render() {
        const { username, password, errors } = this.state;
        
        return (
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
              placeholder="Username"
            />
            {errors.username && <p>{errors.username}</p>}
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              placeholder="Password"
            />
            {errors.password && <p>{errors.password}</p>}
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
        <input type="text"
         name="username"
          value={formData.username}
           onChange={handleChange} 
           placeholder='username' />
        {errors.username && <p>{errors.username}</p>}
        <input type="password"
         name="password"
          value={formData.password} 
          onChange={handleChange}
           placeholder='password' />
        {errors.password && <p>{errors.password}</p>}
        <button type="submit" onSubmit={handleSubmit}>Submit</button>
      </form>

      <h1>Form validation</h1>
      <h3>Functional Component</h3>
        <code>{script}</code>
      <h3>Class component</h3>
        <code>{classscript}</code>  
    </div>
  )
}

export default Formvalidation
