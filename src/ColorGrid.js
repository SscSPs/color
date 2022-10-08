import React from 'react';
import reactCSS from 'reactcss';
import './App.css';

const ColorGrid = ({ hueValue, saturationCount, luminosityCount }) => {
  const { outerWidth: width, outerHeight: height } = window;

  const saturationFraction = 100 / (saturationCount - 2);
  const luminosityFraction = 100 / (luminosityCount - 2);

  const oneColorWidth = width / (saturationCount - 2) / 2;
  const oneColorHeight = height / (luminosityCount - 2) / 2;

  const hslToHex = (h, s, l) => {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  }

  return (
    <div
      className='colorgrid'
      style={{ border: '1px', borderBlock: '10px', borderColor: 'red' }}
    >
      {
        // create saturationCount divs
        Array(saturationCount - 1)
          .fill(0)
          .map((_, i) => {
            return (
              <div key={i} style={{ display: 'flex', flexDirection: 'row' }}>
                {
                  // create luminosityCount divs
                  Array(luminosityCount - 1)
                    .fill(0)
                    .map((_, j) => {
                      var hueLocal = hueValue;
                      var saturationLocal = j * saturationFraction;
                      var luminosityLocal = j * luminosityFraction;
                      const hexColour = hslToHex(hueLocal, saturationLocal, luminosityLocal);
                      const styles = reactCSS({
                        default: {
                          color: {
                            width: `${oneColorWidth}px`,
                            height: `${oneColorHeight}px`,
                            borderRadius: '5px',
                            background: `hsl(${hueLocal}, ${saturationLocal}%, ${luminosityLocal}%)`,
                            color: luminosityLocal > 50 ? "#000" : "#fff",
                          },
                          swatch: {
                            padding: '1px',
                            background: '#fff',
                            borderRadius: '5px',
                            boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                            display: 'inline-block',
                            cursor: 'pointer',
                          },
                        },
                      });
                      return (
                        <div key={j} style={styles.swatch}>
                          <div style={styles.color} className="colour-cell" onClick={() => {navigator.clipboard.writeText(hexColour)}}>
                            <p>{hexColour}</p>
                          </div>
                        </div>
                      );
                    })
                }
              </div>
            );
          })
      }
    </div>
  );
};

export default ColorGrid;
