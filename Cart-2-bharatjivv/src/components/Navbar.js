import React from 'react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.amount, 0);

  return (
    <nav>
      <h2>useReducer</h2>
      <div>
        🛒 <span id="nav-cart-item-count">{totalItems}</span>
      </div>
    </nav>
  );
};

export default Navbar;