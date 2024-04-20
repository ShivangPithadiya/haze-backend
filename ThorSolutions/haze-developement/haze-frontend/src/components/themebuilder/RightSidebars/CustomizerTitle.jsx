import React, { useEffect, useRef, useContext } from "react";
import { ChromePicker } from "react-color";
import ThemeContext from "../../../contexts/ThemeContext";

const CustomizerTitle = () => {
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
      <div className="right_wrapper_title">Customizer Title</div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Background colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <span
                    data-element="CustomizerTitleBackgroundColor"
                    onClick={(e) =>
                      handleColorPickerClick(
                        e,
                        "CustomizerTitleBackgroundColor"
                      )
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.CustomizerTitle
                          ?.CustomizerTitleBackgroundColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "CustomizerTitleBackgroundColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{
                hex: customizerData?.CustomizerTitle
                  ?.CustomizerTitleBackgroundColor,
              }}
              onChange={(color) =>
                handleColorChange(color, "CustomizerTitleBackgroundColor")
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
            name="CustomizerTitleFontFamily"
            value={customizerData?.CustomizerTitle?.CustomizerTitleFontFamily}
            onChange={(e) =>
              handleInputChange({
                name: "CustomizerTitleFontFamily",
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
              value={customizerData?.CustomizerTitle?.CustomizerTitleFontSize}
              onChange={(e) =>
                handleInputChange({
                  name: "CustomizerTitleFontSize",
                  value: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Font size (mobile)</div>
          <div className="right_property_value">
            <input
              type="text"
              className="right_wrapper_input"
              value={
                customizerData?.CustomizerTitle?.CustomizerTitleFontSizeMobile
              }
              onChange={(e) =>
                handleInputChange({
                  name: "CustomizerTitleFontSizeMobile",
                  value: e.target.value,
                })
              }
            />
          </div>
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
                    data-element="CustomizerTitleFontColor"
                    onClick={(e) =>
                      handleColorPickerClick(e, "CustomizerTitleFontColor")
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.CustomizerTitle
                          ?.CustomizerTitleFontColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "CustomizerTitleFontColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{
                hex: customizerData?.CustomizerTitle?.CustomizerTitleFontColor,
              }}
              onChange={(color) =>
                handleColorChange(color, "CustomizerTitleFontColor")
              }
            />
          </div>
        )}
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Font colour (mobile)</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <span
                    data-element="CustomizerTitleFontColorMobile"
                    onClick={(e) =>
                      handleColorPickerClick(
                        e,
                        "CustomizerTitleFontColorMobile"
                      )
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.CustomizerTitle
                          ?.CustomizerTitleFontColorMobile,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "CustomizerTitleFontColorMobile" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{
                hex:
                  customizerData?.CustomizerTitle
                    ?.CustomizerTitleFontColorMobile,
              }} 
              onChange={(color) =>
                handleColorChange(color, "CustomizerTitleFontColorMobile")
              }
            />
          </div>
        )}
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Divider colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <span
                    data-element="CustomizerTitleDividerColor"
                    onClick={(e) =>
                      handleColorPickerClick(e, "CustomizerTitleDividerColor")
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.CustomizerTitle
                          ?.CustomizerTitleDividerColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "CustomizerTitleDividerColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{
                hex: customizerData?.CustomizerTitle
                  ?.CustomizerTitleDividerColor,
              }}
              onChange={(color) =>
                handleColorChange(color, "CustomizerTitleDividerColor")
              }
            />
          </div>
        )}
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Divider thickness</div>
          <div className="right_property_value">
            <input
              type="text"
              className="right_wrapper_input"
              value={
                customizerData?.CustomizerTitle?.CustomizerTitleDividerThickness
              }
              onChange={(e) =>
                handleInputChange({
                  name: "CustomizerTitleDividerThickness",
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

export default CustomizerTitle;
