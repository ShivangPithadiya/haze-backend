import React, { useEffect, useRef, useContext } from "react";
import { ChromePicker } from "react-color";
import ThemeContext from "../../../contexts/ThemeContext";

const LayersSettingsList = () => {
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
      <div className="right_wrapper_title">Layer Settings</div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Border colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field"> 
                <span
                    data-element="LayersSettingsBorderColor"
                    onClick={(e) =>
                      handleColorPickerClick(
                        e,
                        "LayersSettingsBorderColor"
                      )
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.LayersSettings
                          ?.LayersSettingsBorderColor,
                    }}
                  ></span>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "LayersSettingsBorderColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{ hex: customizerData.LayersSettings.LayersSettingsBorderColor }}
              onChange={(color) => handleColorChange(color, "LayersSettingsBorderColor")}
            />
          </div>
        )}
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Selected border colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                <span
                    data-element="LayersSettingsSelectedBorderColor"
                    onClick={(e) =>
                      handleColorPickerClick(
                        e,
                        "LayersSettingsSelectedBorderColor"
                      )
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.LayersSettings
                          ?.LayersSettingsSelectedBorderColor,
                    }}
                  ></span> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "LayersSettingsSelectedBorderColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{ hex: customizerData.LayersSettings.LayersSettingsSelectedBorderColor }}
              onChange={(color) =>
                handleColorChange(color, "LayersSettingsSelectedBorderColor")
              }
            />
          </div>
        )}
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Border thickness</div>
          <div className="right_property_value">
            <input
              type="text"
              className="right_wrapper_input"
              value={customizerData.LayersSettings.LayersSettingsBorderThickness}
              onChange={(e) =>
                handleInputChange({
                  name: "LayersSettingsBorderThickness",
                  value: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Selected border thickness</div>
          <div className="right_property_value">
            <input
              type="text"
              className="right_wrapper_input"
              value={customizerData.LayersSettings.LayersSettingsSelectedBorderThickness}
              onChange={(e) =>
                handleInputChange({
                  name: "LayersSettingsSelectedBorderThickness",
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
                    data-element="LayersSettingsFontColor"
                    onClick={(e) =>
                      handleColorPickerClick(
                        e,
                        "LayersSettingsFontColor"
                      )
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.LayersSettings
                          ?.LayersSettingsFontColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "LayersSettingsFontColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{ hex: customizerData.LayersSettings.LayersSettingsFontColor }}
              onChange={(color) => handleColorChange(color, "LayersSettingsFontColor")}
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
              value={customizerData.LayersSettings.LayersSettingsFontSize}
              onChange={(e) =>
                handleInputChange({
                  name: "LayersSettingsFontSize",
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
            name="LayersSettingsFontFamily"
            onChange={(e) =>
              handleInputChange({
                name: "LayersSettingsFontFamily",
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
          <div className="right_property_name">Pop-up background colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">                
                <span
                    data-element="LayersSettingsPopUpBackgroundColor"
                    onClick={(e) =>
                      handleColorPickerClick(
                        e,
                        "LayersSettingsPopUpBackgroundColor"
                      )
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.LayersSettings
                          ?.LayersSettingsPopUpBackgroundColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "LayersSettingsPopUpBackgroundColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{ hex: customizerData.LayersList.LayersSettingsPopUpBackgroundColor }}
              onChange={(color) => handleColorChange(color, "LayersSettingsPopUpBackgroundColor")}
            />
          </div>
        )}
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Pop-up background rounding</div>
          <div className="right_property_value">
          <input
              type="text"
              className="right_wrapper_input"
              value={customizerData.LayersList.LayersSettingsPopUpBackgroundRounding}
              onChange={(e) =>
                handleInputChange({
                  name: "LayersSettingsPopUpBackgroundRounding",
                  value: e.target.value,
                })
              }
            />
          </div>
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
                    data-element="LayersSettingsDescriptionFontColor"
                    onClick={(e) =>
                      handleColorPickerClick(
                        e,
                        "LayersSettingsDescriptionFontColor"
                      )
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.LayersSettings
                          ?.LayersSettingsDescriptionFontColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "LayersSettingsDescriptionFontColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{ hex: customizerData.LayersSettings.LayersSettingsDescriptionFontColor }}
              onChange={(color) => handleColorChange(color, "LayersSettingsDescriptionFontColor")}
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
              value={customizerData.LayersSettings.LayersSettingsDescriptionFontSize}
              onChange={(e) =>
                handleInputChange({
                  name: "LayersSettingsDescriptionFontSize",
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
            name="LayersSettingsDescriptionFontFamily"
            onChange={(e) =>
              handleInputChange({
                name: "LayersSettingsDescriptionFontFamily",
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
    </>
  );
};

export default LayersSettingsList;
