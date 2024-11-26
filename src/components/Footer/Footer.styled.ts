import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #282c34;
  color: white;
  text-align: center;
  padding: 20px;
  width: 100%;

  a {
    color: #61dafb;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 0.8em;
  }
`;

