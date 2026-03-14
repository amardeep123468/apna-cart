import React from "react"
import { useParams, useHistory } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import Data from "../../components/Data"
import Sdata from "../../components/shops/Sdata"

// A helper to find matching product in the mock data
const allProducts = [...Data.productItems, ...Sdata.shopItems]

const ProductDetails = () => {
    const { id } = useParams()
    const history = useHistory()
    const { addToCart } = useCart()

    const product = allProducts.find((item) => item.id == id)

    if (!product) {
        return (
            <section className='background'>
                <div className='container'>
                    <h2>Product not found.</h2>
                </div>
            </section>
        )
    }

    return (
        <section className='product-details background'>
            <div className='container d_flex product' style={{ gap: "40px", padding: "40px" }}>
                <div className='img-section' style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", background: "#f8fafd", borderRadius: "16px", padding: "20px" }}>
                    <img src={product.cover || product.cover} alt={product.name} style={{ width: "100%", maxWidth: "400px", objectFit: "contain" }} />
                </div>
                <div className='details-section' style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <button onClick={() => history.goBack()} style={{ alignSelf: "flex-start", marginBottom: "20px", background: "none", color: "#64748B", fontWeight: "600" }}>
                        <i className="fa-solid fa-arrow-left" style={{ marginRight: "10px" }}></i> Back
                    </button>
                    <span className="discount" style={{ position: "relative", width: "fit-content", marginBottom: "15px" }}>{product.discount}% Off</span>
                    <h1 style={{ fontSize: "36px", color: "#1E293B", marginBottom: "10px" }}>{product.name}</h1>
                    <div className='rate' style={{ marginBottom: "20px" }}>
                        <i className='fa fa-star' style={{ color: "#FBBF24" }}></i>
                        <i className='fa fa-star' style={{ color: "#FBBF24" }}></i>
                        <i className='fa fa-star' style={{ color: "#FBBF24" }}></i>
                        <i className='fa fa-star' style={{ color: "#FBBF24" }}></i>
                        <i className='fa fa-star' style={{ color: "#FBBF24" }}></i>
                        <span style={{ marginLeft: "10px", color: "#64748B" }}>(120 reviews)</span>
                    </div>
                    <h2 style={{ fontSize: "30px", color: "#E94560", marginBottom: "30px" }}>${product.price}.00</h2>
                    <p style={{ color: "#64748B", lineHeight: "1.8", marginBottom: "30px" }}>
                        Experience the premium quality and exceptional performance of the {product.name}. Designed to provide the best value and built to last, making it the perfect choice for you.
                    </p>
                    <button className='btn-primary' onClick={() => addToCart(product)} style={{ width: "fit-content", fontSize: "18px", padding: "15px 40px" }}>
                        <i className="fa-solid fa-cart-shopping" style={{ marginRight: "10px" }}></i> Add To Cart
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails
