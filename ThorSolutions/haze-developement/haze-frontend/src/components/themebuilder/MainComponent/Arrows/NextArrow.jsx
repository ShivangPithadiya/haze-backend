import React, { useState, useEffect, useContext } from "react";
import ThemeContext from "../../../../contexts/ThemeContext";

const NexArrow = (props) => {
  const { className, style, onClick } = props;
  const { customizerData } = useContext(ThemeContext);
  const [customizerSwitchViewArrows, setCustomizerSwitchViewArrows] =  useState();
  useEffect(() => {
    setCustomizerSwitchViewArrows(
      customizerData?.SwitchViewArrows?.SwitchViewArrowsColor
    );
  }, [customizerData]);
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <svg
        width="42"
        height="24"
        viewBox="0 0 42 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.939339 13.0607C0.353554 12.4749 0.353554 11.5251 0.939339 10.9393L10.4853 1.3934C11.0711 0.807611 12.0208 0.807611 12.6066 1.3934C13.1924 1.97919 13.1924 2.92893 12.6066 3.51472L4.12132 12L12.6066 20.4853C13.1924 21.0711 13.1924 22.0208 12.6066 22.6066C12.0208 23.1924 11.0711 23.1924 10.4853 22.6066L0.939339 13.0607ZM42 13.5H2V10.5H42V13.5Z"
          fill={customizerSwitchViewArrows}
        />
      </svg>
    </div>
  );
};

export default NexArrow;
