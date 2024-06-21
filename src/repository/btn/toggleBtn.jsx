import React, { useContext, useState } from "react";
import "./toggleBtn.css";
import { LangContext } from "../../context/Context";

const ToggleButton = ({ onToggle }) => {
  const [active, setActive] = useState("today");
  const { lang } = useContext(LangContext);
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
        {lang == "ru" ? "Сегодня" : "today"}
      </button>
      <button
        className={`toggle-btn ${active === "week" ? "active" : ""}`}
        onClick={() => handleToggle("week")}
      >
        {lang == "ru" ? "На этой неделе" : "This week"}
      </button>
    </div>
  );
};

export default ToggleButton;
