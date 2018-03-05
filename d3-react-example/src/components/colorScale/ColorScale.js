import React from 'react';
import ColorScaleWrapper from './ColorScaleWrapper';

class ColorScale extends React.Component {
  render(){
    return (
      <div>
        Color Scale
        <ColorScaleWrapper width="300px" />
      </div>
    );    
  }
}

export default ColorScale;