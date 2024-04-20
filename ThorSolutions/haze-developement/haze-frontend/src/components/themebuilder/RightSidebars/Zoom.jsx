import React, { useEffect, useRef, useContext } from "react";
import { ChromePicker } from "react-color";
import ThemeContext from "../../../contexts/ThemeContext";

const Zoom = () => {
  const {
    customizerData,
    showPicker,
    showElement,
    handleColorChange,
    handleColorPickerClick,
    handlePickerClose,
  } = useContext(ThemeContext);
  const colorPickerRef = useRef();
  useEffect(() => {
    document.addEventListener("click", handlePickerClose);
    return () => {
      document.removeEventListener("click", handlePickerClose);
    };
  }, []);
  return (
    <>
      <div className="right_wrapper_title">Zoom</div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                <span
                    data-element="ZoomColor"
                    onClick={(e) =>
                      handleColorPickerClick(e, "ZoomColor")
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.Zoom?.ZoomColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "ZoomColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{ hex: customizerData.Zoom.ZoomColor }}
              onChange={(color) => handleColorChange(color, "ZoomColor")}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Zoom;