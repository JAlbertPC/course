import { CellSet } from './CellSet'

export type Cell = [number, number]

export const newBoard = () => {
  const cells: Set<Cell> = new CellSet()
  return {
    add: (cell: Cell) => cells.add(cell),
    isAlive: (cell: Cell) => isAlive(cells, cell),
    getNeighbours: (cell: Cell) => getNeighbours(cells, cell),
  }
}

const getNeighbours = (cells: Set<Cell>, cell: Cell) => {
  const neighbours: Set<Cell> = new CellSet()
  const [x, y] = cell

  for (let diffX = -1; diffX <= 1; diffX++) {
    for (let diffY = -1; diffY <= 1; diffY++) {
      const neighbourCell: Cell = [x + diffX, y + diffY]

      if (isAlive(cells, neighbourCell) && !isSameCell(cell, neighbourCell)) {
        neighbours.add(neighbourCell)
      }
    }
  }

  return neighbours
}

const isAlive = (cells: Set<Cell>, cell: Cell) => cells.has(cell)

const isSameCell = ([firstX, firstY]: Cell, [secondX, secondY]: Cell) =>
  firstX === secondX && firstY === secondY
