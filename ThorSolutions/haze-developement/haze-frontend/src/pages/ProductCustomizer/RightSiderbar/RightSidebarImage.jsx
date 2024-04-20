import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveLayerId,
  setLayerData,
  setImageData,
  setUpdateLayerData,
  setpreview ,
  setColorData,
} from "../../../features/customizeProductSlice";
const RightSidebarImage = () => {
  const addImageData = useSelector((state) => state.title);
  const ActiveLayerId = useSelector(
    (state) => state?.customizeProduct?.activeLayerId
  );
  const ActiveLayerData = useSelector(
    (state) => state?.customizeProduct?.activeLayerData
  );
  const ProductCustomizer = useSelector((state) => state.customizeProduct);
  const dispatch = useDispatch();
  const selectedData = JSON.parse(localStorage.getItem("selectedData")) || {};
  const [title, setTitle] = useState("");
  const [displayTypeOption, setDisplayTypeOption] = useState();
  const [displayTypeModal, setDisplayTypeModal] = useState(false);
  const [rightSidebarColor, setRightSidebarColor] = useState(false);
  const [createColorModal, setCreateColorModal] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedLayer, setSelectedLayer] = useState();
  const [imageName, setImageName] = useState();
  const [selectedOption, setSelectedOption] = useState("");
    const [previewImage, setPreviewImage] = useState("");
const [thumbnailShow,setThumbnailShow]=useState("")
  useEffect(() => {
    setTitle(ProductCustomizer?.activeLayerData?.imageTitle);
    setPreviewImage(ProductCustomizer?.preview);
  }, [selectedLayer]);
useEffect(()=>{},[ProductCustomizer])
  useEffect(() => {
    const foundObject = ProductCustomizer?.layerData?.find(
      (obj) => obj.layerId === ProductCustomizer?.activeLayerId
    );
    setSelectedLayer(foundObject);
  }, [ProductCustomizer]);

  // console.log("ProductCustomizer", ProductCustomizer.preview);


  // <------------------------Image title on enter event ------------------------>
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

  // <----------------- modal for upload Image  and Image change funtion-------------------->
  const UploadImageModal = () => {
    setModalOpen(!isModalOpen);
  };
  const handleTitleImage = (e) => {
    setImageName(e.target.value);
  };
  const handleTitleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const activeLayer = ProductCustomizer?.activeLayerId;
      const updatedData = { imageName: imageName }; 

      dispatch(setUpdateLayerData({ activeLayer, updatedData }));
    }
  };

const handleImageChange = (e) => {
  const selectedImage = e.target.files[0];

  if (selectedImage) {
    const fileExtension = selectedImage.name.split(".").pop().toLowerCase();
    // Check if the file extension is not PNG
    if (fileExtension !== "png") {
      alert("Only PNG images are allowed.");
      return;
    }

    const objectURL = URL.createObjectURL(selectedImage);
    console.log("objectURL", objectURL);
    localStorage.setItem(
      "selectedData",
      JSON.stringify({
        ...selectedData,
        uploadedImage: objectURL,
      })
    );
    const foundObject = ProductCustomizer?.layerData?.find(
      (obj) => obj.layerId === ProductCustomizer?.activeLayerId
    );
    const activeLayer = ProductCustomizer?.activeLayerId;
    const imagesArray = foundObject?.images;

    const id =
      Math.random().toString(36).substr(2, 9) + "_" + Date.now().toString(36);
    const imageData = Array.isArray(imagesArray)
      ? [
          ...imagesArray,
          { id, layerId: activeLayer, imageName: imageName, url: objectURL },
        ]
      : [{ id, layerId: activeLayer, imageName: imageName, url: objectURL }];

    const updatedData = { images: imageData };

    dispatch(setUpdateLayerData({ activeLayer, updatedData }));
    dispatch(setImageData({ imageData: imageData }));
    
  }
};



  // <----------------Input type ---------------------->
  const handleInputType = (event) => {
    setSelectedOption(event.target.value);
    const activeLayer = ProductCustomizer?.activeLayerId;
    const updatedData = { InputType:event.target.value};
    dispatch(setUpdateLayerData({ activeLayer, updatedData }));
    setThumbnailShow(event.target.checked )
  };

  // <----------------Display Type modal and function ---------------------->
  const handleDisplayType = () => {
    setDisplayTypeModal(!displayTypeModal);
  };
  const handleDisplayTypeOption = (e, type) => {
    setDisplayTypeOption(type);
    const activeLayer = ProductCustomizer?.activeLayerId;
    const updatedData = { dispalyType: type, images: null };

      dispatch(setUpdateLayerData({ activeLayer, updatedData }));
  

    handleDisplayType();
  };
