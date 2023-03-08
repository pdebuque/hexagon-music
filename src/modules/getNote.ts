import { Note } from '../model'


const row1 = ['C', 'D', 'E', 'F#', 'G#', 'A#'];
const row2 = ['F', 'G', 'A', 'B', 'C#', 'D#']

export const getNote = (q: number, r: number) => {

  const output: Note = {
    pc: 0,
    name: '',
    octave: 0,
  }

  if (r % 2) {
    output.name = row2[q % 6]
    output.pc = 2 * (q + 2) % 12 + 1
  }
  else {
    output.name = row1[q % 6]
    output.pc = 2 * (q % 6) % 12
  }

  output.octave = Math.floor(r / 2)


  return output

}