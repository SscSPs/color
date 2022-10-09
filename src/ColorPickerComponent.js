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
    const [colorGrid, setcolorGrid] = useState("10")
    return (
        <div className='main'>
            <div className='color-grid'>
                <ColorGrid
                    hueValue={colorAsHSL[0]}
                    saturationCount={colorGrid}
                    luminosityCount={colorGrid}
                />
                <input
                    className='slider'
                    type={"range"}
                    min={"8"}
                    max={"30"}
                    value={colorGrid}
                    step={1}
                    onChange={e => setcolorGrid(e.target.value)} />
            </div>
            <div className='colorpick'>
                <div className='color-picker'>Choose any color:</div>
                <br />
                <SketchPicker color={color} onChange={handleChange} />
            </div>
        </div>
    );
};

export default ColorPickerComponent;
