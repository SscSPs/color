import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { rgb } from "color-convert";
import ColorGrid from "./ColorGrid";
import "./App.css";
const ColorPickerComponent = () => {
  //   const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState({ r: 241, g: 112, b: 19 });

  //   const handleClick = () => setDisplayColorPicker((prev) => !prev);

  //   const handleClose = () => setDisplayColorPicker(false);

  const handleChange = (color) => setColor(color.rgb);

  const colorAsHSL = rgb.hsl(color.r, color.g, color.b);

  return (
    <>
      <div className="main">
        <div>
          <div className="color-section">
            <h3 style={{ color: "#ffffff", fontWeight: "bold" }}>PRIMARY</h3>
            <ColorGrid
              hueValue={colorAsHSL[0]}
              saturationCount="15"
              luminosityCount="15"
            />
          </div>
          <div>
            <h3 style={{ color: "#ffffff", fontWeight: "bold" }}>
              COMPLEMENTARY
            </h3>
            <ColorGrid
              hueValue={colorAsHSL[0] + 180}
              saturationCount="15"
              luminosityCount="15"
            />
          </div>
        </div>
        <div className="colorpick">
          <SketchPicker color={color} onChange={handleChange} />
        </div>
      </div>
    </>
  );
};

export default ColorPickerComponent;
