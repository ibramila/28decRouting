import React, { useEffect } from 'react'
import { useState } from 'react';
import { axiosInstance } from "../../api/axiosInstance";
import BasicModal from "../../components/Admin/BasicModal";
import ProductTable from "../../components/Admin/ProductTable";
import axios from 'axios';
function Products() {

  //!=======  AXIOS DATA =======
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const getData = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get("products");
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  // !const getData = async () => {
  //   const { data } = await axios.get(`https://northwind.vercel.app/api/products`);
  //   setData(data);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    // <div>{JSON.stringify(data)}</div>
    <>
      <BasicModal getData={getData} />
      <ProductTable
        data={data}
        loading={loading}
        error={error}
        getData={getData}
      />
      {/* //! {data.map((user)=>{
      return <li key={user.id}>name: {user.name}</li>
    })} */}
    </>
  )
}

export default Products