import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import CartPage from '../CartPage/CartPage'
import ProductPage from '../ProductPage/ProductPage'
import { getUser } from '../../utilities/users-service';
import HomePage from '../HomePage/HomePage'
export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/product" element={<ProductPage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />

      }
    </main>
  );
}
