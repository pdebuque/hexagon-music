import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import Hexagon from './assets/Hexagon';
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
      <Hexagon hex={{q: 1, r: 1, height: 30}}/>
    </div>
  )
}

export default App
