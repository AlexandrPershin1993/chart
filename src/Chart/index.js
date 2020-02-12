import React, { useState } from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, ArcSeries, Hint} from 'react-vis';
import fp from 'lodash/fp'

const xDomain = [0, 100];
const yDomain = [0 ,100];
const marginXYPlot = {
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
}

const Chart = ({size, data}) => {

  return (
    <XYPlot
      width = {size}
      height = {size}
      xDomain = {xDomain}
      yDomain = {yDomain}
      margin = {marginXYPlot}
      animation
    >
      
    </XYPlot>
  )

}

export default Chart;