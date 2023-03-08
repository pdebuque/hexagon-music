import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import Hexagon from './assets/Hexagon';
import HexGrid from './assets/HexGrid';
import {HexInt} from './model'
import { SVG } from '@svgdotjs/svg.js'

import { defineHex, Grid, rectangle } from 'honeycomb-grid';

function App() {

  // const Tile = defineHex({dimensions: 30});

  // const grid = new Grid(Tile, rectangle({width: 1, height: 2}))
  // console.log('grid:', grid);
  // console.log('grid height', grid.pixelHeight)
  // grid.forEach(console.log)

  return (
    <div className="App">
      <HexGrid/>
    </div>
  )
}

export default App
