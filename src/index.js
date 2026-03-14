import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { CartProvider } from "./context/CartContext"
import { UserProvider } from "./context/UserContext"

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
