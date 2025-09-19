const cartReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload ? { ...item, amount: item.amount + 1 } : item
        ),
      };
    case 'DECREMENT':
      return {
        ...state,
        cart: state.cart
          .map(item =>
            item.id === action.payload ? { ...item, amount: item.amount - 1 } : item
          )
          .filter(item => item.amount > 0),
      };
    case 'REMOVE':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };
    case 'CLEAR':
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export default cartReducer;