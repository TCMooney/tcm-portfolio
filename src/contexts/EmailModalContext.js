import axios from "axios";
import React, { createContext, useReducer } from "react";
import EmailModalReducer from "../reducers/ModalReducer";

const initialState = {
  emailModalIsOpen: false,
};

export const EmailModalContext = createContext(initialState);

export const EmailModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(EmailModalReducer, initialState);

  function openEmailModal() {
    dispatch({
      type: "EMAIL_MODAL_OPEN",
    });
  }

  function closeEmailModal() {
    dispatch({
      type: "EMAIL_MODAL_CLOSE",
    });
  }

  async function sendEmail(emailData, success) {
    try {
      console.log(emailData);
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/admin/email`,
        emailData
      );
      dispatch({
        type: "SEND_EMAIL",
        payload: res.data,
      });
      console.log("success");
      success();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <EmailModalContext.Provider
      value={{
        emailModalIsOpen: state.emailModalIsOpen,
        openEmailModal,
        closeEmailModal,
        sendEmail,
      }}
    >
      {children}
    </EmailModalContext.Provider>
  );
};
