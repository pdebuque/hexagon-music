import React from 'react'

import { HexInt } from '../model'

interface Props {
  hex: HexInt
}

{/* <polygon points="100,0 50,-87 -50,-87 -100,-0 -50,87 50,87"></polygon> */}

const Hexagon: React.FC<Props> = (props) => {

const svgStyle = {
  border: '2px solid black'
}

  return (
    <>
      <svg style = {svgStyle} height={500} width = {500}  viewBox="-150 -150 500 500">
        <g>
        <polygon points="0,-100 87,-50 87,50 0,100 -87,50 -87,-50 " fill='none' stroke='black'></polygon>
        </g>
        <g>
        <polygon points="0,100 87,50 174,100 174,200 87,250 0,200 " fill='none' stroke='black'></polygon>
        </g>
      </svg>
    </>
  )
}



export default Hexagon