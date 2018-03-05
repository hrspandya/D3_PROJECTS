import React from 'react';
import { schemeCategory10 } from 'd3-scale-chromatic';
import { scaleBand, scaleLinear } from 'd3-scale';
import { range } from 'd3-array';
import Swatch from './Swatch';

class ColorScaleWrapper extends React.Component {
  componentWillMount(){
    this.updateColorScale(this.props);
  }

  componentWillUpdate(newProps){
    this.updateColorScale(newProps);
  }

  updateColorScale(props){
    this.colors = schemeCategory10;    
    this.width = scaleBand().domain(range(10)).range([0, props.width]);
    console.log('width ', this.width(1));
    console.log('colors ',this.colors);
  }

  render(){
    const that = this;
    const width = 20;
    return (
      <div>
        <svg transform="translate(10, 20)" width="100%" height="100%">
          <g>
          {
            range(10).map((i) => {
              console.log(i);
              console.log(this.width(i));
              console.log(that.width(i));
              return (
                <Swatch x={width*i} y="0" color={this.colors[i]} width={"20"} key={i}/>
              );
            })
          }
          </g>
        </svg>
      </div>
    );
  }
}

export default ColorScaleWrapper;