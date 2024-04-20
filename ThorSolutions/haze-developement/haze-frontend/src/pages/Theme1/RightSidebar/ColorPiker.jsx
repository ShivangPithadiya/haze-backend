import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import { Button, Modal } from 'react-bootstrap';


const ColorPicker = () => {
  const [colors, setColors] = useState([]);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#ffffff'); 
  const [previewColor, setPreviewColor] = useState('#ffffff'); 

  const handleCreateColor = () => {
    setColors((prevColors) => [...prevColors, selectedColor]);
    setPreviewColor('#ffffff');
  };

  const [target, setTarget] = useState(null);


  const handleClose = () => {}
  return (
   
      
    <div class="mmodal">
      <div >
        {colors.map((color, index) => (
          <div
            key={index}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: color,
              margin: '5px',
            }}
          ></div>
        ))}
      </div>
      <div
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: previewColor,
            marginBottom: '10px',
          }}
        ></div>

      <div style={{ marginTop: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <button onClick={() => setShowColorPicker(!showColorPicker)}>
            Toggle Color Picker
          </button>
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
  <button onClick={handleCreateColor}>Create Color</button>
      </div>
    </div>
   
  );
};

export default ColorPicker;
