import React from 'react';
import reactCSS from 'reactcss';
import './App.css';
import { hsl } from 'color-convert';
import { toast } from 'react-toastify';

const ColorGrid = ({ hueValue, saturationCount, luminosityCount }) => {
  const { outerWidth: width, outerHeight: height } = window;

  const saturationFraction = 100 / (saturationCount - 2);
  const luminosityFraction = 100 / (luminosityCount - 2);

  let oneColorWidth = width / (saturationCount - 2) / 2;
  let oneColorHeight = height / (luminosityCount - 2) / 2;

  if (oneColorWidth < 40) {
    oneColorHeight = 40;
    oneColorWidth = 40;
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
          .map((_, saturationStep) => {
            return (
              <div
                key={saturationStep}
                style={{ display: 'flex', flexDirection: 'row' }}
              >
                {
                  // create luminosityCount divs
                  Array(luminosityCount - 1)
                    .fill(0)
                    .map((_, luminosityStep) => {
                      var hueLocal = hueValue;
                      var saturationLocal = saturationStep * saturationFraction;
                      var luminosityLocal = luminosityStep * luminosityFraction;
                      const hexColour = hsl.hex(
                        hueLocal,
                        saturationLocal,
                        luminosityLocal
                      );
                      const styles = reactCSS({
                        default: {
                          color: {
                            width: `${oneColorWidth}px`,
                            height: `${oneColorHeight}px`,
                            background: `hsl(${hueLocal}, ${saturationLocal}%, ${luminosityLocal}%)`,
                            color: luminosityLocal > 50 ? '#000' : '#fff',
                          },
                        },
                      });
                      return (
                        <div
                          key={luminosityStep}
                          className='color-cell-wrapper'
                        >
                          <div
                            style={styles.color}
                            className='color-cell'
                            onClick={() => {
                              navigator.clipboard
                                .writeText(`#${hexColour}`)
                                .then(() => {
                                  toast.success('Color copied.');
                                })
                                .catch(() => {
                                  toast.error('Failed to copy');
                                });
                            }}
                            title={`#${hexColour}`}
                          />
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
