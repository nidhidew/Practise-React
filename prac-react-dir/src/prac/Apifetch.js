import React, {useEffect, useState} from 'react'

const Apifetch = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) 
                    {throw new Error('Network response was not ok');}
                    return response.json();
            })
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) 
    {
        return <div>Loading...</div>
    } else if(error) {
        return <div>Error: {error.message}</div>
    }

    const script = `import React, {useEffect, useState} from 'react'

    const Apifetch = () => {
        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
    
        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    if (!response.ok) 
                        {throw new Error('Network response was not ok');}
                        return response.json();
                })
                .then(data => {
                    setData(data);
                    setLoading(false);
                })
                .catch(error => {
                    setError(error);
                    setLoading(false);
                });
        }, []);
    
        if (loading) 
        {
            return <div>Loading...</div>
        } else if(error) {
            return <div>Error: {error.message}</div>
        }
      return (
        <div>
          {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
      )
    }
    
    export default Apifetch
    `
  return (
    <div>
       <h1>Api request using fetch</h1> 
       <code>{script}</code>
       <h3>Output:- </h3>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  )
}

export default Apifetch
