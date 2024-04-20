import React, { useState, useEffect, useRef } from "react";
import { ChromePicker } from "react-color";

const FileUpload = () => {
  const [customizerData, setCustomizerData] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("customizerData"));
    return (
      storedData || {
        FileUpload: {
          FileUploadBgClr: "#ffff",
          FileUploadBrdClr: "#ffff",
          FileUploadRound: "",
          FileUploadFtClr: "#ffff",
          FileUploadLinkClr: "#ffff",
          FileUploadFontSize: "",
          FileUploadImgRound: "",
          FileUploadRemoveIptBgClr:"#ffff",
          FileUploadRemoveIptHovBgClr:"#ffff",
          FileUploadRemoveIptIconBgClr:"#ffff"
        },
      }
    );
  });
  return (
    <>
    <div className="right_wrapper_title">File Upload</div>
            <div className="right_wrapper_row">
              <div className="right_wrapper_col">
                <div className="right_property_name">Background colour</div>
                <div className="right_property_value">
                  <div className="deom_color">
                    <div className="example full">
                      <div className="clr-field" style={{ color: "#D9D9D9" }}>
                        <button aria-labelledby="clr-open-label"></button>
                        <input
                          type="text"
                          className="coloris"
                          value="#ffd21af"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="right_wrapper_row">
              <div className="right_wrapper_col">
                <div className="right_property_name">Border colour</div>
                <div className="right_property_value">
                  <div className="deom_color">
                    <div className="example full">
                      <div className="clr-field" style={{ color: "#D9D9D9" }}>
                        <button aria-labelledby="clr-open-label"></button>
                        <input
                          type="text"
                          className="coloris"
                          value="#ffd21af"
                        />
                      </div>
                    </div>
                  </div>
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
                    id="name"
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
                      <div className="clr-field" style={{ color: "#2D2D2D" }}>
                        <button aria-labelledby="clr-open-label"></button>
                        <input
                          type="text"
                          className="coloris"
                          value="#ffd21af"
                        />
                      </div>
                    </div>
                  </div>
                </div>
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
                        <input
                          type="text"
                          className="coloris"
                          value="#ffd21af"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="right_wrapper_row">
              <div className="right_wrapper_col">
                <div className="right_property_name">Link colour</div>
                <div className="right_property_value">
                  <div className="deom_color">
                    <div className="example full">
                      <div className="clr-field" style={{ color: "#147FE2" }}>
                        <button aria-labelledby="clr-open-label"></button>
                        <input
                          type="text"
                          className="coloris"
                          value="#ffd21af"
                        />
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
                  <input
                    type="text"
                    className="right_wrapper_input"
                    id="name"
                  />
                </div>
              </div>
            </div>
            <div className="right_wrapper_row">
              <div className="right_wrapper_col">
                <div className="right_property_name">Image rounding</div>
                <div className="right_property_value">
                  <input
                    type="text"
                    className="right_wrapper_input"
                    id="name"
                  />
                </div>
              </div>
            </div>

            <div className="right_wrapper_row">
              <div className="right_wrapper_col">
                <div className="right_property_name">
                  Remove options background colour
                </div>
                <div className="right_property_value">
                  <div className="deom_color">
                    <div className="example full">
                      <div className="clr-field" style={{ color: "#D9D9D9" }}>
                        <button aria-labelledby="clr-open-label"></button>
                        <input
                          type="text"
                          className="coloris"
                          value="#ffd21af"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="right_wrapper_row">
              <div className="right_wrapper_col">
                <div className="right_property_name">
                  Remove options hover background colour
                </div>
                <div className="right_property_value">
                  <div className="deom_color">
                    <div className="example full">
                      <div className="clr-field" style={{ color: "#2D2D2D" }}>
                        <button aria-labelledby="clr-open-label"></button>
                        <input
                          type="text"
                          className="coloris"
                          value="#ffd21af"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="right_wrapper_row">
              <div className="right_wrapper_col">
                <div className="right_property_name">
                  Remove options icon colour
                </div>
                <div className="right_property_value">
                  <div className="deom_color">
                    <div className="example full">
                      <div className="clr-field" style={{ color: "#D9D9D9" }}>
                        <button aria-labelledby="clr-open-label"></button>
                        <input
                          type="text"
                          className="coloris"
                          value="#ffd21af"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}

export default FileUpload
