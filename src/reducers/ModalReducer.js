const ModalReducer = (state, action) => {
  switch (action.type) {
    case "EMAIL_MODAL_OPEN":
      return {
        ...state,
        emailModalIsOpen: true,
      };
    case "EMAIL_MODAL_CLOSE":
      return {
        ...state,
        emailModalIsOpen: false,
      };
    case "SEND_EMAIL":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default ModalReducer;
