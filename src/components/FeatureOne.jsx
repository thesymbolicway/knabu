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
        We are very dedicated to improving the clearing infrastructure of the UK to Africa corridor. In summary, we are a tech team, licensing as a clearing bank with already live auxiliary services. We are solving the problems of underservice to SMEs, slow expensive payments and the decline of UK to Africa correspondent banking relationships. Our business is of 2 types: 
        <ul>
    <li>B2B Blockchain security services, which are revenue generating</li> 
    <li>B2B Banking, as a Tier 1 London Bank to support the fintech space for which we are in our bank license process.</li>
    </ul>
          </p>
        <div className="btn-container">
          <button className="secondary">
            <span>Learn More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureOne;
