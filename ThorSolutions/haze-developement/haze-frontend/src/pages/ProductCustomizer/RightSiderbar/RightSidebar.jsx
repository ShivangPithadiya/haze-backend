import React, { useEffect, useState } from "react";
import {
  setColourReducer,
  setEnterTitleDis,
  setImageTitle,
  setProductDataInput,
  setUploadedImage,
} from "../../../features/addImageSlice";
import { useDispatch, useSelector } from "react-redux";
import "../RightSiderbar/RightSidebar.css";
import RightSidebarImage from "./RightSidebarImage";
import RightSidebarColor from "./RightSidebarColor";
import RightSiderbarText from "./RightSiderbarText";
import RightSidebarTextColor from "./RightSidebarTextColor";

const RightSidebar = () => {
  const dispatch = useDispatch();
  const ProductCustomizer = useSelector((state) => state.customizeProduct);
  const ProductActiveId = useSelector(
    (state) => state.customizeProduct?.activeLayerId
  );

 
  const [ProductDataInput, setProductDataInput] = useState(ProductActiveId);//[ProductDataInput, setProductDataInput] = useState({});

  const [selectedInputType, setSelectedInputType] = useState();
  const [selectedDispalyType, setSelectedDispalyType] = useState();

  useEffect(() => {
    const foundObject = ProductCustomizer?.layerData?.find(
      (obj) => obj.layerId === ProductCustomizer?.activeLayerId
    );
    setSelectedDispalyType(foundObject?.dispalyType);
    setSelectedInputType(foundObject?.InputType);
  }, [ProductActiveId, ProductCustomizer?.activeLayerData]);


  return (
    <div class="right_wrapper ">
      {!ProductCustomizer.activeLayerId && (
        <div class="add_theme_inner_container">
          <div class="add_theme_inner_section">
            <div class="add_theme_cont">
              <span>Layers Settings</span>
              <p>
                You can manage your layers settings in this panel once you
                create your first layer
              </p>
            </div>
          </div>
        </div>
      )}
      {selectedDispalyType === "Image" && <RightSidebarImage />}
      {selectedDispalyType === "Colour" && (
        <RightSidebarColor  />
      )}
      {selectedDispalyType === "Text" && <RightSiderbarText />}
      {selectedDispalyType === "Text Colour" && <RightSidebarTextColor />}
    </div>
  );
};

export default RightSidebar;
