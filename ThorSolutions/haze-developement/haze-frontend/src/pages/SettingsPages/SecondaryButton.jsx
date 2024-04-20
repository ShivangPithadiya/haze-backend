import React, { useEffect, useState } from 'react'
import { SketchPicker } from "react-color";

function SecondaryButtons() {
    const [colorShow, setColorShow] = useState("#808080");
    const [secondarycolorShow, setSecondarycolorShow] = useState("#2D2D2D");
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedSecColor, setSelectedSecColor] = useState("");
    const [colors, setColors] = useState([]);
    const [previewColor, setPreviewColor] = useState("#808080");

    const [show, setShow] = useState(false);
    const [showSec, setShowSec] = useState(false);
    const [titleKeyPress, setTitleKeypress] = useState("");
    const [titleKeyPressSec, setTitleKeypressSec] = useState("");

    const handleShow = () => setShow(true);
    const handleShowSec = () => setShowSec(true);
    const handleClose = () => setShow(false);
    const handleCloseSec = () => setShowSec(false);

    useEffect(() => { }, []);
    const handleCreateColor = () => {
        setColors((prevColors) => [...prevColors, selectedColor]);
        setPreviewColor("#808080");
    };
    const handleCreateSecColor = () => {
        setColors((prevColors) => [...prevColors, selectedSecColor]);
        setPreviewColor("#2D2D2D");
    };

    const handleColorChange = (color) => {
        setSelectedColor(color.hex);
        setColorShow(color.hex);
    };
    const handleSecColorChange = (color) => {
        setSelectedSecColor(color.hex);
        setSecondarycolorShow(color.hex);
    };

    const handleTitleKeyPress = (e) => {
        setTitleKeypress(e.target.value);
    };
    const handleTitleKeyPressSec = (e) => {
        setTitleKeypressSec(e.target.value);
    };

    return (
        <div className='row general_row1'>

            <div className="col-12 p-2">
                <div className="logo-head pb-2 pt-4">
                    <h4>Secondary Button</h4 >
                </div>
                <div className="font_select mb-4">
                    <h6 >Secondary button font</h6>
                    <div class="font_select_section">
                        <span class="file_select_title">Upload a font</span>
                        <span class="file_select_icon">
                            <button type="button" className="">
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
                <hr className='m-0' />
                <div class="file_select_section border-0">
                    <span class="file_select_title">Secondary button background  colour</span>
                    <span className='color-select-span'>
                        <span className='p-3'>
                            {colorShow}
                        </span>
                        <button
                            className="color-show h-100 border-0"
                            style={{
                                backgroundColor: colorShow,
                                borderRadius: "5px",
                                width: "31px",
                                height: "100%",
                            }} onClick={handleShow}
                        ></button>
                    </span>
                </div>
                <hr className='m-0' />
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
                {/* secondary color */}
                <div class="file_select_section border-0">
                    <span class="file_select_title">Secondary button
                        text colour</span>
                    <span className='color-select-span'>
                        <span className='p-3'>
                            {secondarycolorShow}
                        </span>
                        <button
                            className="color-show h-100 border-0"
                            style={{
                                backgroundColor: secondarycolorShow,
                                borderRadius: "5px",
                                width: "31px",
                                height: "100%",
                            }} onClick={handleShowSec}
                        ></button>
                    </span>
                </div>
                <hr className='m-0' />
                {showSec && (
                    <div className="side-modal " style={{ height: "400px" }}>
                        <div className="modal-dialog" role="document">
                            <div className="modal-content px-3">
                                <div className="modal-header">
                                    <h5 className="modal-title my-2 mx-2">Select Colour</h5>
                                    <button
                                        type="button"
                                        className="close "
                                        onClick={handleCloseSec}
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
                                                onChange={handleTitleKeyPressSec}
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
                                                            onChangeComplete={handleSecColorChange}
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
                                                                onClick={handleCreateSecColor}
                                                                className="btn btn-primary"
                                                            >
                                                                OK
                                                            </button>
                                                            <button
                                                                type="button"
                                                                onClick={handleCloseSec}
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

                {/* primary font size */}
                <div class="file_select_section border-0">
                    <span class="file_select_title">Secondary button font size</span>
                    <span className='border p-2'>

                        <button
                            className="color-show h-100 border-0"
                            style={{
                                borderRadius: "5px",
                                background: "none",
                                width: "31px",
                                height: "100%",
                            }}
                        >16</button>
                        <span className='p-3'>
                            px
                        </span>
                    </span>
                </div>
                {/* secondary font size */}
                <div class="file_select_section border-0">
                    <span class="file_select_title">Secondary button rounding</span>
                    <span className='border p-2'>

                        <button
                            className="color-show h-100 border-0"
                            style={{
                                borderRadius: "5px",
                                background: "none",
                                width: "31px",
                                height: "100%",
                            }}
                        >12</button>
                        <span className='p-3'>
                            px
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SecondaryButtons