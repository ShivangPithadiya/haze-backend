import React, { useEffect, useRef, useContext } from "react";
import { ChromePicker } from "react-color";
import ThemeContext from "../../../contexts/ThemeContext";

const SummaryTitle = () => {
  const {
    customizerData,
    fontList,
    showPicker,
    showElement,
    handleColorChange,
    handleInputChange,
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
      <div className="right_wrapper_title">Summary Title</div>

      <div className="right_wrapper_row">
        <div className="right_property_name">Font family</div>
        <div className="custom-select">
        <select
            className="fontSelect"
            name="SummaryTitleFontFamily"
            value={customizerData?.SummaryTitle?.SummaryTitleFontFamily}
            onChange={(e) =>
              handleInputChange({
                name: "SummaryTitleFontFamily",
                value: e.target.value,
              })
            }
          >
            <option value="">Select a Font</option>
            {fontList.map((font, index) => (
              <option key={index} value={font}>
                {font}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Font colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                <span
                    data-element="SummaryTitleFontColor"
                    onClick={(e) =>
                      handleColorPickerClick(e, "SummaryTitleFontColor")
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor: customizerData?.SummaryTitle?.SummaryTitleFontColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "SummaryTitleFontColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{
                hex: customizerData?.SummaryTitle?.SummaryTitleFontColor,
              }} 
              onChange={(color) => handleColorChange(color, "SummaryTitleFontColor")}
            />
          </div>
        )}
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Font size</div>
          <div className="right_property_value">
          <input
              type="text"
              className="right_wrapper_input"
              value={customizerData?.SummaryTitle?.SummaryTitleFontSize}
              onChange={(e) =>
                handleInputChange({
                  name: "SummaryTitleFontSize",
                  value: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SummaryTitle;
