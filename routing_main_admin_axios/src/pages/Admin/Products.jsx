import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
function Products() {

  //!=======  AXIOS DATA =======
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get(`https://northwind.vercel.app/api/products`);
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    // <div>{JSON.stringify(data)}</div>
    <>
    {data.map((user)=>{
      return <li key={user.id}>name: {user.name}</li>
    })}
    </>
  )
}

export default Products