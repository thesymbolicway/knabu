import React from "react";
import TokenCard from "./TokenCard";

const FeatureOne = () => {
  const tokens = ["0x", "gosh-realm"];
  return (
    <div className="feature-container">
    
      <div className="feature-description">
        <div className="feature-description-title">
          <h1>
            <span className="highlighted">Who Are We</span> 
          </h1>
        </div>
        <p className="feature-description-paragraph">
        We are a DLT company based in London and have started our bank authorization process to solve the problem of denial of bank accounts to blockchain businesses. We are building a Utility Bank from scratch & engineering it to leverage DLT.
        </p>
        <div className="btn-container">
          <button className="secondary">
            <span>Start swapping</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureOne;