const handleTitleBlur = (e) => {
  const activeLayer = ProductCustomizer?.activeLayerId;
  const updatedData = { imageTitle: e.target.value };
  dispatch(setUpdateLayerData({ activeLayer, updatedData }));
};
  // <--------------------Color modal --------------------------->
  const haldleColorPicker = () => {
    setRightSidebarColor(true);
    setCreateColorModal(false);
  };

  const handleCreateColorbar = () => {
    const id =
      Math.random().toString(36).substr(2, 9) + "_" + Date.now().toString(36);
    dispatch(setActiveLayerId(id));
    dispatch(
      setLayerData({
        layerId: id,
        InputType: selectedLayer?.InputType,
        dispalyType: "Colour",
        imageTitle: "Untitled Image",
      })
    );

  };
const handelPreviewImageChange = (e, item) => {
  const index = item.index;
  const selectedImage = e.target.files[0];

  if (selectedImage) {
    const fileExtension = selectedImage.name.split(".").pop().toLowerCase();
    if (fileExtension !== "png") {
      alert("Only PNG images are allowed.");
      return;
    }

    const objectURL = URL.createObjectURL(selectedImage);

    // Retrieve the existing data for the specified index from Redux state
    const existingData = ProductCustomizer.preview.find(
      (view) => view.index === index
    );

    // Update only the image property of the existing data
    const updatedData = {
      ...existingData,
      image: objectURL,
    };

    // Dispatch the action with the updated data merged with the existing data
    dispatch(
      setpreview([
        ...ProductCustomizer.preview.filter((view) => view.index !== index),
        updatedData,
      ])
    );
  }
};

