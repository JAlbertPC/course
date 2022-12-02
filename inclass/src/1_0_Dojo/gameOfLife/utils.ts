import { Cell } from './board'
import { CellSet } from './CellSet'

export const liveCell = '■ '
export const deadCell = '□ '

export const seed1 = () =>
  stringToSeed(`..O....O..
OO.OOOO.OO
..O....O..`)

export const seed2 = () =>
  stringToSeed(`..OOO...OOO..
.............
O....O.O....O
O....O.O....O
O....O.O....O
..OOO...OOO..
.............
..OOO...OOO..
O....O.O....O
O....O.O....O
O....O.O....O
.............
..OOO...OOO..`)

const stringToSeed = (pattern: string): Set<Cell> => {
  const cells = new CellSet()
  const rows = pattern.split('\n')
  let y = -1 * Math.floor(rows.length / 2) - 1

  rows.forEach((row) => {
    const cols = row.split('')
    let x = -1 * Math.floor(cols.length / 2) - 1
    cols.forEach((col) => {
      if (col === 'O') {
        cells.add([x + 1, y + 1])
      }
      x++
    })
    y++
  })

  return cells
}
