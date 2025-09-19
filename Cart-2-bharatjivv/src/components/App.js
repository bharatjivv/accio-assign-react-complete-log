import React from 'react';
import Navbar from "./Navbar";
import CartList from "./CartList";
import { CartProvider } from '../context/CartContext';


const App = () => {
  return (
    <CartProvider>
      <main id="main">
        <Navbar />
        <CartList />
      </main>
    </CartProvider>
  );
};
export default App;
