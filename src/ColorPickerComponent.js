import React from 'react'
import { SketchPicker } from 'react-color'
import { rgbaToHsla } from 'colors-convert'
import ColorGrid from './ColorGrid'

class ColorPickerComponent extends React.Component {
    state = {
        displayColorPicker: false,
        color: {
            r: 241,
            g: 112,
            b: 19,
            a: 1,
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
        var colorAsHSL = rgbaToHsla(this.state.color);
        return (
            <div>
                <div >
                    <ColorGrid
                        h={colorAsHSL.h}
                        a={colorAsHSL.a}
                        satCount="12"
                        lumCount="12"
                    />
                </div>
                <SketchPicker color={this.state.color} onChange={this.handleChange} />
            </div>
        )
    }
}

export default ColorPickerComponent