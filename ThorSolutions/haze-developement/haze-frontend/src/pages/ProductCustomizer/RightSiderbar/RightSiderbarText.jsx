import React, { useEffect, useState } from "react";
import { setImageTextReducer } from "../../../features/addImageSlice";
import { useDispatch, useSelector } from "react-redux";
import { SketchPicker } from "react-color";
import { setActiveLayerId, setLayerData, setUpdateLayerData } from "../../../features/customizeProductSlice";

const RightSiderbarText = () => {
  const dispatch = useDispatch();
  const ProductCustomizer = useSelector((state) => state.customizeProduct);
  const [displayTypeModal, setDisplayTypeModal] = useState(false);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [textTitle, setTextTitle] = useState("");
  const [enterTextTitle, setEnterTextTitle] = useState();
  const [ImageText, setImageText] = useState("");
  const [enterText, setEnterText] = useState();
  const [colors, setColors] = useState([]);
  const [mainText, setMainText] = useState();
  const [selectedLayer, setSelectedLayer] = useState();
  const [displayTypeOption, setDisplayTypeOption] = useState();

  const [selectedColor, setSelectedColor] = useState("");
  const [previewColor, setPreviewColor] = useState("");
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleDisplayType = () => {
    setDisplayTypeModal(!displayTypeModal);
  };
  useEffect(() => {
    const foundObject = ProductCustomizer?.layerData?.find(
      (obj) => obj.layerId === ProductCustomizer?.activeLayerId
    );
    setSelectedLayer(foundObject);
  }, [ProductCustomizer]);

  useEffect(() => {
    setTitle(ProductCustomizer?.activeLayerData?.imageTitle);
  }, [selectedLayer]);

  const handleCreateText = () => {
    const foundObject = ProductCustomizer?.layerData?.find(
      (obj) => obj.layerId === ProductCustomizer?.activeLayerId
    );
    console.log("foundObject", foundObject);
    const activeLayer = ProductCustomizer?.activeLayerId;
    const textArray = foundObject?.text;
    console.log("textArrat", textArray);

    const id =
      Math.random().toString(36).substr(2, 9) + "_" + Date.now().toString(36);
    const textData = Array.isArray(textArray)
      ? [
          ...textArray,
          {
            id,
            layerId: activeLayer,
            textName: ImageText,
            imageText: mainText,
          },
        ]
      : [
          {
            id,
            layerId: activeLayer,
            textName: ImageText,
            imageText: mainText,
          },
        ];


    const updatedData = { text: textData };
    console.log("updatedData", updatedData);

    dispatch(setUpdateLayerData({ activeLayer, updatedData }));
  };

  const handleTitle = (e) => {
    setImageText(e?.target?.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // e.preventDefault();
      setEnterText(ImageText);
      const activeLayer = ProductCustomizer?.activeLayerId;
      const updatedData = { textName: ImageText }; // Assuming imageName is defined

      dispatch(setUpdateLayerData({ activeLayer, updatedData }));
      //   localStorage.setItem(
      //     "selectedData",
      //     JSON.stringify({ ...selectedData, colour:{ colour:title,colourTitle: titleKeyPress, createdColour: colors } })
      //   );
      // dispatch(setImageTextReducer({ textTitle:enterTextTitle,  text: ImageText ,textColour:colors}));
    }
  };

  ////////////
  const handleTextTitle = (e) => {
    setTextTitle(e.target.value);
  };
  const handleKeyPressText = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setEnterTextTitle(textTitle);
      const activeLayer = ProductCustomizer?.activeLayerId;
      const updatedData = { imageTitle: textTitle };

      dispatch(setUpdateLayerData({ activeLayer, updatedData }));
      // dispatch(setImageTextReducer({textTitle:textTitle, text: enterText ,textColour:colors}));
    }
  };
  // ////////
