import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ColorPicker from "./ColorPiker";
import { SketchPicker } from "react-color";
import "./RightSidebar.css";
import {
  setActiveLayerId,
  setImageColorData,
  setLayerData,
  setimageToColorData,
  resetImageToColorData,
  setColorData,
  setUpdateLayerData,
} from "../../../features/customizeProductSlice";
const RightSidebarColor = () => {
  const dispatch = useDispatch();
  const colorRed = useSelector((state) => state?.title);
  const selectedData = JSON.parse(localStorage.getItem("selectedData")) || {};
  const ProductCustomizer = useSelector((state) => state.customizeProduct);
  const [colors, setColors] = useState([]);
  const [previewColor, setPreviewColor] = useState("#808080");
  const [titleKeyPress, setTitleKeypress] = useState("");
  const [title, setTitle] = useState("");
  const [enterTitle, setEnterTitle] = useState("");
  const [displayTypeModal, setDisplayTypeModal] = useState(false);
  const [displayTypeOption, setDisplayTypeOption] = useState();
  const [rightSidebarColor, setRightSidebarColor] = useState(false);
  const [createColorModal, setCreateColorModal] = useState(false);
  const [selectedLayer, setSelectedLayer] = useState();
  const [colorShow, setColorShow] = useState("#808080");
  const [applyColor, setApplyColor] = useState([]);
  const [megedData, setMergedData] = useState([]);
  const [createColorLayer, setCreateColorLayer] = useState();
  const [selectedOption, setSelectedOption] = useState("");
  const [thumbnailShow, setThumbnailShow] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const ActiveLayerData = useSelector(
    (state) => state?.customizeProduct?.activeLayerData
  );
  const[previousLayerId, setPreviousLayerId]=useState(null);

  const [idCounter, setIdCounter] = useState(0);
  const uploadedImage = selectedData.uploadedImage;
 const layerData = useSelector((state) => state.customizeProduct.layerData);

  useEffect(() => {
    // Initialize selectedColor state only on component mount
    setSelectedColor("#808080");
  }, []);
  useEffect(() => {
    setTitle(ProductCustomizer?.activeLayerData?.imageTitle);
  }, [selectedLayer]);

  useEffect(() => {
    const foundObject = ProductCustomizer?.layerData?.find(
      (obj) => obj.layerId === ProductCustomizer?.activeLayerId
    );
    setSelectedLayer(foundObject);
  }, [ProductCustomizer]);
  const [show, setShow] = useState(false);

useEffect(() => {
  const foundObject = ProductCustomizer?.layerData?.filter(
    (obj) => obj.dispalyType === "Image"
  );
  const foundColObject = ProductCustomizer?.layerData?.filter(
    (obj) => obj.dispalyType === "Colour"
  );

  const mergedObject = foundObject.map((item, index) => {
    if (foundColObject[index] && foundColObject[index].colours) {
      return { ...item, colours: foundColObject[index].colours };
    } else {
      return item;
    }
  });

  setMergedData(mergedObject);
  setApplyColor(mergedObject);
}, [ProductCustomizer]);
   if (layerData.length === 0) {
      // Reset imageToColorData if layerData is empty
      dispatch(resetImageToColorData());
    } else {
      // Otherwise, update imageToColorData with mergedData
     dispatch(setimageToColorData(megedData));
    }


  useEffect(() => {}, []);
  const handleCreateColor = () => {
    setColors((prevColors) => [...prevColors, selectedColor]);
    setPreviewColor("#808080");
  };
useEffect(() => {
 
  if (layerData.length > 1) {
    
    const lastIndex = layerData.length;
    
   
    const previousLayerId = layerData[lastIndex - 2].layerId;
    console.log("Previous Layer ID:", previousLayerId);
    setPreviousLayerId(previousLayerId);
  } else {
   
    const previousLayerId = null; 
    console.log("Previous Layer ID:", previousLayerId);
  }
}, [layerData]);


  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
    setColorShow(color.hex);
  };
  const handleTitleKeyPress = (e) => {
    setTitleKeypress(e.target.value);
  };
  const handleCreateColorLayer = (e, el) => {
    createImageColorLayer(e, el);
  };
  useEffect(() => {
    if (colors && selectedColor !== "") {
      const activeLayer = ProductCustomizer?.activeLayerId;
      const foundObject = ProductCustomizer?.layerData?.find(
        (obj) => obj.layerId === activeLayer
      );

      const colourArray = foundObject?.colours || [];

      // Retrieve existing colors from local storage
      const storedColours = localStorage.getItem("colorData");
      const existingColours = storedColours ? JSON.parse(storedColours) : [];

      // Find the existing color object for the active layer
      const existingColorObject = existingColours.find(
        (colorObj) => colorObj.layerId === activeLayer
      );


      // Create a new color object
      const newColorObject = {
        id: previousLayerId,
        layerId: activeLayer,
        colorName: titleKeyPress,
        color: selectedColor,
      };

      // Check if there is an existing color object for the active layer
      if (existingColorObject) {
        // If yes, merge the new color with the existing colors array
        const updatedColors = [...existingColorObject.colors, selectedColor];
        existingColorObject.colors = updatedColors;
        newColorObject.index = updatedColors.length - 1; // Set the index property to the last index
      } else {
        // If no, create a new color object with index 0
        existingColours.push({
          id: previousLayerId,
          layerId: activeLayer,
          colorName: "",
          colors: [selectedColor],
        });
        newColorObject.index = 0; // Set the index of the new color object to 0
      }

      // Update local storage with the modified colors
      localStorage.setItem("colorData", JSON.stringify(existingColours));

      // Dispatch the updated color data
      dispatch(setColorData({ colours: existingColours }));

      // Merge the new color object with the existing layer data
      const updatedColourArray = Array.isArray(colourArray)
        ? [...colourArray, newColorObject]
        : [newColorObject];
      const updatedData = { colours: updatedColourArray };
      dispatch(setUpdateLayerData({ activeLayer, updatedData }));
      setIdCounter(idCounter + 1);
    }
  }, [colors]);

  const haldleColorPicker = () => {
    setRightSidebarColor(true);
    setCreateColorModal(false);
    const data = JSON.parse(localStorage.getItem("selectedData")) || {};
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {}, []);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const activeLayer = ProductCustomizer?.activeLayerId;
      const updatedData = { imageTitle: title };

      dispatch(setUpdateLayerData({ activeLayer, updatedData }));
    }
  };

  const handleDisplayType = () => {
    setDisplayTypeModal(!displayTypeModal);
  };
  const handleDisplayTypeOption = (e, type) => {
    setDisplayTypeOption(type);
    const activeLayer = ProductCustomizer?.activeLayerId;
    const updatedData = { dispalyType: type, colours: null };

    dispatch(setUpdateLayerData({ activeLayer, updatedData }));

    handleDisplayType();
  };
  const createImageColorLayer = (e, item) => {
    setCreateColorLayer(item);
    setCreateColorModal(false);
    dispatch(setImageColorData(item));
  };

  const handleImageLayer = () => {
    const id =
      Math.random().toString(36).substr(2, 9) + "_" + Date.now().toString(36);
    dispatch(setActiveLayerId(id));
    dispatch(
      setLayerData({
        layerId: id,
        InputType: selectedLayer?.InputType,
        dispalyType: "Image",
        imageTitle: "Untitled Image",
      })
    );
  };
  const handleThumbnailChange = (event) => {
    const activeLayer = ProductCustomizer?.activeLayerId;
    const updatedData = { thumbnailType: event.target.checked };
    dispatch(setUpdateLayerData({ activeLayer, updatedData }));
  };
  const handleLabelChange = (event) => {
    const activeLayer = ProductCustomizer?.activeLayerId;
    const updatedData = { labeType: event.target.checked };
    dispatch(setUpdateLayerData({ activeLayer, updatedData }));
  };

  // <----------------Input type ---------------------->
  const handleInputType = (event) => {
    setSelectedOption(event.target.value);
    const activeLayer = ProductCustomizer?.activeLayerId;
    const updatedData = { InputType: event.target.value };
    dispatch(setUpdateLayerData({ activeLayer, updatedData }));
    setThumbnailShow(event.target.checked);
  };

  return (
    <>
      <div class="add_theme_inner_container">
        <div class="add_theme_inner_section">
          <div class="add_theme_cont layer_setting">
            <span>Layer Settings</span>
          </div>
        </div>
        <hr />

        <div class="add_theme_cont">
          <span>Title</span>
        </div>
        <input
          type="text"
          id="lname"
          name="lname"
          value={title}
          placeholder="Text Color"
          onChange={handleTitle}
          onKeyPress={handleKeyPress}
        />
        <hr />
        <div class="file_select_section">
          <div
            className="color-show h-100"
            style={{
              backgroundColor: colorShow,
              borderRadius: "5px",
              width: "21px",
              height: "100%",
            }}
          ></div>
          <span class="file_select_title">Untitled Color</span>
          <span class="file_select_icon">
            <button type="button" className="" onClick={handleShow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="19"
                  height="19"
                  rx="2.5"
                  stroke="#9C9C9C"
                />
                <path
                  d="M10 5.83325L10 14.1666"
                  stroke="#2D2D2D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M14.166 10H5.83268"
                  stroke="#2D2D2D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </span>
        </div>
      </div>
      <hr />
      {show && (
        <div className="side-modal " style={{ height: "400px" }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content px-3">
              <div className="modal-header">
                <h5 className="modal-title my-2 mx-2">Select Colour</h5>
                <button
                  type="button"
                  className="close "
                  onClick={handleClose}
                  aria-label="Close"
                  style={{
                    border: "none",
                    background: "white",
                    fontSize: "30px",
                    color: "gray",
                  }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form class="imageForm">
                  <div class="form_section">
                    <input
                      className="image_title px-2"
                      type="text"
                      placeholder="Untitled Layer"
                      onChange={handleTitleKeyPress}
                    />
                  </div>
                  <div class="form_section">
                    <div>
                      <div>
                        <div
                          style={{
                            marginBottom: "10px",
                            boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                            borderRadius: "5px",
                          }}
                        >
                          <SketchPicker
                            color={selectedColor}
                            onChangeComplete={handleColorChange}
                            // onChangeComplete={(color) => {
                            //   setSelectedColor(color.hex);
                            //   setPreviewColor(color.hex);
                            // }}
                            styles={{
                              default: {
                                picker: {
                                  boxShadow: "none",
                                  marginBottom: "10px",
                                },
                              },
                            }}
                          />
                          <div className="buttonContainer me-3">
                            <button
                              type="button"
                              onClick={handleCreateColor}
                              className="btn btn-primary"
                            >
                              OK
                            </button>
                            <button
                              type="button"
                              onClick={handleClose}
                              className="btn btn-outline-dark"
                            >
                              Cancle
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      <div class="add_theme_input_section">
        <div class="add_theme_cont">
          <span> Input type</span>
        </div>
        <div className="">
          <select
            className="add_theme_inner_container_select"
            value={selectedLayer?.InputType} // Set default value to "Thumbnail" or the actual InputType
            onChange={(e) => handleInputType(e)}
          >
            <option value="Thumbnail">Thumbnail</option>
            <option value="Dropdown">Dropdown</option>
            <option value="Radio">Radio Button</option>
            <option value="Label">Label</option>
            <option value="Checkbox">Checkbox</option>
          </select>
        </div>

        <div class="switch_button_row">
          <span class="printing_methods_switch_tag">Large thumbnail</span>
          <label class="printing_methods_switch_button">
            <input
              type="checkbox"
              checked={ActiveLayerData?.thumbnailType}
              onChange={handleThumbnailChange}
            />
            <span class="printing_methods_switch_slider printing_methods_switch_round"></span>
          </label>
        </div>

        <div id="myModal" class="modal">
          <p>This is your modal content.</p>
          <button onclick="closeModal()">Close Modal</button>
        </div>

        <div class="switch_button_row">
          <span class="printing_methods_switch_tag">Show name label</span>
          <label class="printing_methods_switch_button">
            <input
              type="checkbox"
              checked={ActiveLayerData?.labeType}
              onChange={handleLabelChange}
            />
            <span class="printing_methods_switch_slider printing_methods_switch_round"></span>
          </label>
        </div>
      </div>
      {/* ///////////////// */}
      <hr />
      <div class="add_theme_input_section">
        <div class="add_theme_cont">
          <span className=""> Display type</span>
        </div>
        {displayTypeModal && (
          <div class="mmodal mmodalDisplayType">
            <form id="imageForm">
              <ul class="dispaly_modal_menu">
                <li
                  class="dispaly_modal_list"
                  onClick={(e) => handleDisplayTypeOption(e, "None")}
                >
                  <span class="add_modal_icon">
                    <img src="assets/Image/Design.png" />
                  </span>
                  <span class="add_modal_name">None</span>
                </li>

                <li
                  class="dispaly_modal_list"
                  onClick={(e) => handleDisplayTypeOption(e, "Image")}
                >
                  <span class="add_modal_icon">
                    <img src="assets/Image/modal/img.svg" />
                  </span>
                  <span class="add_modal_name">Image</span>
                </li>

                <li
                  class="dispaly_modal_list"
                  onClick={(e) => handleDisplayTypeOption(e, "Colour")}
                >
                  <span class="add_modal_icon">
                    <img src="assets/Image/modal/colour.svg" />
                  </span>
                  <span class="add_modal_name">Colour</span>
                </li>

                <li
                  class="dispaly_modal_list"
                  onClick={(e) => handleDisplayTypeOption(e, "Logo")}
                >
                  <span class="add_modal_icon">
                    <img src="assets/Image/modal/logo_svg.svg" />
                  </span>
                  <span class="add_modal_name">Logo</span>
                </li>
                <li
                  class="dispaly_modal_list"
                  onClick={(e) => handleDisplayTypeOption(e, "Text")}
                >
                  <span class="add_modal_icon">
                    <img src="assets/Image/modal/text.svg" />
                  </span>
                  <span class="add_modal_name">Text</span>
                </li>

                <li
                  class="dispaly_modal_list"
                  onClick={(e) => handleDisplayTypeOption(e, "Font")}
                >
                  <span class="add_modal_icon">
                    <img src="assets/Image/modal/font.svg" />
                  </span>
                  <span class="add_modal_name">Font</span>
                </li>

                <li
                  class="dispaly_modal_list"
                  onClick={(e) => handleDisplayTypeOption(e, "Font Colour")}
                >
                  <span class="add_modal_icon">
                    <img src="assets/Image/modal/font_cl.svg" />
                  </span>
                  <span class="add_modal_name">Font Colour</span>
                </li>
              </ul>
            </form>
          </div>
        )}

        <div class="file_select_section_div">
          <span class="file_select_title">{selectedLayer?.dispalyType}</span>
          <span class="file_select_icon">
            <button onClick={handleDisplayType}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="19"
                  height="19"
                  rx="2.5"
                  stroke="#9C9C9C"
                />
                <path
                  d="M10 5.83325L10 14.1666"
                  stroke="#2D2D2D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M14.166 10H5.83268"
                  stroke="#2D2D2D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </span>
        </div>
      </div>
      <hr />
      <>
        {createColorModal && (
          <div className="side-modal-div " style={{ height: "300px" }}>
            <div className="modal-dialog" role="document">
              <div className="modal-content px-3">
                <form id="imageForm" className="form_image">
                  <div class="creat_modal_section">
                    <div class="creat_modal_section_row creat_div">
                      <span class="creat_modal_icon">
                        <img src="assets/Image/modal/colour.svg" />
                      </span>
                      <span
                        class="creat_modal_title"
                        onClick={haldleColorPicker}
                      >
                        Create new colour layer
                      </span>
                      <span class="creat_modal_add" onClick={haldleColorPicker}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="11"
                          height="11"
                          viewBox="0 0 11 11"
                          fill="none"
                        >
                          <path
                            d="M5.16797 1L5.16797 9.33333"
                            stroke="#2D2D2D"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            d="M9.33398 5.16675L1.00065 5.16675"
                            stroke="#2D2D2D"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div class="creat_modal_section">
                    <span>or</span>
                  </div>

                  <div class="add_theme_cont add_theme_cont_div">
                    <span> Select existing layer</span>
                    <input
                      type="search"
                      id="search"
                      name="search"
                      value="Search layers"
                    />
                  </div>
                  <div className="d-flex flex-column">
                    {applyColor?.map((el) => (
                      <div
                        class="creat_modal_producat "
                        key={el?.layerId}
                        onClick={(e) => handleCreateColorLayer(e, el)}
                      >
                        <span class="creat_modal_icon">
                          <img src="assets/Image/modal/img.svg" />
                        </span>
                        <span class="creat_modal_name">
                          <div>{el.imageTitle}</div>
                        </span>
                      </div>
                    ))}
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
        <div class="add_theme_cont create_layer">
          <span> Create</span>
        </div>
        <div class="file_select_section_div">
          <span class="file_select_title">Create Colour Layers</span>
        </div>

        <div class="creat_layer_inner_section mt-3">
          <div class="creat_layer_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
            >
              <path
                d="M1.5 1C1.5 0.723858 1.27614 0.5 1 0.5C0.723858 0.5 0.5 0.723858 0.5 1H1.5ZM18.3536 13.8536C18.5488 13.6583 18.5488 13.3417 18.3536 13.1464L15.1716 9.96447C14.9763 9.7692 14.6597 9.7692 14.4645 9.96447C14.2692 10.1597 14.2692 10.4763 14.4645 10.6716L17.2929 13.5L14.4645 16.3284C14.2692 16.5237 14.2692 16.8403 14.4645 17.0355C14.6597 17.2308 14.9763 17.2308 15.1716 17.0355L18.3536 13.8536ZM0.5 1V8.5H1.5V1H0.5ZM6 14H18V13H6V14ZM0.5 8.5C0.5 11.5376 2.96243 14 6 14V13C3.51472 13 1.5 10.9853 1.5 8.5H0.5Z"
                fill="#2D2D2D"
              />
            </svg>
            Apply on
          </div>
          {applyColor.length == 0 ? (
            <button class="creat_layer_inner_btn" onClick={handleImageLayer}>
              <div class="creat_modal_producat">
                <span class="creat_modal_icon">
                  <img src={uploadedImage} width={17} />
                </span>
                <span class="creat_modal_name">Image Layer</span>
              </div>
            </button>
          ) : (
            <button
              class="creat_layer_inner_btn"
              onClick={() => {
                setCreateColorModal(!createColorModal);
              }}
            >
              <div class="creat_modal_producat">
                <span class="creat_modal_icon">
                  <img src={uploadedImage}  width={17} />
                </span>
                <span class="creat_modal_name">
                  {createColorLayer
                    ? createColorLayer?.imageTitle
                    : "Image Layer"}
                </span>
              </div>
            </button>
          )}
        </div>
      </>
    </>
  );
};

export default RightSidebarColor;
