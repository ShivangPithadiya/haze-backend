import React from "react";
import "../themebuilder/ThemeBuilder.css";
import RightSidebars from "./RightSidebars";

const RightSidebar = ({ visibleItem }) => {
  return (
    <>
      <div className="right_wrapper">
        {visibleItem === "Customizer_Title_list" && (
          <div className="right_wrapper_conntaine" id="Customizer_Title_list">
            <RightSidebars.CustomizerTitle />
          </div>
        )}
        {visibleItem === "Layers_Panel_list" && (
          <div className="right_wrapper_conntaine" id="Layers_Panel_list">
            <RightSidebars.LayerPanelList />
          </div>
        )}
        {visibleItem === "Layers_list" && (
          <div className="right_wrapper_conntaine" id="Layers_list">
            <RightSidebars.LayersList />
          </div>
        )}
        {visibleItem === "Layer_Settings_list" && (
          <div className="right_wrapper_conntaine" id="Layer_Settings_list">
            <RightSidebars.LayersSettingsList />
          </div>
        )}
        {visibleItem === "Thumbnails_Button_list" && (
          <div className="right_wrapper_conntaine" id="Thumbnails_Button_list">
            <RightSidebars.ThumbnailsButtonList />
          </div>
        )}
        {visibleItem === "Text_Inpu_Dropdown_list" && (
          <div className="right_wrapper_conntaine" id="Text_Inpu_Dropdown_list">
            <RightSidebars.InputTextDrpDown />
          </div>
        )}
        {visibleItem === "File_Upload_list" && (
          <div className="right_wrapper_conntaine" id="File_Upload_list">
            <RightSidebars.FileUpload />
          </div>
        )}
        {visibleItem === "Print_Ready_list" && (
          <div className="right_wrapper_conntaine" id="Print_Ready_list">
            <RightSidebars.PrintReady />
          </div>
        )}
        {visibleItem === "Customizer_list" && (
          <div className="right_wrapper_conntaine" id="Customizer_list">
            <RightSidebars.Customizer />
          </div>
        )}
        {visibleItem === "Step_Title_list" && (
          <div className="right_wrapper_conntaine" id="Step_Title_list">
            <RightSidebars.StepTitle />
          </div>
        )}
        {visibleItem === "Summary_Title_list" && (
          <div className="right_wrapper_conntaine" id="Summary_Title_list">
            <RightSidebars.SummaryTitle />
          </div>
        )}
        {visibleItem === "Cart_button_list" && (
          <div className="right_wrapper_conntaine" id="Cart_button_list">
            <RightSidebars.AddToCart />
          </div>
        )}
        {visibleItem === "Confirm_Button_list" && (
          <div className="right_wrapper_conntaine" id="Confirm_Button_list">
            <RightSidebars.ConfirmButton />
          </div>
        )}
        {visibleItem === "Price_list" && (
          <div className="right_wrapper_conntaine" id="Price_list">
            <RightSidebars.Price />
          </div>
        )}
        {visibleItem === "Switch_View_Arrows_list" && (
          <div className="right_wrapper_conntaine" id="Switch_View_Arrows_list">
            <RightSidebars.SwitchViewArrows />
          </div>
        )}
        {visibleItem === "Switch_View_Dots_list" && (
          <div className="right_wrapper_conntaine" id="Switch_View_Dots_list">
            <RightSidebars.SwitchViewDots />
          </div>
        )}
        {visibleItem === "Zoom_list" && (
          <div className="right_wrapper_conntaine" id="Zoom_list">
            <RightSidebars.Zoom />
          </div>
        )}
        {visibleItem === "Share_Button_list" && (
          <div className="right_wrapper_conntaine" id="Share_Button_list">
            <RightSidebars.ShareButton />
          </div>
        )}
        {visibleItem === "Description_mobile" && (
          <div className="right_wrapper_conntaine" id="Description_mobile">
            <RightSidebars.DescriptionMobile />
          </div>
        )}
        {visibleItem === "Out_of_Stock_list" && (
          <div className="right_wrapper_conntaine" id="Out_of_Stock_list">
            <RightSidebars.OutOfStock />
          </div>
        )}
      </div>
    </>
  );
};

export default RightSidebar;
