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

const isUnique = (arr) => {
  console.log("checking uniqueness for", arr)
  const set = new Set(arr)
  return set.size === arr.length
}

const validateSudoku = () => {
  const grid = validSolution

  // check unique values in row
  for (let row = 0; row < grid.length; row++) {
    if (!isUnique(grid[row])) {
      return false
    }
  }

  // check unique values in column
  for (let row = 0; row < grid.length; row++) {
    let column = []
    for (let col = 0; col < grid[row].length; col++) {
      column.push(grid[col][row])
    }
    if (!isUnique(column)) {
      return false
    }
  }

  // check unique values in each block
  let blockRowStart = 0
  let blockColStart = 0
  const gridMax = 9
  const blockSize = 3

  while (blockRowStart < 9 && blockColStart < 9) {
    let block = []
    for (let row = blockRowStart; row < blockRowStart + blockSize; row++) {
      for (let col = blockColStart; col < blockColStart + blockSize; col++) {
        block.push(grid[row][col])
      }
    }
    blockColStart += 3
    console.log("block!")
    if (!isUnique(block)) {
      return false
    }
    if (blockColStart === 9 && blockRowStart !== 9) {
      blockColStart = 0
      blockRowStart += 3
    }
  }

  return true
}

const run = () => {
  const isValid = validateSudoku()
  if (!isValid) {
    console.log("Sorry, not valid")
    return
  }
  console.log("VALID!")
}

run()
