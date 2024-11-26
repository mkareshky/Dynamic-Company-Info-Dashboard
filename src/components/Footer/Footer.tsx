import React from "react";
import { FooterContainer } from "./Footer.styled";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Tech Innovators Inc. All rights reserved.</p>
      <p>
        Contact us: <a href="mailto:info@techinnovators.com">info@techinnovators.com</a>
      </p>
    </FooterContainer>
  );
};

export default Footer;
