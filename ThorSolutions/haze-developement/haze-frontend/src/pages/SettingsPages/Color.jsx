import React, { useEffect, useState } from 'react'
import { SketchPicker } from "react-color";

function Color() {
    const [colorShow, setColorShow] = useState("#808080");
    const [secondarycolorShow, setSecondarycolorShow] = useState("#2D2D2D");
    const [accentcolorShow, setAccentcolorShow] = useState("#2E2E2E");
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedSecColor, setSelectedSecColor] = useState("");
    const [selectedAccColor, setSelectedAccColor] = useState("");
    const [colors, setColors] = useState([]);
    const [previewColor, setPreviewColor] = useState("#808080");

    const [show, setShow] = useState(false);
    const [showSec, setShowSec] = useState(false);
    const [showAccent, setShowAccent] = useState(false);
    const [titleKeyPress, setTitleKeypress] = useState("");
    const [titleKeyPressSec, setTitleKeypressSec] = useState("");
    const [titleKeyPressAcc, setTitleKeypressAcc] = useState("");

    const handleShow = () => setShow(true);
    const handleShowSec = () => setShowSec(true);
    const handleShowAccent = () => setShowAccent(true);
    const handleClose = () => setShow(false);
    const handleCloseSec = () => setShowSec(false);
    const handleCloseAccent = () => setShowAccent(false);

    useEffect(() => { }, []);
    const handleCreateColor = () => {
        setColors((prevColors) => [...prevColors, selectedColor]);
        setPreviewColor("#808080");
    };
    const handleCreateSecColor = () => {
        setColors((prevColors) => [...prevColors, selectedSecColor]);
        setPreviewColor("#2D2D2D");
    };
    const handleCreateAccColor = () => {
        setColors((prevColors) => [...prevColors, selectedAccColor]);
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
    const handleAccentColorChange = (color) => {
        setSelectedAccColor(color.hex);
        setAccentcolorShow(color.hex);
    };
    const handleTitleKeyPress = (e) => {
        setTitleKeypress(e.target.value);
    };
    const handleTitleKeyPressSec = (e) => {
        setTitleKeypressSec(e.target.value);
    };
    const handleTitleKeyPressAccent = (e) => {
        setTitleKeypressAcc(e.target.value);
    };
    return (
        <div className='row general_row1 '>

            <div className="col-12 p-2">
                <div className="logo-head pb-2 pt-4">
                    <h4>Colour</h4 >
                </div>
                <div class="file_select_section border-0">
                    <span class="file_select_title">Primary colour</span>
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
                    <span class="file_select_title">Secondary colour</span>
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



                {/* Accent color */}
                 <div class="file_select_section border-0">
                    <span class="file_select_title">Accent colour</span>
                    <span className='color-select-span'>
                        <span className='p-3'>
                            {accentcolorShow}
                        </span>
                        <button
                            className="color-show h-100 border-0"
                            style={{
                                backgroundColor: accentcolorShow,
                                borderRadius: "5px",
                                width: "31px",
                                height: "100%",
                            }} onClick={handleShowAccent}
                        ></button>
                    </span>
                </div>
                <hr className='m-0' />
                {showAccent && (
                    <div className="side-modal " style={{ height: "400px" }}>
                        <div className="modal-dialog" role="document">
                            <div className="modal-content px-3">
                                <div className="modal-header">
                                    <h5 className="modal-title my-2 mx-2">Select Colour</h5>
                                    <button
                                        type="button"
                                        className="close "
                                        onClick={handleCloseAccent}
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
                                                onChange={handleTitleKeyPressAccent}
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
                                                            onChangeComplete={handleAccentColorChange}
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
                                                                onClick={handleCreateAccColor}
                                                                className="btn btn-primary"
                                                            >
                                                                OK
                                                            </button>
                                                            <button
                                                                type="button"
                                                                onClick={handleCloseAccent}
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
            </div>

        </div >
    )
}

export default Color