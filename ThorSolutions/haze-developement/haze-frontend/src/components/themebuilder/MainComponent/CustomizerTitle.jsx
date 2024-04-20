import React, { useState, useEffect, useContext } from "react";
import ThemeContext from "../../../contexts/ThemeContext";

const CustomizerTitle = () => {
  const { customizerData } = useContext(ThemeContext);
  const [isMobile, setIsMobile] = useState(false);
  const [customizerTitleStyle, setCustomizerTitleStyle] = useState({});
  useEffect(() => {
    setCustomizerTitleStyle({
      backgroundColor:
        customizerData?.CustomizerTitle?.CustomizerTitleBackgroundColor,
      fontFamily:
        customizerData?.CustomizerTitle?.CustomizerTitleFontFamily || "Arial",
      fontSize: isMobile
        ? customizerData?.CustomizerTitle?.CustomizerTitleFontSizeMobile
        : customizerData?.CustomizerTitle?.CustomizerTitleFontSize,
      color: isMobile
        ? customizerData?.CustomizerTitle?.CustomizerTitleFontColorMobile
        : customizerData?.CustomizerTitle?.CustomizerTitleFontColor,
      borderBottom:
        customizerData?.CustomizerTitle?.CustomizerTitleDividerThickness +
        " solid " +
        customizerData?.CustomizerTitle?.CustomizerTitleDividerColor,
    });
  }, [customizerData, isMobile]);
  return (
    <>
      <div
        className="products_wrapper_tile caption-top  col_padding"
        style={customizerTitleStyle}
      >
        Product 1
      </div>
    </>
  );
};

export default CustomizerTitle;
