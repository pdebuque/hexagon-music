export interface HexInt {
  q: number;
  r: number;
  height: number;
}

export interface GridInt {
  cols: number;
  rows: number;
  hexHeight: number;
}

type PitchClass = 0|1|2|3|4|5|6|7|8|9|10|11

export interface Note {
  pc: number;
  name: string;
  octave: number;
}