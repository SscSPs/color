import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import { rgb } from 'color-convert';
import ColorGrid from './ColorGrid';

const ColorPickerComponent = () => {
  //   const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState({ r: 241, g: 112, b: 19 });

  //   const handleClick = () => setDisplayColorPicker((prev) => !prev);

  //   const handleClose = () => setDisplayColorPicker(false);

  const handleChange = (color) => setColor(color.rgb);

  const colorAsHSL = rgb.hsl(color.r, color.g, color.b);

  return (
    <main className='main'>
      <div>
        <ColorGrid
          hueValue={colorAsHSL[0]}
          saturationCount='15'
          luminosityCount='15'
        />
      </div>
      <div className='colorpick'>
        <p className='color-picker'>Choose any color:</p>
        <SketchPicker color={color} onChange={handleChange} />
      </div>
    </main>
  );
};

export default ColorPickerComponent;
