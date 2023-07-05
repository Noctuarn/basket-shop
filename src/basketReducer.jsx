export const initialState = {
    basketItems: [],
    totalPrice: 0,
  };
  
  const basketReducer = (state, action) => {
    switch (action.type) {
      case "ADD_ITEM":
        const updatedItems = [...state.basketItems, action.payload.item];
        const updatedTotalPrice = state.totalPrice + action.payload.item.price;
  
        return {
          ...state,
          basketItems: updatedItems,
          totalPrice: updatedTotalPrice,
        };
  
      case "REMOVE_ITEM":
        const filteredItems = state.basketItems.filter(
          (item) => item.id !== action.payload.itemId
        );
       
        return {
          ...state,
          basketItems: filteredItems,
          totalPrice: updatedTotalPrice,
        };
  
      case "CLEAR_BASKET":
        return {
          ...state,
          basketItems: [],
          totalPrice: 0,
        };
  
      default:
        return state;
    }
  };
  
  export default basketReducer;