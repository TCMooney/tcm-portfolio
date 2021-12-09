import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { EmailModalContext } from "../contexts/EmailModalContext";
import { EmailModal } from "./modals/EmailModal";

export default function Contact() {
  const { emailModalIsOpen, openEmailModal, closeEmailModal } =
    useContext(EmailModalContext);

  const modalButton = (
    <button
      onClick={
        emailModalIsOpen ? () => closeEmailModal() : () => openEmailModal()
      }
      className="email-button"
    >
      <FontAwesomeIcon className="email-icon" icon={faEnvelope} />
      <div className="email-button-label">Email</div>
    </button>
  );

  return (
    <div className="contact-wrapper">
      <div className="links-wrapper">
        <div className="github">
          <a className="github-link" href="https://github.com/TCMooney">
            <FontAwesomeIcon className="github-icon" icon={faGithub} />
            <div className="github-link-label">Github</div>
          </a>
        </div>
        <div className="email">{modalButton}</div>
        <div className="linkedin">
          <a
            className="linkedin-link"
            href="https://www.linkedin.com/in/thomas-mooney-1095b1105/"
          >
            <FontAwesomeIcon className="linkedin-icon" icon={faLinkedin} />
            <div className="linkedin-link-label">LinkedIn</div>
          </a>
        </div>
      </div>
      <div>
        <EmailModal />
      </div>
    </div>
  );
}
