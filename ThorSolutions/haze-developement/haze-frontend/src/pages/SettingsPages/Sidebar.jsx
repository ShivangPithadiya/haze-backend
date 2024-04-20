import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import GeneralSidebar from "./GeneralSidebar";
import { setTabName } from "../../features/settingsSlice";
import SettingsMain from '../../components/settings/SettingsMain';
const Sidebar = ({ isSidebarOpen, closeNav }) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("/dashboard");
  const [openModal, setOpenModal] = useState(false);
  const settingsTab = useSelector((state) => state.settingsTab);

  const [isMobile, setIsMobile] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const dispatch = useDispatch();
  const handleModal = (settingsTab) => {
    dispatch(setTabName(settingsTab));
  };
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleUserDropdown = () => {
    var userDropdownOptions = document.getElementById("userDropdownOptions");
    userDropdownOptions.style.display =
      userDropdownOptions.style.display === "block" ? "none" : "block";
  };
  return (

    <div className={`sider_baar ${isMobile ? 'mobile' : 'desktop'} ${isSidebarOpen ? 'open' : 'close'}`}>
      <div className="sidebar_menu_section">
        <a class="closebtn" onClick={closeNav} >&times;</a>
        <ul className="sidebar_menu">
          <li className="sidebar_list mb-4">
            <a href="/dashboard">
              <span className="sidebar_menu_icon" style={{ marginRight: "20px" }}>
                <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM26 7L1 7V9L26 9V7Z" fill="#2D2D2D" />
                </svg>
              </span>
              <span
                className={`sidebar_menu_name ${activeLink === "/settings" ? "active_list active" : ""
                  }`}
              >
                Back
              </span>
            </a>
          </li>
          <li className="sidebar_list">
            <a href="/settings">
              <span className="sidebar_menu_icon">
                <span className="sidebar_menu_icon">
                  <img src="assets/Image/Settings.svg" />
                </span>
              </span>
              <span
                className={`sidebar_menu_name ${activeLink === "/settings" ? "active_list active" : ""
                  }`}
              >
                Settings
              </span>
            </a>
          </li>
          <li className="sidebar_list ">
            <a className="d-flex justify-content-between" onClick={() => handleModal("general")}>
              <span
                className="sidebar_menu_name">
                General
              </span>
              <span className="sidebar_menu_icon">
                <svg xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                ><path d="M1 1L7 7L1 13"
                  stroke="#2D2D2D"
                  stroke-width="2"
                  stroke-linecap="round" /></svg>
              </span>
            </a>
          </li>
          <li className="sidebar_list">
            <a className="d-flex justify-content-between"  onClick={() => handleModal("business-details")}>
              <span
                className="sidebar_menu_name">
                Business Details
              </span>
              <span className="sidebar_menu_icon">
                <svg xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                ><path d="M1 1L7 7L1 13"
                  stroke="#2D2D2D"
                  stroke-width="2"
                  stroke-linecap="round" /></svg>
              </span>
            </a>
          </li>
          <li className="sidebar_list">
            <a className="d-flex justify-content-between" value="brand"  onClick={() => handleModal("brand")}>
              <span
                className="sidebar_menu_name">
                Brand
              </span>
              <span className="sidebar_menu_icon">
                <svg xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                ><path d="M1 1L7 7L1 13"
                  stroke="#2D2D2D"
                  stroke-width="2"
                  stroke-linecap="round" /></svg>
              </span>
            </a>
          </li>
        </ul>
        {openModal && (
          <>
            <GeneralSidebar onItemClick={handleItemClick} />
            <SettingsMain selectedItem={selectedItem} />
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
