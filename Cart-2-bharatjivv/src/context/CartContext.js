import React, { createContext, useReducer, useContext } from 'react';
import cartReducer from "../reducer/CartReducer";
import products from '../data/products';

const CartContext = createContext();

const initialState = {
  cart: products,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);