import React, { useEffect, useRef, useContext } from "react";
import { ChromePicker } from "react-color";
import ThemeContext from "../../../contexts/ThemeContext";

const Price = () => {
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
      <div className="right_wrapper_title">Price</div>

      <div className="right_wrapper_row">
        <div className="right_property_name">Price position</div>
        <div className="custom-select">
          <select
          className="fontSelect"
            name="PricePosition"
            value={customizerData?.Price?.PricePosition}
            onChange={(e) =>
              handleInputChange({
                name: "PricePosition",
                value: e.target.value,
              })
            }
          >
            <option value="">Select Layer Position</option>
            <option value="0">Center</option>
            <option value="1">Center</option>
          </select>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_property_name">Price font</div>
        <div className="custom-select">
          <select
            className="fontSelect"
            name="PriceFontFamily"
            value={customizerData?.Price?.PriceFontFamily}
            onChange={(e) =>
              handleInputChange({
                name: "PriceFontFamily",
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
              value={customizerData?.Price?.PriceFontSize}
              onChange={(e) =>
                handleInputChange({
                  name: "PriceFontSize",
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
              value={customizerData?.Price?.PriceFontSizeMobile}
              onChange={(e) =>
                handleInputChange({
                  name: "PriceFontSizeMobile",
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
                    data-element="PriceFontColour"
                    onClick={(e) =>
                      handleColorPickerClick(e, "PriceFontColour")
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor: customizerData?.Price?.PriceFontColour,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "PriceFontColour" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{
                hex: customizerData?.Price?.PriceFontColour,
              }}
              onChange={(color) => handleColorChange(color, "PriceFontColour")}
            />
          </div>
        )}
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Show extra price</div>
          <div className="right_property_value">
            <div className="switch_button_row">
              <label className="printing_methods_switch_button">
                <input
                  type="checkbox"
                  checked={customizerData.Price.PriceShowExtraPrice === "true"}
                  onChange={(e) =>
                    handleInputChange({
                      name: "PriceShowExtraPrice",
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
          <div className="right_property_name">Extra price font colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <span
                    data-element="PriceExtraPriceFontColor"
                    onClick={(e) =>
                      handleColorPickerClick(e, "PriceExtraPriceFontColor")
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.Price?.PriceExtraPriceFontColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "PriceExtraPriceFontColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{
                hex: customizerData?.Price?.PriceExtraPriceFontColor,
              }}
              onChange={(color) =>
                handleColorChange(color, "PriceExtraPriceFontColor")
              }
            />
          </div>
        )}
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Extra price border colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <span
                    data-element="PriceExtraPriceBorderColor"
                    onClick={(e) =>
                      handleColorPickerClick(e, "PriceExtraPriceBorderColor")
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.Price?.PriceExtraPriceBorderColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "PriceExtraPriceBorderColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{
                hex: customizerData?.Price?.PriceExtraPriceBorderColor,
              }}
              onChange={(color) =>
                handleColorChange(color, "PriceExtraPriceBorderColor")
              }
            />
          </div>
        )}
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">
            Extra price background colour
          </div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <span
                    data-element="PriceExtraPriceBackgroundColor"
                    onClick={(e) =>
                      handleColorPickerClick(
                        e,
                        "PriceExtraPriceBackgroundColor"
                      )
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.Price?.PriceExtraPriceBackgroundColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "PriceExtraPriceBackgroundColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{
                hex: customizerData?.Price?.PriceExtraPriceBackgroundColor,
              }}
              onChange={(color) =>
                handleColorChange(color, "PriceExtraPriceBackgroundColor")
              }
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Price;
