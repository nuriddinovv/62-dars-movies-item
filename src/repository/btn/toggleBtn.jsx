import React, { useState } from "react";
import "./toggleBtn.css";

const ToggleButton = ({ onToggle }) => {
  const [active, setActive] = useState("today");

  const handleToggle = (option) => {
    setActive(option);
    onToggle(option); 
  };

  return (
    <div className="toggle-container">
      <button
        className={`toggle-btn ${active === "today" ? "active" : ""}`}
        onClick={() => handleToggle("today")}
      >
        Today
      </button>
      <button
        className={`toggle-btn ${active === "week" ? "active" : ""}`}
        onClick={() => handleToggle("week")}
      >
        This Week
      </button>
    </div>
  );
};

export default ToggleButton;
