
const initialState = {
  items: [],
  total: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        total: state.items.reduce((acc, item) => item.id !== action.payload ? acc + item.price : acc, 0) // Перерасчитываем итоговую сумму
      };
    default:
      return state;
  }
};

export default cartReducer;
