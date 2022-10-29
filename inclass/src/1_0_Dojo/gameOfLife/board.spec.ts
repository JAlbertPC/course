import { Cell, newBoard } from './board'

describe('Testing the board module', () => {
  it('Calling "newBoard" without arguments should create a new empty board', () => {
    const res = newBoard()

    expect(res).toBeDefined()
  })

  it('Calling "add" method with a new Cell', () => {
    const newCell: Cell = [0, 0]
    const board = newBoard()
    board.add(newCell)

    expect(board.isAlive(newCell)).toBeTruthy()
  })

  it('Calling "isAlive" method with a non existing Cell', () => {
    const newCell: Cell = [0, 0]

    const board = newBoard()
    expect(board.isAlive(newCell)).toBeFalsy()
  })

  it('Calling "getNeighbours" method must return a set with a neighbour cell', () => {
    const cell: Cell = [0, 0]
    const neighbourCell: Cell = [1, 0]

    const board = newBoard()
    board.add(cell)
    board.add(neighbourCell)
    expect(board.getNeighbours(cell).has(neighbourCell)).toBeTruthy()
  })

  it('Calling "getNeighbours" method must not contain the current cell', () => {
    const cell: Cell = [0, 0]

    const board = newBoard()
    board.add(cell)
    expect(board.getNeighbours(cell).has(cell)).toBeFalsy()
  })

  it('Calling "getNeighbours" method must not contain a far cell', () => {
    const cell: Cell = [0, 0]
    const notNeighbourCell: Cell = [2, 0]
    const board = newBoard()
    board.add(notNeighbourCell)
    board.add(cell)
    expect(board.getNeighbours(cell).has(notNeighbourCell)).toBeFalsy()
  })
})
