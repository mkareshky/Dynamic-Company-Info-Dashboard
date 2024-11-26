import React from "react";
import revenueGuide from "../../assets/revenue-guide.svg";

const RevenueGuide: React.FC = () => {
  return (
    <div style={{ textAlign: "center", margin: "10px auto" }}>
      <img
        src={revenueGuide}
        alt="Revenue Breakdown Guide"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  );
};

export default RevenueGuide;
