import React from 'react'

import { HexInt } from '../model'

interface Props {
  hex: HexInt
}

{/* <polygon points="100,0 50,-87 -50,-87 -100,-0 -50,87 50,87"></polygon> */ }

const Hexagon: React.FC<Props> = (props) => {

  const {
    hex
  } = props

  const {
    q,
    r,
    height
  } = hex

  console.log(hex)

  const svgStyle = {
    border: '2px solid black'
  }

  //! temporary dimensions while i figure out equations
  // const tempProps: HexInt = {
  //   q: 1,
  //   r: 0,
  //   height: 200
  // }


  // points when origin is zero (aka, q: 0; r: 0) ['0, 100', '87,50', '87,-50', '0, -100', '-87,-50', '-87, 50']. 

  // use "odd-r" layout (https://www.redblobgames.com/grids/hexagons/#coordinates-offset)

  // q++ => hexagon moves right;
  // r++ => hexagon moves down

  /* 
  (q,r) = (1,0) => all x-coordinates += height * sqrt(3)/2
  
  (q,r) = (0,1) => all x-coordinates += height/2
      all y-coordinates += height 
  
  (q,r) = (1,1) 

  
  */

  const arrayAdd = (array: number[], number: number) => {
    return array.map(el => el + number)
  }

  const xDef = [-(height * Math.sqrt(3) / 2), 0, height * Math.sqrt(3) / 2];
  const yDef = [-height, -height / 2, height / 2, height];

  const xAdj = (q * height * Math.sqrt(3)) + (r * height * Math.sqrt(3) / 2);
  const yAdj = (r * 1.5*height)

  const xGen = arrayAdd(xDef, xAdj);
  const yGen = arrayAdd(yDef, yAdj);

  const points = [
    `${xGen[1]},${yGen[0]}`,
    `${xGen[2]},${yGen[1]}`,
    `${xGen[2]},${yGen[2]}`,
    `${xGen[1]},${yGen[3]}`,
    `${xGen[0]},${yGen[2]}`,
    `${xGen[0]},${yGen[1]}`,
  ].join(' ')

  console.log(xGen, yGen)



  return (
    <>
      {/* <svg style={svgStyle} height={500} width={500} viewBox="-150 -150 500 500"> */}
      <g>
        {/* (0,0) */}
        <polygon points={points} fill='none' stroke='black'></polygon>
        {/* <text x='-50%' y="50%">{xGen}, {yGen}</text> */}
      </g>

      {/* </svg> */}
    </>
  )
}



export default Hexagon