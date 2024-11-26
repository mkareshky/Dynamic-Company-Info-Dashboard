import styled from "styled-components";

export const DiagramsContainer = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  margin: 20px auto;
  border-radius: 8px;
  max-width: 90%;
  overflow-x: auto;

  svg.org-chart {
    width: 80%; /* Default width for responsive scaling */
    height: auto;
  }

  @media (min-width: 1024px) {
    svg.org-chart {
      width: 100%; /* Expand chart on desktop screens */
      max-width: 800px; /* Limit maximum size */
    }
  }

  @media (max-width: 768px) {
    svg.org-chart {
      width: 100%; /* Ensure full width on mobile */
      max-width: 600px;
    }
  }
`;
