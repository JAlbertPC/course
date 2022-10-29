import { Cell } from './board'

export class CellSet implements Set<Cell> {
  private cellSet: Set<string>
  constructor(iterable?: Iterable<Cell>) {
    let cellIterable: Iterable<string> | undefined
    if (iterable) {
      cellIterable = Array.from(iterable).map<string>((i) => this.parseCell(i))
    }

    this.cellSet = new Set<string>(cellIterable)
  }

  add(cell: Cell): this {
    this.cellSet.add(this.parseCell(cell))
    return this
  }

  clear(): void {
    this.cellSet = new Set<string>()
  }

  delete(cell: Cell): boolean {
    return this.cellSet.delete(this.parseCell(cell))
  }

  has(cell: Cell): boolean {
    return this.cellSet.has(this.parseCell(cell))
  }

  get size() {
    return this.cellSet.size
  }

  entries(): IterableIterator<[Cell, Cell]> {
    const cellsArray = Array.from(this.cellSet.entries()).map<[Cell, Cell]>(
      ([key, value]) => [this.decodeCell(key), this.decodeCell(value)]
    )

    return cellsArray[Symbol.iterator]()
  }

  forEach(
    callbackfn: (value: Cell, value2: Cell, set: CellSet) => void,
    thisArg?: any
  ): void {
    this.cellSet.forEach(
      (key, value) =>
        callbackfn(this.decodeCell(key), this.decodeCell(value), this),
      thisArg
    )
  }

  keys(): IterableIterator<Cell> {
    const cellsArray = Array.from(this.cellSet.keys()).map<Cell>((key) =>
      this.decodeCell(key)
    )

    return cellsArray[Symbol.iterator]()
  }

  values(): IterableIterator<Cell> {
    const cellsArray = Array.from(this.cellSet.values()).map<Cell>((key) =>
      this.decodeCell(key)
    )

    return cellsArray[Symbol.iterator]()
  }

  [Symbol.iterator](): IterableIterator<Cell> {
    return this.values()
  }

  get [Symbol.toStringTag](): string {
    return 'Set'
  }

  private parseCell(cell: Cell): string {
    return JSON.stringify(cell)
  }

  private decodeCell(cellString: string): Cell {
    return JSON.parse(cellString)
  }
}
