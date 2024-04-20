import React, { useEffect, useRef, useContext } from "react";
import { ChromePicker } from "react-color";
import ThemeContext from "../../../contexts/ThemeContext";

const LayersList = () => {
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
      <div className="right_wrapper_title">Layers</div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Font colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                <span
                    data-element="LayersListFontColor"
                    onClick={(e) =>
                      handleColorPickerClick(
                        e,
                        "LayersListFontColor"
                      )
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.LayersList
                          ?.LayersListFontColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "LayersListFontColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{
                hex: customizerData?.LayersList
                  ?.LayersListFontColor,
              }}
              onChange={(color) =>
                handleColorChange(color, "LayersListFontColor")
              }
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
              value={customizerData?.LayersList?.LayersListFontSize}
              onChange={(e) =>
                handleInputChange({
                  name: "LayersListFontSize",
                  value: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_property_name">Font family</div>
        <div className="custom-select">
          <select
            className="fontSelect"
            name="LayersListFontFamily"
            value={customizerData?.LayersList?.LayersListFontFamily}
            onChange={(e) =>
              handleInputChange({
                name: "LayersListFontFamily",
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
          <div className="right_property_name">Description font colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <span
                    data-element="LayersListDiscriptionFontColor"
                    onClick={(e) =>
                      handleColorPickerClick(e, "LayersListDiscriptionFontColor")
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.LayersList?.LayersListDiscriptionFontColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "LayersListDiscriptionFontColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{
                hex: customizerData?.LayersList?.LayersListDiscriptionFontColor,
              }}
              onChange={(color) => handleColorChange(color, "LayersListDiscriptionFontColor")}
            />
          </div>
        )}
      </div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Description font size</div>
          <div className="right_property_value">
            <input
              type="text"
              className="right_wrapper_input"
              value={customizerData?.LayersList?.LayersListDiscriptionFontSize}
              onChange={(e) =>
                handleInputChange({
                  name: "LayersListDiscriptionFontSize",
                  value: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_property_name">Description font family</div>
        <div className="custom-select">
          <select
            className="fontSelect"
            name="LayersListDiscriptionFontFamily"
            value={customizerData?.LayersList?.LayersListDiscriptionFontFamily}
            onChange={(e) =>
              handleInputChange({
                name: "LayersListDiscriptionFontFamily",
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
          <div className="right_property_name">Divider colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <span
                    data-element="LayersListDividerColor"
                    onClick={(e) =>
                      handleColorPickerClick(e, "LayersListDividerColor")
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.LayersList?.LayersListDividerColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "LayersListDividerColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{
                hex: customizerData?.LayersList?.LayersListDividerColor,
              }} 
              onChange={(color) => handleColorChange(color, "LayersListDividerColor")}
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
              value={customizerData?.LayersList?.LayersListDividerThickness}
              onChange={(e) =>
                handleInputChange({
                  name: "LayersListDividerThickness",
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

export default LayersList;