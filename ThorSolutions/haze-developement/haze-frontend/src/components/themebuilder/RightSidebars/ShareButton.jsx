import React, { useEffect, useRef, useContext } from "react";
import { ChromePicker } from "react-color";
import ThemeContext from "../../../contexts/ThemeContext";

const ShareButton = () => {
  const {
    customizerData,
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
      <div className="right_wrapper_title">Share Button</div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Display Share Button</div>
          <div className="right_property_value">
            <div className="switch_button_row">
              <label className="printing_methods_switch_button">
                <input
                  type="checkbox"
                  checked={
                    customizerData.ShareButton.ShareButtonDisplayButtonYesNo ===
                    "true"
                  }
                  onChange={(e) =>
                    handleInputChange({
                      name: "ShareButtonDisplayButtonYesNo",
                      value: e.target.checked ? "true" : "false",
                    })
                  }
                />
                <span className="printing_methods_switch_slider printing_methods_switch_round"></span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Icon Button</div>
          <div className="right_property_value">
            <label className="theme_check_button">
              <input
                type="radio"
                value={customizerData?.ShareButton?.ShareButtonIconButtonOrTextButton}
                checked={
                  customizerData.ShareButton.ShareButtonIconButtonOrTextButton === "true"
                }
                onClick={(e) =>
                  handleInputChange({
                    name: "ShareButtonIconButtonOrTextButton",
                    value: e.target.checked ? "true" : "false",
                  })
                }
              />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Text Button</div>
          <div className="right_property_value">
            <label className="theme_check_button">
              <input
                type="radio"
                value={customizerData?.ShareButton?.ShareButtonIconButtonOrTextButton}
                checked={
                  customizerData.ShareButton.ShareButtonIconButtonOrTextButton === "false"
                }
                onClick={(e) =>
                  handleInputChange({
                    name: "ShareButtonIconButtonOrTextButton",
                    value: e.target.checked ? "false" : "true",
                  })
                }
              />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <span
                    data-element="ShareButtonColor"
                    onClick={(e) =>
                      handleColorPickerClick(e, "ShareButtonColor")
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.ShareButton?.ShareButtonColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "ShareButtonColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{
                hex: customizerData?.ShareButton?.ShareButtonColor,
              }}
              onChange={(color) => handleColorChange(color, "ShareButtonColor")}
            />
          </div>
        )}
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Text button rounding</div>
          <div className="right_property_value">
            <input
              type="text"
              className="right_wrapper_input"
              value={customizerData?.ShareButton?.ShareButtonTextButtonRounding}
              onChange={(e) =>
                handleInputChange({
                  name: "ShareButtonTextButtonRounding",
                  value: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_property_name">Text button length</div>
        <div className="custom-select">
          <select
            className="fontSelect"
            name="ShareButtonTextButtonLength"
            value={customizerData?.ShareButton?.ShareButtonTextButtonLength}
            onChange={(e) =>
              handleInputChange({
                name: "ShareButtonTextButtonLength",
                value: e.target.value,
              })
            }
          >
            <option value="">Select Text Button Length</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default ShareButton;
