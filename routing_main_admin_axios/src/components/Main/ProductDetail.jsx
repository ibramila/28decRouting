import React from 'react';
import Loading from './Loading';

const styl = {
    black: "white",
    backgroundColor: "lightgrey",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "center",
    // alignItems: "center",
    width: "50%",
    borderRadius: "10px",
    padding: "10px",
    fontWeight: 700,

}
function ProductDetail({ product, loading, error, getData }) {
    return (
        <>
        <span> <span style={{color: 'red', fontWeight:900}}>TEACHER</span> if you can not see some data in this list, it means, this data is not given.</span>
            <h1>Product Number: {product.id}</h1>
            {loading && <Loading />}
            {error && "Error"}
            <ul style={styl} >
                <li style={{ listStyle: "none" }}>Name: {product.name}</li>
                <li style={{ listStyle: "none" }}>Category Id: {product?.categoryId}</li>
                <li style={{ listStyle: "none" }}>Quantity per Product:  {product?.quantityPerUnit}</li>
                <li style={{ listStyle: "none" }}>Product in Stock:  {product?.unitsInStock}</li>
                <li style={{ listStyle: "none" }}>Product in Order:  {product?.unitsOnOrder}</li>
                <li style={{ listStyle: "none" }}>Product in ReOrder Level:  {product?.reorderLevel}</li>
                <li style={{ listStyle: "none", color: "Highlight" }}>Supplier:
                    <ul style={{ color: "black" }}>
                        <li style={{ listStyle: "none" }}>Company Name:  {product?.supplier?.companyName}</li>
                        <li style={{ listStyle: "none" }}>Contact Name:  {product?.supplier?.contactName}</li>
                        <li style={{ listStyle: "none" }}>Contact Title:  {product?.supplier?.contactTitle}</li>
                        <li style={{ listStyle: "none", color: "Highlight" }}>Address:
                            <ul style={{ color: "black" }}>
                                <li style={{ listStyle: "none" }}>Address:  {product?.supplier?.address?.street}</li>
                                <li style={{ listStyle: "none" }}>City:  {product?.supplier?.address?.city}</li>
                                <li style={{ listStyle: "none" }}>Region:  {product?.supplier?.address?.region}</li>
                                <li style={{ listStyle: "none" }}>Postal Code:  {product?.supplier?.address?.postalCode}</li>
                                <li style={{ listStyle: "none" }}>Country:  {product?.supplier?.address?.country}</li>
                                <li style={{ listStyle: "none" }}>Phone Number:  {product?.supplier?.address?.phone}</li>


                            </ul>
                        </li>
                    </ul>
                </li>



            </ul>
        </>

    )
}

export default ProductDetail