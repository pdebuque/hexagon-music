import React from 'react'

import Hexagon from './Hexagon'

import { HexInt, GridInt } from '../model';

interface Props {
  grid: GridInt
}


const HexGrid: React.FC<Props> = (props) => {

  const { grid } = props

  const gridDim = {
    height: grid.cols * grid.hexHeight,
    width: grid.rows * grid.hexHeight
  }

  const createGrid = (props: GridInt) => {
    const grid = [];
    for (let i = 0; i < props.rows; i++) {
      grid[i] = [];
      for (let j = 0; j < props.cols; j++) {
        addHex(grid, j, i, props.hexHeight)
      }
    }
    return grid
  }

  const addHex = (arr: HexInt[][], y: number, x: number, height: number) => {
    arr[x][y] = {
      q: x,
      r: y,
      height: height
    }
  }

  const gridToMap = createGrid(grid)

  return (
    // <svg height={1000} width = {'100vw'} xmlns="http://www.w3.org/2000/svg">
    <div>
      {/* <pre>{JSON.stringify(createGrid(tempProps), null, 2)}</pre> */}
      <svg height={2*gridDim.height} width={4*gridDim.width} viewBox={`${-grid.hexHeight} -${grid.hexHeight} ${4*gridDim.height} ${4*gridDim.width}`} xmlns="http://www.w3.org/2000/svg">
        {createGrid(grid).map((row, i) => {
          return (
            <g key={i}>
              {row.map((el, j) => {
                return (
                  <Hexagon key={j} hex={el} />
                )
              })}
            </g>
          )
        })}


        {/* {createGrid(tempProps).forEach(row=>return(
        row.map((el, i) => {
        return <text dy = {20+100*i} key={i}>{JSON.stringify(el)}</text>
      }
        )
      ))} */}
        {/* </svg> */}
      </svg>
    </div>
  )
}

export default HexGrid