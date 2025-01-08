const initialState = {
    amount: 0,
    denominations: [1, 5, 10, 20, 50, 100],
    result: {},
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_AMOUNT':
        return { ...state, amount: action.payload };
      case 'SET_RESULT':
        return { ...state, result: action.payload };
      case 'SET_DENOMINATIONS':
        return { ...state, denominations: action.payload };
      default:
        return state;
    }
  };
  
  export default reducer;
  