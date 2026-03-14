import React from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Pages from "./pages/Pages"
import Data from "./components/Data"
import Cart from "./common/Cart/Cart"
import Footer from "./common/footer/Footer"
import Sdata from "./components/shops/Sdata"

// New Pages
import ShopPage from "./pages/Shop/ShopPage"
import ProductDetails from "./pages/ProductDetails/ProductDetails"
import Checkout from "./pages/Checkout/Checkout"
import Auth from "./pages/Auth/Auth"

function App() {
  const { productItems } = Data
  const { shopItems } = Sdata

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact>
            <Pages productItems={productItems} shopItems={shopItems} />
          </Route>
          <Route path='/shop' exact>
            <ShopPage />
          </Route>
          <Route path='/product/:id' exact>
            <ProductDetails />
          </Route>
          <Route path='/cart' exact>
            <Cart />
          </Route>
          <Route path='/checkout' exact>
            <Checkout />
          </Route>
          <Route path='/auth' exact>
            <Auth />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
