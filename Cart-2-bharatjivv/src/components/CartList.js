import React from 'react';
import CartItem from './CartItem';
import { useCart } from '../context/CartContext';

const CartList = () => {
  const { cart, dispatch } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.amount, 0);

  if (cart.length === 0) {
    return <h3>Cart is currently empty</h3>;
  }

  return (
    <div id="cart-items-list">
      {cart.map(item => (
        <CartItem key={item.id} {...item} />
      ))}
      <h3 id="cart-total-amount">$ {parseFloat(total.toFixed(2))}</h3>
      <button id="clear-all-cart" onClick={() => dispatch({ type: 'CLEAR' })}>
        Clear Cart
      </button>
    </div>
  );
};

export default CartList;