import React from "react";

import icon from "./death-star.png";
import "./error-indicator.css";
const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} />
      <span className="boom">BOOM</span>
      <span>something has gone terribly wrong</span>
      <span> (but we already sent droids to fix it)</span>
    </div>
  );
};

export default ErrorIndicator;