// };
  const handleThumbnailChange = (event) => {
    const activeLayer = ProductCustomizer?.activeLayerId;
    const updatedData = { thumbnailType:event.target.checked };
    dispatch(setUpdateLayerData({ activeLayer, updatedData }));
    setThumbnailShow(event.target.checked )
  };
  const handleLabelChange = (event) => {
    const activeLayer = ProductCustomizer?.activeLayerId;
    const updatedData = { labeType:event.target.checked };
    dispatch(setUpdateLayerData({ activeLayer, updatedData }));
  };
  useEffect(()=>{
    const activeLayer = ProductCustomizer?.activeLayerId;
    const updatedData = { thumbnailType:thumbnailShow};
    dispatch(setUpdateLayerData({ activeLayer, updatedData }));
  },[thumbnailShow])
  
  return (
    <div>
      <>
        <div class="add_theme_inner_container">
          <div class="add_theme_inner_section">
            <div class="add_theme_cont layer_setting">
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
            // defaultValue={untitle}
            value={title}
            onChange={handleTitle}
            onBlur={handleTitleBlur}
            onKeyPress={handleKeyPress}
          />
        </div>
        <hr />
        <div class="file_select_section">
          <span class="file_select_title">Upload Image</span>

          <span class="file_select_icon">
            <button type="button" className="" onClick={UploadImageModal}>
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

        {isModalOpen && (
          <div className="side-modal">
            <div className="modal-dialog" role="document">
              <div className="modal-content px-3">
                <div className="modal-header">
                  <h5 className="modal-title my-2 mx-2">Upload Image</h5>
                  <button
                    type="button"
                    className="close "
                    onClick={UploadImageModal}
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
                  <form id="imageForm">
                    <div class="form_section">
                      <input
                        className="image_title px-2"
                        type="text"
                        placeholder="Untitled Image"
                        onChange={handleTitleImage}
                        onKeyPress={handleTitleKeyPress}
                      />
                    </div>
                    <div class="form_section">
                      <label for="imageInput">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M5.96571 4.89208C5.63086 4.55723 5.63086 4.0144 5.96571 3.67956L9.39429 0.251132C9.72914 -0.0837107 10.272 -0.0837107 10.6069 0.251132L14.0354 3.67956C14.3703 4.0144 14.3703 4.55723 14.0354 4.89208C13.8686 5.05893 13.6491 5.14349 13.4297 5.14349C13.2103 5.14349 12.9909 5.06007 12.824 4.89208L10.8583 2.92645V13.4277C10.8583 13.9008 10.4743 14.2848 10.0011 14.2848C9.528 14.2848 9.144 13.9008 9.144 13.4277V2.92759L7.17829 4.89322C6.84343 5.22806 6.30057 5.22692 5.96571 4.89208ZM19.1429 12.5717C18.6697 12.5717 18.2857 12.9557 18.2857 13.4289V16.8573C18.2857 17.6447 17.6446 18.2858 16.8571 18.2858H3.14286C2.35543 18.2858 1.71429 17.6447 1.71429 16.8573V13.4289C1.71429 12.9557 1.33029 12.5717 0.857143 12.5717C0.384 12.5717 0 12.9557 0 13.4289V16.8573C0 18.5909 1.40914 20 3.14286 20H16.8571C18.5909 20 20 18.5909 20 16.8573V13.4289C20 12.9557 19.616 12.5717 19.1429 12.5717Z"
                            fill="black"
                          />
                        </svg>
                        <spam>Drop image, or browse</spam>
                      </label>
                      <input
                        type="file"
                        id="imageInput"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* map according to ProductCustomizer.preview */}
            {Array.isArray(ProductCustomizer?.preview) &&
              ProductCustomizer?.preview.map((item, index) => (
                <div key={index} className="modal-dialog" role="document">
                  <div className="modal-content px-3">
                    <div className="modal-header">
                      <h5 className="modal-title my-2 mx-2">
                        Upload Preview{item.index}
                      </h5>
                    </div>
                    <div className="modal-body">
                      <form id="imageForm1">
                        <div class="form_section">
                          <input
                            className="image_title px-2"
                            type="text"
                            value={item.title}
                            disabled
                          />
                        </div>
                        <div class="form_section">
                          <label for="imageInput1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                d="M5.96571 4.89208C5.63086 4.55723 5.63086 4.0144 5.96571 3.67956L9.39429 0.251132C9.72914 -0.0837107 10.272 -0.0837107 10.6069 0.251132L14.0354 3.67956C14.3703 4.0144 14.3703 4.55723 14.0354 4.89208C13.8686 5.05893 13.6491 5.14349 13.4297 5.14349C13.2103 5.14349 12.9909 5.06007 12.824 4.89208L10.8583 2.92645V13.4277C10.8583 13.9008 10.4743 14.2848 10.0011 14.2848C9.528 14.2848 9.144 13.9008 9.144 13.4277V2.92759L7.17829 4.89322C6.84343 5.22806 6.30057 5.22692 5.96571 4.89208ZM19.1429 12.5717C18.6697 12.5717 18.2857 12.9557 18.2857 13.4289V16.8573C18.2857 17.6447 17.6446 18.2858 16.8571 18.2858H3.14286C2.35543 18.2858 1.71429 17.6447 1.71429 16.8573V13.4289C1.71429 12.9557 1.33029 12.5717 0.857143 12.5717C0.384 12.5717 0 12.9557 0 13.4289V16.8573C0 18.5909 1.40914 20 3.14286 20H16.8571C18.5909 20 20 18.5909 20 16.8573V13.4289C20 12.9557 19.616 12.5717 19.1429 12.5717Z"
                                fill="black"
                              />
                            </svg>
                            <spam>Drop image, or browse</spam>
                          </label>
                          <input
                            type="file"
                            id="imageInput1"
                            accept="image/*"
                            onChange={(e) =>
                              handelPreviewImageChange(e, item)
                            }
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}

        <hr />
      </>

      {/* <------------- Text Sidebar -------------> */}

      {/* <------------- bottom sectend start from Input Type ---------------> */}
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
        <div class="add_theme_inner_section">
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
                        <span
                          class="creat_modal_add"
                          onClick={haldleColorPicker}
                        >
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

                    <div class="creat_modal_section">
                      <div class="creat_modal_producat">
                        <span class="creat_modal_icon">
                          <img src="assets/Image/modal/img.svg" />
                        </span>
                        <span class="creat_modal_name">
                          {addImageData?.title}
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
          {
            <>
              <div class="add_theme_cont create_layer">
                <span> Create</span>
              </div>
              <div
                class="file_select_section_div"
                onClick={handleCreateColorbar}
              >
                <span class="file_select_title">Create Colour Layer</span>

                <span
                  class="file_select_icon"
                  onClick={() => {
                    setCreateColorModal(!createColorModal);
                  }}
                >
                  <button>
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
            </>
          }
        </div>
      </>
    </div>
  );
};

export default RightSidebarImage;
