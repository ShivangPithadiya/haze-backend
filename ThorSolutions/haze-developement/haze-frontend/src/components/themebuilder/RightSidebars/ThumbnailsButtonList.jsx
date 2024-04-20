import React, { useEffect, useRef, useContext } from "react";
import { ChromePicker } from "react-color";
import ThemeContext from "../../../contexts/ThemeContext";

const ThumbnailsButtonList = () => {
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
      <div className="right_wrapper_title">Thumbnails Button</div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Thumbnail Roundings</div>
          <div className="right_property_value">
          <input
              type="text"
              className="right_wrapper_input"
              value={customizerData.ThumbnailButton.ThumbnailButtonRoundings}
              onChange={(e) =>
                handleInputChange({
                  name: "ThumbnailButtonRoundings",
                  value: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_property_name">Column</div>
        <div className="custom-select">
          <select>
            <option value="none" selected disabled hidden>
              1
            </option>
            <option value="0">1</option>
            <option value="1">2</option>
          </select>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Width</div>
          <div className="right_property_value">
            <input type="text" className="right_wrapper_input" id="name" />
          </div>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Height</div>
          <div className="right_property_value">
            <input type="text" className="right_wrapper_input" id="name" />
          </div>
        </div>
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Vertical margin</div>
          <div className="right_property_value">
            <input type="text" className="right_wrapper_input" id="name" />
          </div>
        </div>
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Thumbnail rounding (mobile)</div>
          <div className="right_property_value">
            <input type="text" className="right_wrapper_input" id="name" />
          </div>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Width (mobile)</div>
          <div className="right_property_value">
            <input type="text" className="right_wrapper_input" id="name" />
          </div>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Height (mobile)</div>
          <div className="right_property_value">
            <input type="text" className="right_wrapper_input" id="name" />
          </div>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Margin (mobile)</div>
          <div className="right_property_value">
            <input type="text" className="right_wrapper_input" id="name" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ThumbnailsButtonList;
