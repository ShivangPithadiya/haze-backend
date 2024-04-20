import React, { useEffect, useState } from "react";
import {
  setColourReducer,
  setEnterTitleDis,
  setImageTitle,
  setProductDataInput,
  setUploadedImage,
} from "../../../features/addImageSlice";
import { useDispatch, useSelector } from "react-redux";
import RightSidebarColor from "./RightSidebarColor";
import RightSiderbarText from "./RightSiderbarText";

const RightSidebar = () => {
  const dispatch = useDispatch();
  const addImageData = useSelector((state) => state.title);
  const selectedData = JSON.parse(localStorage.getItem("selectedData")) || {};
  const [title, setTitle] = useState("");
  const [enterTitle, setEnterTitle] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [displayTypeOption, setDisplayTypeOption] = useState();
  const [displayTypeModal, setDisplayTypeModal] = useState(false);
  const [rightSidebarColor, setRightSidebarColor] = useState(false);
  const [createColorModal, setCreateColorModal] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    imageTitle: "",
    selectedImage: null,
  });
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("selectedData")) || {};
    console.log("imahe", data?.uploadedImage);
    dispatch(setEnterTitleDis(data?.title));
    dispatch(setImageTitle(data?.imageTitle));
    dispatch(setUploadedImage(data?.uploadedImage));
  }, [enterTitle, dispatch]);

  // <------------------want to dispatch the data which is store in the local storage after refreshment------------------>
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("selectedData")) || {};
    // Check if the storedData.colour is an object and has the required properties
    if (storedData.colour && typeof storedData.colour === "object") {
      const { colour, colourTitle, createdColour, previewColor } =
        storedData.colour;
      dispatch(
        setColourReducer({
          colour: colour || "",
          colourTitle: colourTitle || "",
          createdColour: createdColour || [],
          previewColor: previewColor || "",
        })
      );
    }
  }, [dispatch]);

  // <------------------------Image title on enter event ------------------------>
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setEnterTitle(title);
      localStorage.setItem(
        "selectedData",
        JSON.stringify({ ...selectedData, title: title })
      );
    }
  };

  // <----------------- modal for upload Image  and Image change funtion-------------------->
  const UploadImageModal = () => {
    setModalOpen(!isModalOpen);
  };

  const handleTitleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const enteredTitle = e.target.value;
      localStorage.setItem(
        "selectedData",
        JSON.stringify({ ...selectedData, imageTitle: enteredTitle })
      );
      dispatch(setImageTitle(enteredTitle));
    }
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    if (selectedImage) {
      setFormData({
        ...formData,
        selectedImage,
      });
      const objectURL = URL.createObjectURL(selectedImage);
      localStorage.setItem(
        "selectedData",
        JSON.stringify({
          ...selectedData,
          uploadedImage: objectURL,
        })
      );
      dispatch(setUploadedImage(objectURL));
    }
  };

  // <----------------Input type ---------------------->
  const handleInputType = (event) => {
    setSelectedOption(event.target.value);
  };
  // <----------------Display Type modal and function ---------------------->
  const handleDisplayType = () => {
    setDisplayTypeModal(!displayTypeModal);
  };
  const handleDisplayTypeOption = (e, type) => {
    setDisplayTypeOption(type);
    if (type !== "Color") {
      setRightSidebarColor(false);
    }
    const data = JSON.parse(localStorage.getItem("selectedData")) || {};
    dispatch(
      setProductDataInput({
        InputType: data?.productDataInput?.InputType,
        displayType: type,
      })
    );
    handleDisplayType();
  };

  useEffect(() => {
    setDisplayTypeOption(addImageData?.productDataInput?.displayType || "");
  }, [addImageData?.productDataInput?.displayType]);

  // <--------------------Color modal --------------------------->
  const haldleColorPicker = () => {
    setRightSidebarColor(true);
    setCreateColorModal(false);
    const data = JSON.parse(localStorage.getItem("selectedData")) || {};
    dispatch(
      setProductDataInput({
        InputType: data?.productDataInput?.InputType,
        displayType: "Color",
      })
    );
  };

  return (
    <div class="right_wrapper ">
      {addImageData?.productDataInput?.displayType ? (
        <>
          {/* <-------------ColorSidebar ------------------> */}
          {(addImageData?.productDataInput?.displayType == "Colour" ||
            rightSidebarColor) && <RightSidebarColor></RightSidebarColor>}

          {/* <------------- Image Sidebar ------------->*/}
          {addImageData?.productDataInput?.displayType == "Image" && (
            <>
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
                  defaultValue={addImageData?.title}
                  placeholder="Untitled Image"
                  onChange={handleTitle}
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
                </div>
              )}
              <hr />
            </>
          )}
          {/* <------------- Text Sidebar -------------> */}
          {addImageData?.productDataInput?.displayType == "Text" && (
            <RightSiderbarText />
          )}
          {/* <------------- bottom sectend start from Input Type ---------------> */}
          <div class="add_theme_input_section">
            <div class="add_theme_cont">
              <span> Input type</span>
            </div>
            <div className="">
              <select
                className="add_theme_inner_container_select"
                onChange={handleInputType}
              >
                <option
                  value="Thumbnail"
                  selected={
                    addImageData?.productDataInput?.InputType == "Thumbnail"
                      ? true
                      : false
                  }
                >
                  Thumbnail
                </option>
                <option
                  value="Text"
                  selected={
                    addImageData?.productDataInput?.InputType == "Text"
                      ? true
                      : false
                  }
                >
                  Text
                </option>
                <option
                  value="Image"
                  selected={
                    addImageData?.productDataInput?.InputType == "Image"
                      ? true
                      : false
                  }
                >
                  Image
                </option>
                <option
                  value="Radio"
                  selected={
                    addImageData?.productDataInput?.InputType == "Radio"
                      ? true
                      : false
                  }
                >
                  Radio
                </option>
                <option
                  value="Checkbox"
                  selected={
                    addImageData?.productDataInput?.InputType == "Checkbox"
                      ? true
                      : false
                  }
                >
                  Checkbox
                </option>
              </select>
            </div>

            <div class="switch_button_row">
              <div>
                <span class="printing_methods_switch_tag">Large thumbnail</span>
              </div>
              <div className="printing__methods__check__btns">
                <label class="printing_methods_switch_button">
                  <input type="checkbox" />
                  <span class="printing_methods_switch_slider printing_methods_switch_round"></span>
                </label>
              </div>
            </div>

            <div id="myModal" class="modal">
              <p>This is your modal content.</p>
              <button onclick="closeModal()">Close Modal</button>
            </div>

            <div class="switch_button_row">
              <span class="printing_methods_switch_tag">Show name label</span>
              <label class="printing_methods_switch_button">
                <input type="checkbox" />
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
              <span class="file_select_title">
                {displayTypeOption && displayTypeOption}
              </span>
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
              {addImageData.productDataInput?.displayType == "Image" && (
                <>
                  <div class="add_theme_input_section create_layer">
                    <span> Create</span>
                  </div>
                  <div class="file_select_section_div">
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

                  <div class="creat_layer_inner_section">
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
                    <button class="creat_layer_inner_btn">
                      <div class="creat_modal_producat">
                        <span class="creat_modal_icon">
                          <img src="../Image/them/UntitledImage.svg" />
                        </span>
                        <span class="creat_modal_name">
                          {addImageData?.title}
                        </span>
                      </div>
                    </button>
                  </div>
                </>
              )}
            </div>
          </>
        </>
      ) : (
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
    </div>
  );
};

export default RightSidebar;
