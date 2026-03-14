import React, { useState, useEffect } from "react"
import { useCart } from "../../context/CartContext"
import { Link, useLocation } from "react-router-dom"
import Data from "../../components/Data"
import Sdata from "../../components/shops/Sdata"

const allProducts = [...Data.productItems, ...Sdata.shopItems]

const ShopPage = () => {
    const { addToCart } = useCart()
    const [filter, setFilter] = useState("All")
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const categoryParam = queryParams.get("category");
        if (categoryParam) {
            setFilter(categoryParam);
        }
    }, [location]);

    const filteredProducts = filter === "All" ? allProducts : allProducts.filter(p => {
        return p.category === filter;
    })

    return (
        <section className='shop-page background'>
            <div className='container'>
                <div className='heading f_flex' style={{ justifyContent: "space-between", alignItems: "center" }}>
                    <h2>All Products</h2>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)} style={{ padding: "10px", borderRadius: "8px", border: "1px solid #E2E8F0" }}>
                        <option value="All">All Categories</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Cars">Cars</option>
                        <option value="Home & Garden">Home & Garden</option>
                        <option value="Gifts">Gifts</option>
                        <option value="Music">Music</option>
                        <option value="Health & Beauty">Health & Beauty</option>
                        <option value="Pets">Pets</option>
                        <option value="Baby Toys">Baby Toys</option>
                        <option value="Groceries">Groceries</option>
                        <option value="Books">Books</option>
                    </select>
                </div>

                <div className='grid' style={{ marginTop: "30px" }}>
                    {filteredProducts.map((product) => (
                        <div className='product' key={product.id}>
                            <div className='img'>
                                <span className='discount'>{product.discount || 10}% Off</span>
                                <Link to={`/product/${product.id}`}>
                                    <img src={product.cover} alt='' style={{ width: "100%", height: "200px", objectFit: "contain" }} />
                                </Link>
                                <div className='product-like'>
                                    <i className='fa-regular fa-heart'></i>
                                </div>
                            </div>
                            <div className='product-details'>
                                <Link to={`/product/${product.id}`}>
                                    <h3>{product.name}</h3>
                                </Link>
                                <div className='rate'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                </div>
                                <div className='price'>
                                    <h4>${product.price}.00</h4>
                                    <button onClick={() => addToCart(product)}>
                                        <i className='fa fa-plus'></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ShopPage
