import styled from "styled-components";

export const ChartsContainer = styled.div`
  position: relative;
  padding: 20px;
  text-align: center;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  margin: 20px auto;
  border-radius: 8px;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    margin: 0 auto;
    display: block;
  }

  @media (max-width: 768px) {
    padding: 10px;
    max-width: 100%;
    margin: 20px;
  }
`;

export const LegendContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  text-align: left;
  background-color: #ffffff;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  max-width: 200px;

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    position: relative;
    margin: 0 auto;
    top: 0;
    right: 0;
    text-align: center;
  }
`;
