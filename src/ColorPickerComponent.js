import React from 'react'
import { SketchPicker } from 'react-color'
import { rgb, hsl } from 'color-convert'
import ColorGrid from './ColorGrid'

class ColorPickerComponent extends React.Component {
    state = {
        displayColorPicker: false,
        color: {
            r: 241,
            g: 112,
            b: 19,
        },
    };

    handleClick = () => {
        this.setState( { displayColorPicker: !this.state.displayColorPicker } )
    };

    handleClose = () => {
        this.setState( { displayColorPicker: false } )
    };

    handleChange = ( color ) => {
        this.setState( { color: color.rgb } )
    };
    render() {
        var colorAsHSL = rgb.hsl(this.state.color.r, this.state.color.g, this.state.color.b);
        return (
            <div>
                <div >
                    <ColorGrid
                        h={colorAsHSL[0]}
                        satCount="15"
                        lumCount="15"
                    />
                </div>
                <SketchPicker color={this.state.color} onChange={this.handleChange} />
            </div>
        )
    }
}

export default ColorPickerComponent