;

  const handleDisplayTypeOption = (e, type) => {
    setDisplayTypeOption(type);
    const activeLayer = ProductCustomizer?.activeLayerId;
    const updatedData = { dispalyType: type, text: null };

      dispatch(setUpdateLayerData({ activeLayer, updatedData }));
  

    handleDisplayType();
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

const handleColorLayer=()=>{
  const id = Math.random().toString(36).substr(2, 9) + "_" + Date.now().toString(36);
    dispatch(setActiveLayerId(id));
    dispatch(
      setLayerData({
        layerId: id,
        InputType: selectedLayer?.InputType,
        dispalyType: "Text Colour",
        imageTitle: "Untitled Image",
      })
    ); 
}
  return (
    <div>
      <div class="add_theme_inner_container">
        <div class="add_theme_inner_section">
          <div class="add_theme_cont">
            <span>Layers Settings</span>
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
          // defaultValue={addImageData?.title}
          placeholder="Untitled Image"
          onChange={handleTextTitle}
          onKeyPress={handleKeyPressText}
        />
      </div>
      <div class="add_theme_cont">
        <span className=""> Type Text</span>
      </div>
      <div class="file_select_section">
        <span class="file_select_title">Untitled text</span>

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
      {show && (
        <div className="side-modal " style={{ height: "400px" }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content px-3">
              <div className="modal-header">
                <h5 className="modal-title my-2 mx-2">Text</h5>
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
                      onChange={handleTitle}
                      onKeyPress={handleKeyPress}
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
                          <input
                            className="image_title px-2"
                            type="text"
                            placeholder="Untitled Layer"
                            onChange={(e) => setMainText(e?.target?.value)}
                          />
                          <div className="buttonContainer me-3">
                            <button
                              type="button"
                              onClick={handleCreateText}
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
      <hr />
      {/* <------------- bottom sectend start from Input Type ---------------> */}
      <div class="add_theme_input_section">
        <div class="add_theme_cont">
          <span> Input type</span>
        </div>
        <div className="">
          <select
            className="add_theme_inner_container_select"
            // value={selectedLayer?.InputType} // Set default value to "Thumbnail" or the actual InputType
            onChange={(e) => {}}
          >
            <option value="Thumbnail">Thumbnail</option>
            <option value="Text">Text</option>
            <option value="Text">Text</option>
            <option value="Image">Image</option>
            <option value="Radio">Radio</option>
            <option value="Dropdown">Dropdown</option>
          </select>
        </div>

        <div class="switch_button_row">
          <span class="printing_methods_switch_tag">Large thumbnail</span>
          <label class="printing_methods_switch_button">
            <input type="checkbox" onChange={handleThumbnailChange} />
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
            <input type="checkbox" onChange={handleLabelChange} />
            <span class="printing_methods_switch_slider printing_methods_switch_round"></span>
          </label>
        </div>
      </div>
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
      <div class="add_theme_cont create_layer">
        <span> Create</span>
      </div>
      <div className="mt-3">
        <div className="d-flex justify-content-between" onClick={handleColorLayer}>
          <img
            src="assets/Image/modal/text.svg"
            style={{ width: "20px", height: "20px" }}
          />
          <p className="w-75 ">Color Layer</p>
         
            <svg
              width="20"
              height="20"
              fill="none"
            >
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
        </div>
        <div className="d-flex justify-content-between">
          <img
            src="assets/Image/modal/text.svg"
            style={{ width: "20px", height: "20px" }}
          />
          <p className="w-75 ">Font Layer</p>
         
            <svg
              width="20"
              height="20"
              fill="none"
            >
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
            </div>
            <div className="d-flex justify-content-between">
          <img
            src="assets/Image/modal/text.svg"
            style={{ width: "20px", height: "20px" }}
          />
          <p className="w-75 ">Font Size Layer</p>
         
            <svg
              width="20"
              height="20"
              fill="none"
            >
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
        </div>
        <div className="d-flex justify-content-between">
          <img
            src="assets/Image/modal/text.svg"
            style={{ width: "20px", height: "20px" }}
          />
          <p className="w-75 ">Outline Layer</p>
         
            <svg
              width="20"
              height="20"
              fill="none"
            >
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
        </div>
       
      </div>
    </div>
  );
};

export default RightSiderbarText;
