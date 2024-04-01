import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AsyncdatafetchAxios = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const  [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if(loading) {
    return <div>Loading ...</div>
  } else if(error){
    return <div>Error:  {error.message}</div>;
  }

  const script = `
  import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AsyncdatafetchAxios = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const  [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if(loading) {
    return <div>Loading ...</div>
  } else if(error){
    return <div>Error:  {error.message}</div>;
  }

  return (
    <div>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  )
}

export default AsyncdatafetchAxios
  `

  return (
    <div>
      <h1>Asynchronous API request (axios)</h1>
      <code>{script}</code>
      <h3>Output:- </h3>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  )
}

export default AsyncdatafetchAxios
