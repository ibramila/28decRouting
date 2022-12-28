import React, { useEffect } from 'react'
import { useState } from 'react';
import { axiosInstance } from "../../api/axiosInstance";
import BasicModal from "../../components/Admin/BasicModal";
import ProductTable from "../../components/Admin/ProductTable";

function Products() {

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
      <BasicModal getData={getData} />
      <ProductTable
        data={data}
        loading={loading}
        error={error}
        getData={getData}
      />
    </>
  )
}

export default Products