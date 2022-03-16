import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import CartPage from '../CartPage/CartPage'
import ProductPage from '../ProductPage/ProductPage'
import HomePage from '../HomePage/HomePage'
import AboutPage from '../AboutPage/AboutPage'
import * as productsAPI from "../../utilities/products-api"
import * as ordersAPI from "../../utilities/orders-api"

export default function App() {
  const [user, setUser] = useState(getUser());
  const [ products, setProducts ] = useState([])
  const [ cart, setCart ] = useState(null);
  const navigate = useNavigate()

  
  useEffect(function() {
    async function getAllProducts() {
      const products = await productsAPI.index()
      setProducts(products)
    }
    getAllProducts();
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);
  
  async function handleCreate(formData) {
    const product = await productsAPI.createProduct(formData)
    setProducts([...products, product])
  }
  async function handleAddToOrder(productId) {
    const updatedCart = await ordersAPI.addProductToCart(productId);
    setCart(updatedCart);
  }
  
  async function handleChangeQty(productId, newQty) {
    const updatedCart = await ordersAPI.setProductQtyInCart(productId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/cart');
  }
  
  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<HomePage />} />
              <Route path="/orders/new" element={<CartPage 
                user = {user} 
                products={products}
                order={cart}
                handleChangeQty={handleChangeQty}
                handleCheckout={handleCheckout}
                />} />
              <Route path="/product" element={<ProductPage 
                user = {user}
                products = {products} 
                handleCreate = {handleCreate}
                handleAddToOrder = {handleAddToOrder}
                />} />
              <Route path="/about" element={<AboutPage/>} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />

      }
    </main>
  );
}
