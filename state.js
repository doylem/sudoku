const state = {
  grid: [
    [5, 3, 4, 6, 7, 8, 9, 1, 0],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 0, 3],
    [4, 0, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 0, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 0, 8, 6, 1, 7, 9],
  ],
}

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1
}

export const getState = () => {
  return state
}

export const validate = () => {
  const isUnique = (arr) => {
    console.log("checking uniqueness for", arr)
    // check for missing values
    if (arr.includes(0)) return false

    const set = new Set(arr)
    return set.size === arr.length
  }

  for (let rowIndex = 0; rowIndex < state.grid.length; rowIndex++) {
    let row = []
    for (let colIndex = 0; colIndex < state.grid.length; colIndex++) {
      row.push(state.grid[colIndex][rowIndex])
    }
    // check if numbers are unique in each column
    if (!isUnique(row)) return false
  }

  // iterate over grid and check columns
  for (let rowIndex = 0; rowIndex < state.grid.length; rowIndex++) {
    let col = []
    for (let colIndex = 0; colIndex < state.grid.length; colIndex++) {
      col.push(state.grid[colIndex][rowIndex])
    }
    // check if numbers are unique in each column
    if (!isUnique(col)) return false
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
        block.push(state.grid[row][col])
      }
    }
    if (!isUnique(block)) {
      return false
    }

    // If we have hit the end on the x axis, reset it and increment the y
    blockColStart += 3
    if (blockColStart === 9 && blockRowStart !== 9) {
      blockColStart = 0
      blockRowStart += 3
    }
  }

  return true
}

// export const validSolution = [
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9],
// ] // => true

// export const invalidPuzzle = [
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 0, 3, 4, 8],
//   [1, 0, 0, 3, 4, 2, 5, 6, 0],
//   [8, 5, 9, 7, 6, 1, 0, 2, 0],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 0, 1, 5, 3, 7, 2, 1, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 0, 0, 4, 8, 1, 1, 7, 9],
// ] // => false

// unused
// export const seedGrid = (grid) => {
//   const numbers = Array(9)
//     .fill()
//     .map((_, index) => index + 1)
//   numbers.sort(() => Math.random() - 0.5)
//   grid.forEach((row) => {
//     const rowSet = new Set()
//     while (rowSet.size !== 9) {
//       rowSet.add(generateRandomNumber())
//     }
//   })
// }
