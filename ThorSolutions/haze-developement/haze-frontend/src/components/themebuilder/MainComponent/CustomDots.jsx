import React, { useState, useEffect, useContext } from "react";
import ThemeContext from "../../../contexts/ThemeContext";

const CustomDots = ({ active }) => {
  const { customizerData } = useContext(ThemeContext);
  const [customizerDotStyleSelected, setCustomizerDotStyleSelected] =
    useState();
  const [customizerDotStyle, setCustomizerDotStyle] = useState();
  useEffect(() => {
    setCustomizerDotStyleSelected(
      customizerData?.SwitchViewDots?.SwitchViewDotsSelectColour
    );
    setCustomizerDotStyle(customizerData?.SwitchViewDots?.SwitchViewDotsColour);
  }, [customizerData]);
  const dotStyle = {
    background: active ? customizerDotStyleSelected : customizerDotStyle,
  };

  return <button style={dotStyle}>1</button>;
};

export default CustomDots;
