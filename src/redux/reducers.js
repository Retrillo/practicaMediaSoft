
const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingProductIndex = state.cart.findIndex(product => product.id === action.payload.id);
      
      if (existingProductIndex !== -1) {
      
        const updatedCart = [...state.cart];
        updatedCart[existingProductIndex].quantity += 1;
        return { ...state, cart: updatedCart };
      } else {
       
        return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
      }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(product => product.id !== action.payload),
      };

    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
