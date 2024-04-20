import React, { useState, useEffect, useContext } from "react";
import ThemeContext from "../../../contexts/ThemeContext";

const AddToCart = () => {
  const { customizerData } = useContext(ThemeContext);
  const [isHovered, setIsHovered] = useState(false);
  const [customizerAddToCartBtn, setCustomizerAddToCartBtn] = useState({});
  useEffect(() => {
    setCustomizerAddToCartBtn({
      border:
        customizerData?.AddToCart?.AddToCartBorderThickness +
        " solid " +
        customizerData?.AddToCart?.AddToCartBorderColor,
      borderRadius: customizerData?.AddToCart?.AddToCartBorderRounding,
      fontFamily: customizerData?.AddToCart?.AddToCartFontFamily,
      color: customizerData?.AddToCart?.AddToCartFontColor,
      backgroundColor: isHovered
        ? customizerData?.AddToCart?.AddToCartHoverBackgroundColor
        : customizerData?.AddToCart?.AddToCartBackgroundColor,
      fontSize: customizerData?.AddToCart?.AddToCartFontSize,
    });
  }, [customizerData]);
  return (
    <>
      <div
        class="products_add_button"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button class="add_button" style={customizerAddToCartBtn}>
          Add to cart
        </button>
      </div>
    </>
  );
};

export default AddToCart;
