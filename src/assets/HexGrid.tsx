import React from 'react'

import Hexagon from './Hexagon'

import { HexInt } from '../model';

interface Props {
  columns: number;
  rows: number;
  dimensions: number;
}


const HexGrid = () => {



  const tempProps: Props = {
    columns: 3,
    rows: 2,
    dimensions: 100 //height of each hexagon
  }

  const createGrid = (props: Props) => {
    const grid = [];
    for (let i = 0; i < props.rows; i++) {
      grid[i] = [];
      for (let j = 0; j < props.columns; j++) {
        addHex(grid, j, i, props.dimensions)
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

  const gridToMap = createGrid(tempProps)

  return (
    // <svg height={1000} width = {'100vw'} xmlns="http://www.w3.org/2000/svg">
    <div>
      {/* <pre>{JSON.stringify(createGrid(tempProps), null, 2)}</pre> */}
      <svg height={500} width={500} viewBox="-150 -150 500 500" xmlns="http://www.w3.org/2000/svg">
        {createGrid(tempProps).map((row, i) => {
          return (
            <g key={i}>
              {row.map((el, j) => {
                return (
                  <Hexagon key = {j} hex={el}/>
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