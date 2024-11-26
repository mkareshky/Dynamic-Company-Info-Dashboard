import React from "react";
import { useSelector } from "react-redux";
import { CompanyInfoContainer } from "./CompanyInfo.styled";

const CompanyInfo: React.FC = () => {
  const company = useSelector((state: any) => state.company);

  return (
    <CompanyInfoContainer>
      <h2>About Us</h2>
      <p><strong>Mission:</strong> {company.mission}</p>
      <p><strong>Vision:</strong> {company.vision}</p>
      <h3>Milestones</h3>
      <ul>
        {company.milestones.map((milestone: any, index: number) => (
          <li key={index}>
            {milestone.year}: {milestone.achievement}
          </li>
        ))}
      </ul>
    </CompanyInfoContainer>
  );
};

export default CompanyInfo;
