import React, { useState, useEffect,useContext } from "react";
import Utils from "../../Utils";
import ThemeContext from "../../contexts/ThemeContext";

const LeftSidebar = ({ onAnchorClick }) => {
  const { updateCustomizerData } = useContext(ThemeContext);
  const [activeLink, setActiveLink] = useState("Customizer_Title_list");

  const handleAnchorClick = (link) => {
    onAnchorClick(link);
    setActiveLink(link);
  };
  const resetTheme = () => {
    localStorage.setItem(
      "customizerData",
      JSON.stringify(Utils.initialCustomizerData)
    );
    updateCustomizerData(Utils.initialCustomizerData);
  };
  
  useEffect(() => {
    const getHashFromURL = () => {
      const hash = window.location.hash.substring(1);
      setActiveLink(hash);
    };
    getHashFromURL();
    window.addEventListener('hashchange', getHashFromURL);
    return () => {
      window.removeEventListener('hashchange', getHashFromURL);
    };
  }, []); 
  console.log(activeLink,"activeLink");
  return (
    <div className="sider_baar">
      <div className="sidebar_menu_section">
        <ul className="sidebar_menu">
          <li
            className={`sidebar_list ${
              activeLink === "Customizer_Title_list"
                ? "sidebar_active_list"
                : ""
            }`}
          >
            <a
              href="#Customizer_Title_list"
              onClick={() => handleAnchorClick("Customizer_Title_list")}
            >
              <span className="sidebar_menu_icon">
                <img src="assets/Image/them/text.svg" />
              </span>
              <span
                className={`sidebar_menu_name ${
                  activeLink === "Customizer_Title_list" ? "active_list" : ""
                }`}
              >
                Customizer Title
              </span>
            </a>
          </li>

          <li
            className={`sidebar_list ${
              activeLink === "Layers_Panel_list" ? "sidebar_active_list" : ""
            }`}
          >
            <a href="#Layers_Panel_list" onClick={() => handleAnchorClick("Layers_Panel_list")}>
              <span className="sidebar_menu_icon">
                <img src="assets/Image/them/Layers Panel.svg" />
              </span>

              <span
                className={`sidebar_menu_name ${
                  activeLink === "Layers_Panel_list" ? "active_list" : ""
                }`}
              >
                Layers Panel
              </span>
            </a>
          </li>

          <li
            className={`sidebar_list ${
              activeLink === "Layers_list" ? "sidebar_active_list" : ""
            }`}
          >
            <a href="#Layers_list" onClick={() => handleAnchorClick("Layers_list")}>
              <span className="sidebar_menu_icon">
                <img src="assets/Image/them/Layers.svg" />
              </span>

              <span
                className={`sidebar_menu_name ${
                  activeLink === "Layers_list" ? "active_list" : ""
                }`}
              >
                {" "}
                Layers
              </span>
            </a>
          </li>

          <li
            className={`sidebar_list ${
              activeLink === "Layer_Settings_list" ? "sidebar_active_list" : ""
            }`}
          >
            <a
              href="#Layer_Settings_list"
              onClick={() => handleAnchorClick("Layer_Settings_list")}
            >
              <span className="sidebar_menu_icon">
                <span className="sidebar_menu_icon">
                  <img src="assets/Image/them/Layer Settings.svg" />
                </span>
              </span>
              <span
                className={`sidebar_menu_name ${
                  activeLink === "Layer_Settings_list" ? "active_list" : ""
                }`}
              >
                {" "}
                Layer Settings
              </span>
            </a>
          </li>

          <li
            className={`sidebar_list ${
              activeLink === "Thumbnails_Button_list"
                ? "sidebar_active_list"
                : ""
            }`}
          >
            <a
              href="#Thumbnails_Button_list"
              onClick={() => handleAnchorClick("Thumbnails_Button_list")}
            >
              <span className="sidebar_menu_icon">
                <span className="sidebar_menu_icon">
                  <img src="assets/Image/them/Thumbnails Button.svg" />
                </span>
              </span>
              <span
                className={`sidebar_menu_name ${
                  activeLink === "Thumbnails_Button_list" ? "active_list" : ""
                }`}
              >
                {" "}
                Thumbnails Button
              </span>
            </a>
          </li>

          <li
            className={`sidebar_list ${
              activeLink === "Text_Inpu_Dropdown_list"
                ? "sidebar_active_list"
                : ""
            }`}
          >
            <a
              href="#Text_Inpu_Dropdown_list"
              onClick={() => handleAnchorClick("Text_Inpu_Dropdown_list")}
            >
              <span className="sidebar_menu_icon">
                <span className="sidebar_menu_icon">
                  <img src="assets/Image/them/Text Input & Dropdown.svg" />
                </span>
              </span>
              <span
                className={`sidebar_menu_name ${
                  activeLink === "Text_Inpu_Dropdown_list" ? "active_list" : ""
                }`}
              >
                Text Input & Dropdown
              </span>
            </a>
          </li>

          <li
            className={`sidebar_list ${
              activeLink === "File_Upload_list" ? "sidebar_active_list" : ""
            }`}
          >
            <a href="#File_Upload_list" onClick={() => handleAnchorClick("File_Upload_list")}>
              <span className="sidebar_menu_icon">
                <span className="sidebar_menu_icon">
                  <img src="assets/Image/them/File Upload.svg" />
                </span>
              </span>
              <span
                className={`sidebar_menu_name ${
                  activeLink === "File_Upload_list" ? "active_list" : ""
                }`}
              >
                File Upload{" "}
              </span>
            </a>
          </li>

          <li
            className={`sidebar_list ${
              activeLink === "Print_Ready_list" ? "sidebar_active_list" : ""
            }`}
          >
            <a href="#Print_Ready_list" onClick={() => handleAnchorClick("Print_Ready_list")}>
              <span className="sidebar_menu_icon">
                <span className="sidebar_menu_icon">
                  <img src="assets/Image/them/Print Ready.svg" />
                </span>
              </span>
              <span
                className={`sidebar_menu_name ${
                  activeLink === "Print_Ready_list" ? "active_list" : ""
                }`}
              >
                Print Ready
              </span>
            </a>
          </li>

          <li
            className={`sidebar_list ${
              activeLink === "Customizer_list" ? "sidebar_active_list" : ""
            }`}
          >
            <a href="#Customizer_list" onClick={() => handleAnchorClick("Customizer_list")}>
              <span className="sidebar_menu_icon">
                <span className="sidebar_menu_icon">
                  <img src="assets/Image/them/Customizer.svg" />
                </span>
              </span>
              <span
                className={`sidebar_menu_name ${
                  activeLink === "Customizer_list" ? "active_list" : ""
                }`}
              >
                Customizer
              </span>
            </a>
          </li>

          <li
            className={`sidebar_list ${
              activeLink === "Step_Title_list" ? "sidebar_active_list" : ""
            }`}
          >
            <a href="#Step_Title_list" onClick={() => handleAnchorClick("Step_Title_list")}>
              <span className="sidebar_menu_icon">
                <span className="sidebar_menu_icon">
                  <img src="assets/Image/them/text.svg" />
                </span>
              </span>
              <span
                className={`sidebar_menu_name ${
                  activeLink === "Step_Title_list" ? "active_list" : ""
                }`}
              >
                Step Title (mobile)
              </span>
            </a>
          </li>

          <li
            className={`sidebar_list ${
              activeLink === "Summary_Title_list" ? "sidebar_active_list" : ""
            }`}
          >
            <a href="#Summary_Title_list" onClick={() => handleAnchorClick("Summary_Title_list")}>
              <span className="sidebar_menu_icon">
                <span className="sidebar_menu_icon">
                  <img src="assets/Image/them/text.svg" />
                </span>
              </span>
              <span
                className={`sidebar_menu_name ${
                  activeLink === "Summary_Title_list" ? "active_list" : ""
                }`}
              >
                Summary Title
              </span>
            </a>
          </li>

          <li
            className={`sidebar_list ${
              activeLink === "Cart_button_list" ? "sidebar_active_list" : ""
            }`}
          >
            <a href="#Cart_button_list" onClick={() => handleAnchorClick("Cart_button_list")}>
              <span className="sidebar_menu_icon">
                <span className="sidebar_menu_icon">
                  <img src="assets/Image/them/Add To Cart & Buttons.svg" />
                </span>
              </span>
              <span
                className={`sidebar_menu_name ${
                  activeLink === "Cart_button_list" ? "active_list" : ""
                }`}
              >
                Add To Cart & Buttons
              </span>
            </a>
          </li>

          <li
            className={`sidebar_list ${
              activeLink === "Confirm_Button_list" ? "sidebar_active_list" : ""
            }`}
          >
            <a
              href="#Confirm_Button_list"
              onClick={() => handleAnchorClick("Confirm_Button_list")}
            >
              <span className="sidebar_menu_icon">
                <span className="sidebar_menu_icon">
                  <img src="assets/Image/them/Confirm Button (mobile).svg" />
                </span>
              </span>
              <span
                className={`sidebar_menu_name ${
                  activeLink === "Confirm_Button_list" ? "active_list" : ""
                }`}
              >
                Confirm Button (mobile)
              </span>
            </a>
          </li>
          <li
            className={`sidebar_list ${
              activeLink === "Price_list" ? "sidebar_active_list" : ""
            }`}
          >
            <a href="#Price_list" onClick={() => handleAnchorClick("Price_list")}>
              <span className="sidebar_menu_icon">
                <span className="sidebar_menu_icon">
                  <img src="assets/Image/them/Price.svg" />
                </span>
              </span>
              <span
                className={`sidebar_menu_name ${
                  activeLink === "Price_list" ? "active_list" : ""
                }`}
              >
                Price
              </span>
            </a>
          </li>

          <li
            className={`sidebar_list ${
              activeLink === "Switch_View_Arrows_list"
                ? "sidebar_active_list"
                : ""
            }`}
          >
            <a
              href="#Switch_View_Arrows_list"
              onClick={() => handleAnchorClick("Switch_View_Arrows_list")}
            >
              <span className="sidebar_menu_icon">
                <span className="sidebar_menu_icon">
                  <img src="assets/Image/leftSidebar/arrow.svg" />
                </span>
              </span>
              <span
                className={`sidebar_menu_name ${
                  activeLink === "Switch_View_Arrows_list" ? "active_list" : ""
                }`}
              >
                Switch View Arrows{" "}
              </span>
            </a>
          </li>

          <li
            className={`sidebar_list ${
              activeLink === "Switch_View_Dots_list"
                ? "sidebar_active_list"
                : ""
            }`}
          >
            <a
              href="#Switch_View_Dots_list"
              onClick={() => handleAnchorClick("Switch_View_Dots_list")}
            >
              <span className="sidebar_menu_icon">
                <span className="sidebar_menu_icon">
                  <img src="assets/Image/leftSidebar/switch-dots.svg" />
                </span>
              </span>
              <span
                className={`sidebar_menu_name ${
                  activeLink === "Switch_View_Dots_list" ? "active_list" : ""
                }`}
              >
                Switch View Dots
              </span>
            </a>
          </li>

          <li
            className={`sidebar_list ${
              activeLink === "Zoom_list" ? "sidebar_active_list" : ""
            }`}
          >
            <a href="#Zoom_list" onClick={() => handleAnchorClick("Zoom_list")}>
              <span className="sidebar_menu_icon">
                <span className="sidebar_menu_icon">
                  <img src="assets/Image/leftSidebar/zoom.svg" />
                </span>
              </span>
              <span
                className={`sidebar_menu_name ${
                  activeLink === "Zoom_list" ? "active_list" : ""
                }`}
              >
                Zoom
              </span>
            </a>
          </li>

          <li
            className={`sidebar_list ${
              activeLink === "Share_Button_list" ? "sidebar_active_list" : ""
            }`}
          >
            <a href="#Share_Button_list" onClick={() => handleAnchorClick("Share_Button_list")}>
              <span className="sidebar_menu_icon">
                <span className="sidebar_menu_icon">
                  <img src="assets/Image/leftSidebar/Share-Button.svg" />
                </span>
              </span>
              <span
                className={`sidebar_menu_name ${
                  activeLink === "Share_Button_list" ? "active_list" : ""
                }`}
              >
                Share Button
              </span>
            </a>
          </li>

          <li
            className={`sidebar_list ${
              activeLink === "Description_mobile" ? "sidebar_active_list" : ""
            }`}
          >
            <a href="#Description_mobile" onClick={() => handleAnchorClick("Description_mobile")}>
              <span className="sidebar_menu_icon">
                <span className="sidebar_menu_icon">
                  <img src="assets/Image/leftSidebar/info-circle.svg" />
                </span>
              </span>
              <span
                className={`sidebar_menu_name ${
                  activeLink === "Description_mobile" ? "active_list" : ""
                }`}
              >
                Description(mobile)
              </span>
            </a>
          </li>

          <li
            className={`sidebar_list ${
              activeLink === "Out_of_Stock_list" ? "sidebar_active_list" : ""
            }`}
          >
            <a href="#Out_of_Stock_list" onClick={() => handleAnchorClick("Out_of_Stock_list")}>
              <span className="sidebar_menu_icon">
                <span className="sidebar_menu_icon">
                  <img src="assets/Image/leftSidebar/OutOfStock.svg" />
                </span>
              </span>
              <span
                className={`sidebar_menu_name ${
                  activeLink === "Out_of_Stock_list" ? "active_list" : ""
                }`}
              >
                Out of Stock
              </span>
            </a>
          </li>
        </ul>
        <div className="Reset_theme_section">
          <div className="reset__theme__box">
            <span className="Reset_theme_title">Reset your theme</span>
            <button onClick={() => resetTheme()} className="Reset_theme_button">
              Reset
            </button>
          </div>
          <div className="Reset_cont">
            Restore your theme settings to their original value
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
