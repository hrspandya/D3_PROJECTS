import React from 'react';

class Swatch extends React.Component {
  render(){
    const {x, y, width, color} = this.props;
    return (
      <rect x={x} y={y} width={width} height="20" style={{fill: color}} />
    );
  }
}

export default Swatch;