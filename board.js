import { getState } from "./state.js"

const board = document.querySelector("#board")
export const gridMin = 1
export const gridMax = 9
export const grid = []

const createBox = (x, y) => {
  const box = document.createElement("div")
  box.className = `box ${x % 3 === 0 && "separator-x"} ${
    y % 3 === 0 && "separator-y"
  } `
  box.style.gridColumnStart = x
  box.style.gridRowStart = y

  return box
}

const createNumberInputField = () => {
  const inputField = document.createElement("input")
  inputField.className = "input"
  inputField.type = "number"
  inputField.min = 1
  inputField.max = 9

  return inputField
}

const buildPuzzleCell = (y, x) => {
  const state = getState()
  const value = state.grid[y - 1][x - 1]
  const box = createBox(x, y)
  board.appendChild(box)
  const properties = { element: box, value, col: x, row: y }

  // If the puzzle has a value, render that, else create an input field
  if (value) {
    box.innerHTML = value
  } else {
    const inputField = createNumberInputField()
    inputField.addEventListener("input", (event) => {
      properties.value = parseInt(event.target.value)
      console.log("event.target.value:", event.target.value)
    })
    box.appendChild(inputField)
  }

  return properties
}

export const setupGrid = () => {
  for (let y = gridMin; y <= gridMax; y++) {
    let row = []
    for (let x = gridMin; x <= gridMax; x++) {
      const cell = buildPuzzleCell(y, x)
      row.push(cell)
    }
    grid.push(row)
  }
}

// An alternative attempt to prevent characters from the fields

// inputField.addEventListener("keydown", (event) => {
//   console.log(event)
//   if (/^[1-9]$/.test(event.key)) {
//     // if (event.target.value.length > 1) {
//     //   event.target.value = event.target.value.substring(1, 1)
//     // }
//   }
// })
