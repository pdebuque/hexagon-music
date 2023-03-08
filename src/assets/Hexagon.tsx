import React, { useState } from 'react'

import { HexInt } from '../model'
import { useAppDispatch } from '../redux/hooks'
import { setFocus } from '../redux/reducers/state.reducer';
import { getNote } from '../modules/getNote';

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

  const dispatch = useAppDispatch()

  const [hover, setHover] = useState<boolean>(false)

  // console.log(hex)

  const svgStyle = {
    border: '2px solid black'
  }




  const arrayAdd = (array: number[], number: number) => {
    return array.map(el => el + number)
  }

  const xDef = [-(height * Math.sqrt(3) / 2), 0, height * Math.sqrt(3) / 2];
  const yDef = [-height, -height / 2, height / 2, height];

  const xAdj = (q * height * Math.sqrt(3)) + (r * height * Math.sqrt(3) / 2);
  const yAdj = (r * 1.5 * height)

  const xGen = arrayAdd(xDef, xAdj);
  const yGen = arrayAdd(yDef, yAdj);

  const points = [
    `${xDef[1]},${yDef[0]}`,
    `${xDef[2]},${yDef[1]}`,
    `${xDef[2]},${yDef[2]}`,
    `${xDef[1]},${yDef[3]}`,
    `${xDef[0]},${yDef[2]}`,
    `${xDef[0]},${yDef[1]}`,
  ].join(' ')

  // console.log(xGen, yGen)

  const handleClick = (e: React.MouseEvent) => {
    // if (e) return;
    console.log('clicked');
    dispatch(setFocus({
      hex: hex,
      note: getNote(q,r)
    }))
  }

  return (
    <>
      {/* <svg style={svgStyle} height={500} width={500} viewBox="-150 -150 500 500"> */}

      <g
        onClick={handleClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{ cursor: 'pointer' }}
        transform={`translate(${xAdj},${yAdj})`}
      >
        {/* (0,0) */}
        <polygon
          points={points}
          fill={hover ? 'grey' : 'white'}
          stroke='black' />
        <g><text /* x={xAdj - height / 2} y={yAdj} */>{JSON.stringify(getNote(q,r))} ({q},{r})</text></g>
      </g>

      {/* </svg> */}
    </>
  )
}



export default Hexagon