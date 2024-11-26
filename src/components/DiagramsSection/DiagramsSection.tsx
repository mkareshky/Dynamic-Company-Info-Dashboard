import React from "react";
import { DiagramsContainer } from "./DiagramsSection.styled";

const DiagramsSection: React.FC = () => {
  return (
    <DiagramsContainer>
      <h2>Organizational Structure</h2>
      <svg
        className="org-chart"
        viewBox="0 0 800 600" /* Set larger viewBox for desktop scaling */
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top Level: CEO */}
        <rect x="350" y="50" width="100" height="40" fill="blue" />
        <text x="375" y="75" fill="white" fontSize="14" fontWeight="bold">CEO</text>

        {/* Second Level: CTO */}
        <rect x="150" y="200" width="80" height="40" fill="green" />
        <text x="175" y="225" fill="white" fontSize="14" fontWeight="bold">CTO</text>

        {/* Second Level: CFO */}
        <rect x="550" y="200" width="80" height="40" fill="orange" />
        <text x="575" y="225" fill="white" fontSize="14" fontWeight="bold">CFO</text>

        {/* Third Level: Engineering Team */}
        <rect x="100" y="400" width="180" height="40" fill="teal" />
        <text x="130" y="425" fill="white" fontSize="14" fontWeight="bold">Engineering Team</text>

        {/* Third Level: Finance Team */}
        <rect x="550" y="400" width="150" height="40" fill="red" />
        <text x="580" y="425" fill="white" fontSize="14" fontWeight="bold">Finance Team</text>

        {/* Connecting Lines */}
        <line x1="400" y1="90" x2="200" y2="200" stroke="black" strokeWidth="2" />
        <line x1="400" y1="90" x2="600" y2="200" stroke="black" strokeWidth="2" />
        <line x1="200" y1="240" x2="175" y2="400" stroke="black" strokeWidth="2" />
        <line x1="600" y1="240" x2="625" y2="400" stroke="black" strokeWidth="2" />
      </svg>
    </DiagramsContainer>
  );
};

export default DiagramsSection;
