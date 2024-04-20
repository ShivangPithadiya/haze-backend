import React, { useEffect, useState } from "react";
import { setImageTextReducer } from "../../../features/addImageSlice";
import { useDispatch, useSelector } from "react-redux";
import { SketchPicker } from "react-color";

const RightSiderbarText = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [textTitle,setTextTitle]=useState("")
  const [enterTextTitle, setEnterTextTitle] = useState();
  const [ImageText, setImageText] = useState("");
  const [enterText, setEnterText] = useState();
  const [colors, setColors] = useState([]);
const [selectedColor, setSelectedColor] = useState("#808080");
  const [previewColor, setPreviewColor] = useState("#808080");
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleCreateColor = () => {
    setColors((prevColors) => [...prevColors, selectedColor]);
    setPreviewColor("#808080");
    
  };
  
  const handleTitle = (e) => {
    setImageText(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setEnterText(ImageText);
      //   localStorage.setItem(
      //     "selectedData",
      //     JSON.stringify({ ...selectedData, colour:{ colour:title,colourTitle: titleKeyPress, createdColour: colors } })
      //   );
      dispatch(setImageTextReducer({ textTitle:enterTextTitle,  text: ImageText ,textColour:colors}));
    }
  };

  ////////////
  const handleTextTitle = (e) => {
    setTextTitle(e.target.value);
  };
  const handleKeyPressText = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setEnterTextTitle(textTitle)
      dispatch(setImageTextReducer({textTitle:textTitle, text: enterText ,textColour:colors}));
    }
  };
  // ////////
  useEffect(()=>{
    dispatch(setImageTextReducer({textTitle:enterTextTitle, text: enterText ,textColour:colors})); 
  },[colors])

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
                          <SketchPicker
                            color={selectedColor}
                            onChangeComplete={(color) => {
                              setSelectedColor(color.hex);
                              setPreviewColor(color.hex);
                            }}
                            styles={{
                              default: {
                                picker: {
                                  boxShadow: "none",
                                  marginBottom:"10px"
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
       <hr/>
    </div>
  );
};

export default RightSiderbarText;
