import React, { useState } from "react"
import { useCart } from "../../context/CartContext"

const Checkout = () => {
    const { cartItems, clearCart } = useCart()
    const [placed, setPlaced] = useState(false)

    const totalPrice = cartItems.reduce((price, item) => price + item.qty * item.price, 0)

    const handlePlaceOrder = (e) => {
        e.preventDefault()
        setPlaced(true)
        clearCart()
    }

    if (placed) {
        return (
            <section className='checkout background'>
                <div className='container d_flex' style={{ justifyContent: "center" }}>
                    <div className='product' style={{ width: "500px", textAlign: "center", padding: "60px 20px" }}>
                        <i className="fa-solid fa-circle-check" style={{ fontSize: "60px", color: "#E94560", marginBottom: "20px" }}></i>
                        <h2 className="text-gradient">Order Placed Successfully!</h2>
                        <p style={{ color: "#64748B", marginTop: "10px" }}>Thank you for shopping with us.</p>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className='checkout background'>
            <div className='container d_flex' style={{ gap: "30px" }}>
                <div className='checkout-form product' style={{ flex: 2 }}>
                    <h2 className="text-gradient" style={{ marginBottom: "20px" }}>Shipping Details</h2>
                    <form onSubmit={handlePlaceOrder} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                        <input type="text" required placeholder="Full Name" style={{ padding: "12px", border: "1px solid #E2E8F0", borderRadius: "8px" }} />
                        <input type="text" required placeholder="Address" style={{ padding: "12px", border: "1px solid #E2E8F0", borderRadius: "8px" }} />
                        <div style={{ display: "flex", gap: "15px" }}>
                            <input type="text" required placeholder="City" style={{ flex: 1, padding: "12px", border: "1px solid #E2E8F0", borderRadius: "8px" }} />
                            <input type="text" required placeholder="Postal Code" style={{ flex: 1, padding: "12px", border: "1px solid #E2E8F0", borderRadius: "8px" }} />
                        </div>
                        <button type="submit" className='btn-primary' style={{ marginTop: "20px" }}>Place Order</button>
                    </form>
                </div>

                <div className='checkout-summary product' style={{ flex: 1, height: "fit-content" }}>
                    <h2 className="text-gradient" style={{ marginBottom: "20px" }}>Order Summary</h2>
                    {cartItems.map((item) => (
                        <div key={item.id} className="c_flex" style={{ marginBottom: "10px", borderBottom: "1px solid #E2E8F0", paddingBottom: "10px" }}>
                            <span>{item.name} (x{item.qty})</span>
                            <span>${item.price * item.qty}.00</span>
                        </div>
                    ))}
                    <div className="c_flex" style={{ marginTop: "20px", fontWeight: "bold", fontSize: "20px" }}>
                        <span>Total:</span>
                        <span style={{ color: "#E94560" }}>${totalPrice}.00</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout
