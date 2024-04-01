import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Apiaxios = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            setData(response.data);
            setLoading(false);
            console.log(response);
        })
        .catch(error => {
            setError(error);
            setLoading(false);
        });
    }, []);

    if (loading)
        return <div>Loading...</div>;

    if (error)
        return <div>Error: {error.message}</div>
    const script = `import React, { useEffect, useState } from 'react';
    import axios from 'axios'
    
    const Apiaxios = () => {
    
        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(null);
        const [error, setError] = useState(null);
    
        useEffect(() => {
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setData(response.data);
                setLoading(false);
                console.log(response);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
        }, []);
    
        if (loading)
            return <div>Loading...</div>;
    
        if (error)
            return <div>Error: {error.message}</div>
    
      return (
        <div>
          {data && <pre>{JSON.stringify(data,null,2)}</pre>}
        </div>
      )
    }
    
    export default Apiaxios
    `
  return (
    <div>
      <h1>Api request using axios</h1>
      <p>install axios using `npm install axios` command in terminal</p>
      <code>{script}</code>
      <h3>Output:- </h3>
      {data && <pre>{JSON.stringify(data,null,2)}</pre>}
    </div>
  )
}

export default Apiaxios
