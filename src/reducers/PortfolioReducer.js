const PortfolioReducer = (state, action) => {
  switch (action.type) {
    case "GET_ITEMS":
      return {
        ...state,
        portfolioItems: action.payload,
        isLoading: true,
      };
    case "GET_ITEM_ID":
      return {
        ...state,
        portfolioToEdit: action.payload,
        isLoading: false,
      };
    case "ADD_ITEM":
      return {
        ...state,
        portfolioItems: [action.payload, ...state.portfolioItems],
      };
    case "DELETE_ITEM":
      return {
        ...state,
        portfolioItems: state.portfolioItems.filter(
          (item) => item._id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default PortfolioReducer;
