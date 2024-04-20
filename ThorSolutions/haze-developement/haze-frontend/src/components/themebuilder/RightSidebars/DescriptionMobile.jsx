import React, { useEffect, useRef, useContext } from "react";
import { ChromePicker } from "react-color";
import ThemeContext from "../../../contexts/ThemeContext";

const DescriptionMobile = () => {
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
      <div className="right_wrapper_title">Description (mobile)</div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                <span
                    data-element="DescriptionMobileColor"
                    onClick={(e) =>
                      handleColorPickerClick(e, "DescriptionMobileColor")
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.DescriptionMobile?.DescriptionMobileColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "DescriptionMobileColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{
                hex: customizerData?.DescriptionMobile?.DescriptionMobileColor,
              }}
              onChange={(color) =>
                handleColorChange(color, "DescriptionMobileColor")
              }
            />
          </div>
        )}
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Background colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                <span
                    data-element="DescriptionMobileBackgroundColor"
                    onClick={(e) =>
                      handleColorPickerClick(e, "DescriptionMobileBackgroundColor")
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.DescriptionMobile?.DescriptionMobileBackgroundColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "DescriptionMobileBackgroundColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{
                hex: customizerData?.DescriptionMobile?.DescriptionMobileBackgroundColor,
              }}
              onChange={(color) =>
                handleColorChange(color, "DescriptionMobileBackgroundColor")
              }
            />
          </div>
        )}
      </div>
      <div className="right_wrapper_row">
        <div className="right_property_name">Font</div>
        <div className="custom-select">
        <select
            className="fontSelect"
            name="DescriptionMobileFontFamily"
            value={customizerData?.DescriptionMobile?.DescriptionMobileFontFamily}
            onChange={(e) =>
              handleInputChange({
                name: "DescriptionMobileFontFamily",
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
          <div className="right_property_name">Font size</div>
          <div className="right_property_value">
          <input
              type="text"
              className="right_wrapper_input"
              value={customizerData?.DescriptionMobile?.DescriptionMobileFontSize}
              onChange={(e) =>
                handleInputChange({
                  name: "DescriptionMobileFontSize",
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

export default DescriptionMobile;