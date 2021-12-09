import React, { useContext, useState } from "react";
import ReactModal from "react-modal";
import { EmailModalContext } from "../../contexts/EmailModalContext";

export function EmailModal() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const { emailModalIsOpen, closeEmailModal, sendEmail } =
    useContext(EmailModalContext);

  const submitEmail = (event) => {
    event.preventDefault();

    console.log("Email Sent");

    const newEmail = {
      email,
      subject,
      text,
    };

    sendEmail(newEmail, () => closeEmailModal());
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      bottom: "50%",
      right: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "650px",
      height: "500px",
    },
    overlay: {
      backgroundColor: "rgba(1, 1,1, 0.75",
    },
  };

  return (
    <div>
      <div>
        <ReactModal
          style={customStyles}
          onRequestClose={() => {
            closeEmailModal();
          }}
          isOpen={emailModalIsOpen}
          ariaHideApp={false}
        >
          <form className="email-form" onSubmit={submitEmail}>
            <div className="modal-top-row">
              <input
                className="email-sender email-input"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email"
              />
              <input
                className="email-subject email-input"
                type="text"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                placeholder="Subject"
              />
            </div>
            <textarea
              className="email-text"
              type="textarea"
              value={text}
              onChange={(event) => setText(event.target.value)}
              placeholder="Body"
            />
            <button className="send-email">Send Email</button>
          </form>
        </ReactModal>
      </div>
    </div>
  );
}
