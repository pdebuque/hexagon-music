import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import Hexagon from './assets/Hexagon';
import HexGrid from './assets/HexGrid';
import { HexInt, GridInt } from './model'
import { SVG } from '@svgdotjs/svg.js'

import { defineHex, Grid, rectangle } from 'honeycomb-grid';

import { useAppSelector } from './redux/hooks';

function App() {

  // const Tile = defineHex({dimensions: 30});

  // const grid = new Grid(Tile, rectangle({width: 1, height: 2}))
  // console.log('grid:', grid);
  // console.log('grid height', grid.pixelHeight)
  // grid.forEach(console.log)

  const { focus } = useAppSelector(state => state.state)

  const grid: GridInt = {
    cols: 7,
    rows: 7,
    hexHeight: 100
  }

  return (
    <div className="App">
      <p>{JSON.stringify(focus)}</p>
      <HexGrid grid={grid} />
    </div>
  )
}

export default App
