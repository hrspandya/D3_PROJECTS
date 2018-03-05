import React from 'react';
import { scaleLinear } from 'd3-scale';
import { axisBottom } from 'd3-axis';
import { select } from 'd3-selection';

class Axis extends React.Component {
  componentDidMount(){
    this.renderAxis();
  }

  componentDidUpdate(){
    this.renderAxis();
  }

  renderAxis(){
    const scale = scaleLinear().domain([0, 10]).range([0, 200]);
    const axis = axisBottom(scale);
    select(this.refs.chart).call(axis);
    console.log('scale: ', scale);
  }

  render(){
    return (
      <div>
        <div>Axis Component</div>
        <svg width="100%" height="400" id="svg">
          <g transform="translate(10, 30)" ref="chart" width="100%"/>
        </svg>
      </div>
    );
  }
}

export default Axis;