import React from 'react';
import Loading from './Loading';

const styl = {
    black: "white",
    backgroundColor: "lightgrey",
    listStyle: "none",
    display: 'flex',
    flexDirection: 'column',
    borderRadius: "10px",
    padding: "10px",
    fontWeight: 900,

}
function ProductDetail({ product, loading, error, getData }) {
    return (
        <>
            {loading && <Loading />}
            {error && "Error"}
            <h1>Product Number: {product.id}</h1>
            <ul style={styl} >

                <li style={{ listStyle: "none" }}>Name: {product.name}</li>
                <li style={{ listStyle: "none" }}></li>
            </ul>
        </>

    )
}

export default ProductDetail