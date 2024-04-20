import React, { useState } from "react";
import { useSelector } from "react-redux"; // Importing useSelector
import GeneralSidebar from "../../pages/SettingsPages/GeneralSidebar";
import BusinessDetails from "../../pages/SettingsPages/BusinessDetails";
import BrandSidebar from "../../pages/SettingsPages/BrandSidebar";
const SettingsMain = () => {
  const settingsTab = useSelector((state) => state.settingsTab.tabName); // Accessing settingsTab from Redux store

  return (
    <div className="container-fluid">
      {(settingsTab=="general") && (
        <GeneralSidebar />
      )}
      {(settingsTab == "business-details") && (
        <BusinessDetails />
      )}
    
      {(settingsTab == "brand") && (
        <BrandSidebar />
      )}

    </div>
  );
};

export default SettingsMain;
