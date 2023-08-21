import React from "react";

const MobileBarIcon = () => {
  return (
    <li className="hidden-lg hidden-md">
      <a href="#" className="bar-opener mobile-toggle">
        <span className="bar"></span>
        <span className="bar small"></span>
        <span className="bar"></span>
      </a>
    </li>
  );
};

export default MobileBarIcon;
