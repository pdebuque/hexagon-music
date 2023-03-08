import React from 'react'

import Hexagon from './Hexagon'

const HexGrid = () => {

  const tempProps = {
    columns: 5,
    rows: 5,
    dimensions: 100 //height of each hexagon
  }

  const createGrid = (props) => {
    const grid = [];
    for (let i = 0; i < props.rows; i++) {
      grid[i] = [];
      for (let j = 0; j < props.columns; j++) {
        addHex(grid, i, j, props.dimensions)
      }
    }
  }

  const addHex = (arr, y, x, height) => {
    arr[x][y] = {
      x: x,
      y: y,
      height: height
    }
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg">

    </svg>
  )
}

export default HexGrid