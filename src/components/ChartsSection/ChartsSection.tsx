import React from "react";
import { useSelector } from "react-redux";
import { ChartsContainer, LegendContainer } from "./ChartsSection.styled";

const ChartsSection: React.FC = () => {
  const revenueData = useSelector((state: any) => state.stats.revenueDistribution);

  // Define meaningful names for segments
  const segmentLabels = ["Product Sales", "Subscriptions", "Services", "Others"];

  // Function to calculate cumulative angles and slices
  const calculatePieSlices = (data: number[], radius: number) => {
    const total = data.reduce((sum, value) => sum + value, 0);
    let cumulativeAngle = 0;

    return data.map((value, index) => {
      const startAngle = cumulativeAngle;
      const endAngle = cumulativeAngle + (value / total) * 360;
      cumulativeAngle = endAngle;

      const x1 = radius + radius * Math.cos((Math.PI * startAngle) / 180);
      const y1 = radius - radius * Math.sin((Math.PI * startAngle) / 180);
      const x2 = radius + radius * Math.cos((Math.PI * endAngle) / 180);
      const y2 = radius - radius * Math.sin((Math.PI * endAngle) / 180);

      const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

      return {
        d: `M ${radius},${radius} L ${x1},${y1} A ${radius},${radius} 0 ${largeArcFlag} 1 ${x2},${y2} Z`,
        color: ["#ff5733", "#33ff57", "#3357ff", "#f4d03f"][index % 4],
        label: `${segmentLabels[index]}: ${((value / total) * 100).toFixed(1)}%`,
      };
    });
  };

  const radius = 150; // Radius of the pie chart
  const slices = calculatePieSlices(revenueData, radius);

  return (
    <ChartsContainer>
      <h2>Revenue Distribution</h2>
      <svg width="400" height="400">
        {slices.map((slice, index) => (
          <path
            key={index}
            d={slice.d}
            fill={slice.color}
            stroke="#fff"
            strokeWidth="2"
          />
        ))}
      </svg>
      <LegendContainer>
        <h3>Revenue Breakdown</h3>
        {slices.map((slice, index) => (
          <p key={index} style={{ color: slice.color }}>
            {slice.label}
          </p>
        ))}
      </LegendContainer>
    </ChartsContainer>
  );
};

export default ChartsSection;
