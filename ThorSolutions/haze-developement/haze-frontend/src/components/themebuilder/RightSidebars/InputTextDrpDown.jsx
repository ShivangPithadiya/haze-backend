import React, { useEffect, useRef, useContext } from "react";
import { ChromePicker } from "react-color";
import ThemeContext from "../../../contexts/ThemeContext";

const InputTextDrpDown = () => {
 /* const [customizerData, setCustomizerData] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("customizerData"));
    return (
      storedData || {
        InputTextDropDown: {
          InputTxtBgClr: "#ffff",
          InputTxtHeight: "",
          InputTxtRoundings: "#ffff",
          InputTxtBrdClr: "",
          InputTxtFontFmly: "",
          InputTextFontClr: "",
          InputTextFontSize: "",
          InputTextDrpDownMenuBgClr:"",
          InputTextDrpDownHovOpClr:"",
          InputTextDrpDownSelcOpClr:"",
          InputTextDrpDownMenuFtClr:""
        },
      }
    );
  });*/
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
      <div className="right_wrapper_title">Text Input & Dropdown</div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Background colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
              <span
                    data-element="TextInputAndDropdownBackgroundColor"
                    onClick={(e) =>
                      handleColorPickerClick(
                        e,
                        "TextInputAndDropdownBackgroundColor"
                      )
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.TextInputAndDropdown
                          ?.TextInputAndDropdownBackgroundColor,
                    }}
                  ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "TextInputAndDropdownBackgroundColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
          >
            <ChromePicker
              color={{
                hex: customizerData?.TextInputAndDropdown
                  ?.TextInputAndDropdownBackgroundColor,
              }}
              onChange={(color) =>
                handleColorChange(color, "TextInputAndDropdownBackgroundColor")
              }
            />
          </div>
        )}
      </div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Height</div>
          <div className="right_property_value">
            <input
              type="text"
              className="right_wrapper_input"
              value={customizerData?.TextInputAndDropdown?.TextInputAndDropdownHeight}
              onChange={(e) =>
                handleInputChange({
                  name: "TextInputAndDropdownHeight",
                  value: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Roundings</div>
          <div className="right_property_value">
          <input
              type="text"
              className="right_wrapper_input"
              value={customizerData?.TextInputAndDropdown?.TextInputAndDropdownRounding}
              onChange={(e) =>
                handleInputChange({
                  name: "TextInputAndDropdownRounding",
                  value: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Border colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                <span
                    data-element="TextInputAndDropdownBorderColor"
                    onClick={(e) =>
                      handleColorPickerClick(
                        e,
                        "TextInputAndDropdownBorderColor"
                      )
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.TextInputAndDropdown
                          ?.TextInputAndDropdownBorderColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_property_name">Font family</div>
        <div className="custom-select">
          <select>
            <option value="none" selected disabled hidden>
              Poppins
            </option>
            <option value="0">Poppins</option>
            <option value="1">rubik</option>
          </select>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Font colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field" style={{ color: "#2D2D2D" }}>
                  <button aria-labelledby="clr-open-label"></button>
                  <input type="text" className="coloris" value="#ffd21af" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Font size</div>
          <div className="right_property_value">
            <input type="text" className="right_wrapper_input" id="name" />
          </div>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">
            Dropdown menu background colour
          </div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field" style={{ color: "#2D2D2D" }}>
                  <button aria-labelledby="clr-open-label"></button>
                  <input type="text" className="coloris" value="#ffd21af" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">
            Dropdown hovered options colour
          </div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field" style={{ color: "#2D2D2D" }}>
                  <button aria-labelledby="clr-open-label"></button>
                  <input type="text" className="coloris" value="#ffd21af" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">
            Dropdown selected option colour
          </div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field" style={{ color: "#2D2D2D" }}>
                  <button aria-labelledby="clr-open-label"></button>
                  <input type="text" className="coloris" value="#ffd21af" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Dropdown menu font colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field" style={{ color: "#2D2D2D" }}>
                  <button aria-labelledby="clr-open-label"></button>
                  <input type="text" className="coloris" value="#ffd21af" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputTextDrpDown;
