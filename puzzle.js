// export const validPuzzle = [
//   [5, 0, 0, 6, 7, 8, 0, 1, 2],
//   [6, 7, 0, 1, 0, 5, 0, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 0],
//   [8, 0, 9, 7, 6, 0, 4, 0, 3],
//   [4, 2, 6, 0, 5, 3, 7, 9, 1],
//   [0, 1, 3, 9, 2, 4, 8, 0, 6],
//   [9, 6, 1, 5, 3, 0, 2, 8, 0],
//   [0, 8, 0, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 0, 1, 0, 9],
// ] // => true

export const validPuzzle = [
  [5, 3, 4, 6, 7, 8, 9, 1, 0],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
] // => true
export const validSolution = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
] // => true

export const invalid = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9],
] // => false

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1
}

export const seedGrid = (grid) => {
  const numbers = Array(9)
    .fill()
    .map((_, index) => index + 1)
  numbers.sort(() => Math.random() - 0.5)
  grid.forEach((row) => {
    const rowSet = new Set()
    while (rowSet.size !== 9) {
      rowSet.add(generateRandomNumber())
    }
  })
}

export const validatePuzzle = (grid) => {
  const isUnique = (arr) => {
    console.log("checking uniqueness for", arr)
    // check for missing values
    if (arr.includes(0)) return false

    const set = new Set(arr)
    return set.size === arr.length
  }

  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    let row = []
    for (let colIndex = 0; colIndex < grid.length; colIndex++) {
      row.push(grid[colIndex][rowIndex].value)
    }
    // check if numbers are unique in each column
    if (!isUnique(row)) return false
  }

  // iterate over grid and check columns
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    let col = []
    for (let colIndex = 0; colIndex < grid.length; colIndex++) {
      col.push(grid[rowIndex][colIndex].value)
    }
    // check if numbers are unique in each column
    if (!isUnique(col)) return false
  }

  // check if numbers are unique in a block
  let blockStartRow = 0
  let blockStartCol = 0
  while (blockStartRow < 9 && blockStartCol < 9) {
    let block = []
    for (
      let rowIndex = blockStartRow;
      rowIndex < blockStartRow + 3;
      rowIndex++
    ) {
      for (
        let colIndex = blockStartCol;
        colIndex < blockStartCol + 3;
        colIndex++
      ) {
        block.push(grid[colIndex][rowIndex].value)
      }
    }
    // check if numbers are unique in each column
    if (!isUnique(block)) return false
    blockStartRow += 3
    blockStartCol += 3
  }

  return true
}
