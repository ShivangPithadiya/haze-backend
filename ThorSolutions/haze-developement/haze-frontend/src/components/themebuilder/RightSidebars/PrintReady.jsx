import React, { useState, useEffect, useRef } from "react";
import { ChromePicker } from "react-color";

const PrintReady = () => {
  const [customizerData, setCustomizerData] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("customizerData"));
    return (
      storedData || {
        PrintReady: {
          PrintReadyEditionClr: "#ffff",
          PrintReadyEditionIcClr: "#ffff",
          PrintReadyEditionDPIIndTxtClr: "#ffff",
          LowQualityTextClr: "#ffff",
          LowQualityMsgBkgClr: "#ffff",
          LowQualityMsgTextClr:"#ffff",
          HighQualClr:"#ffff"
        },
      }
    );
  });
  return (
    <>
    <div className="right_wrapper_title">Print Ready</div>
            <div className="right_wrapper_row">
              <div className="right_wrapper_col">
                <div className="right_property_name">Edition colour</div>
                <div className="right_property_value">
                  <div className="deom_color">
                    <div className="example full">
                      <div className="clr-field" style={{ color: "#6043EB" }}>
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
                <div className="right_property_name">Edition icon colour</div>
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
                  DPI indicator text colour
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
                  DPI low quality colour
                </div>
                <div className="right_property_value">
                  <div className="deom_color">
                    <div className="example full">
                      <div className="clr-field" style={{ color: "#A84A41" }}>
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
                  Low quality message background colour
                </div>
                <div className="right_property_value">
                  <div className="deom_color">
                    <div className="example full">
                      <div className="clr-field" style={{ color: "#F8D4D3" }}>
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
                  Low quality message text colour
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
                  DPI high quality colour
                </div>
                <div className="right_property_value">
                  <div className="deom_color">
                    <div className="example full">
                      <div className="clr-field" style={{ color: "#56AD38" }}>
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

export default PrintReady
