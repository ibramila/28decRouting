import React, { useState, useEffect } from 'react'
import ProductDetail from '../../components/Main/ProductDetail';
import { axiosInstance } from "../../api/axiosInstance";
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const { id } = useParams();

  const getData = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(`products/${id}`);
      setProduct(response.data);
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

    <ProductDetail
      product={product}
      loading={loading}
      error={error}
      getData={getData}
    />
  )
}

export default ProductDetails