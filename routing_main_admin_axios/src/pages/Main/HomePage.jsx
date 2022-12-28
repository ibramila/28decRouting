import React from 'react'
import Cards from '../../components/Main/Cards'
import { useState, useEffect } from 'react';
import { axiosInstance } from "../../api/axiosInstance";

function HomePage() {
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

  return (
    <>
      <Cards
        data={data}
        loading={loading}
        error={error}
        getData={getData}
      />
    </>
  )
}

export default HomePage