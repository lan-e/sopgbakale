import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>
        2022 SOPG BAKALE
        <br />
        Sva prava pridržana.
      </p>
      <p className="icons">
        <a href="https://www.instagram.com/sopg.bakale/" target="_blank">
          <AiOutlineInstagram />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100064179074932"
          target="_blank"
        >
          <AiOutlineFacebook />
        </a>
        <a href="mailto:opg.bakalehrvoje@gmail.com" target="_blank">
          <AiOutlineMail />
        </a>
      </p>
    </div>
  );
};

export default Footer;
