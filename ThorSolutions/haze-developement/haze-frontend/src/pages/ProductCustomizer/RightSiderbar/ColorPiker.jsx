import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { Button, Modal } from "react-bootstrap";

const ColorPicker = () => {
  const [colors, setColors] = useState([]);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  const [previewColor, setPreviewColor] = useState("");

  const handleCreateColor = () => {
    setColors((prevColors) => [...prevColors, selectedColor]);
    setShowColorPicker(false);
  };

  return (
    <div className="mmodal">
      <div>
        {colors.map((color, index) => (
          <div
            key={index}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: color,
              margin: "5px",
            }}
          ></div>
        ))}
      </div>
      <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: previewColor,
          marginBottom: "10px",
        }}
      ></div>

      <div style={{ marginTop: "20px" }}>
        <div style={{ marginBottom: "10px" }}>
          <Button onClick={() => setShowColorPicker(!showColorPicker)}>
            Toggle Color Picker
          </Button>
          {showColorPicker && (
            <SketchPicker
              color={selectedColor}
              onChangeComplete={(color) => {
                setSelectedColor(color.hex);
                setPreviewColor(color.hex);
              }}
            />
          )}
        </div>
        <Button onClick={handleCreateColor}>Create Color</Button>
      </div>
    </div>
  );
};

export default ColorPicker;
