import React from 'react'
import reactCSS from 'reactcss'
import { hslaToRgba } from 'colors-convert'
import './App.css';

class ColorGrid extends React.Component {

    render() {
        const { h, a, satCount, lumCount } = this.props;
        const { outerWidth: width, outerHeight: height } = window;
        const sFraction = ( 100 / ( satCount - 2 ) );
        const lFraction = ( 100 / ( lumCount - 2 ) );
        const oneColorWidth = width / ( satCount - 2 ) / 2;
        const oneColorHeight = height / ( lumCount - 2 ) / 2;
        // console.log( h, a, satCount, lumCount );
        console.log( oneColorWidth, oneColorHeight );
        return (
            <div style={{ border: "10px", borderBlock: "10px", borderColor: 'red' }}>
                {/* create satCount divs  */}
                {Array( satCount - 1 ).fill( 0 ).map( ( _, i ) => {
                    return (
                        <div key={i} style={{ display: 'flex', flexDirection: 'row' }}>
                            {/* create lumCount divs  */}
                            {Array( lumCount - 1 ).fill( 0 ).map( ( _, j ) => {
                                // console.log( `hsla(${h}, ${i * ( 100 / ( satCount - 2 ) )}%, ${j * ( 100 / ( lumCount - 2 ) )}%, ${a})` );
                                var hLocal = h;
                                var sLocal = i * sFraction;
                                var lLocal = j * lFraction;
                                var aLocal = a;
                                var hsla = { h: hLocal, s: sLocal, l: lLocal, a: aLocal };
                                // console.log( hsla );
                                var rgba = hslaToRgba( hsla );
                                // console.log( rgba );
                                const styles = reactCSS( {
                                    'default': {
                                        color: {
                                            width: `${oneColorWidth}px`,
                                            height: `${oneColorHeight}px`,
                                            borderRadius: '5px',
                                            background: `hsla(${hLocal}, ${sLocal}%, ${lLocal}%, ${aLocal})`,
                                        },
                                        swatch: {
                                            padding: '5px',
                                            background: '#000',
                                            borderRadius: '5px',
                                            boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                                            display: 'inline-block',
                                            cursor: 'pointer',
                                        },
                                    },
                                } );
                                return (
                                    <div key={j} style={styles.swatch}>
                                        <div style={styles.color} />
                                    </div>
                                )
                            } )}
                        </div>
                    )
                } )}
            </div>

        )
    }
}

export default ColorGrid