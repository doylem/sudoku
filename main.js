const board = document.querySelector("#board")

const gridMin = 1
const gridMax = 9
const grid = []

const setupBoard = () => {
  for (let x = gridMin; x <= gridMax; x++) {
    let row = []
    for (let y = gridMin; y <= gridMax; y++) {
      const box = document.createElement("div")
      box.className = `box ${x % 3 === 0 ? "separator-x" : ""} ${
        y % 3 === 0 ? "separator-y" : ""
      } `
      box.style.gridColumnStart = x
      box.style.gridRowStart = y
      board.appendChild(box)
      row.push({ element: box, value: 0 })
    }
    grid.push(row)
  }
}

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1
}

const seedGrid = () => {
  const numbers = Array(9)
    .fill()
    .map((_, index) => index + 1)
  numbers.sort(() => Math.random() - 0.5)

  // grid.forEach((row) => {
  // 	const rowSet = new Set()
  // 	while (rowSet.size !== 9) {
  // 		rowSet.add(generateRandomNumber())
  // 	}
  // })

  grid.forEach((row) => {
    row.forEach((item, index) => {
      item.element.innerHTML = numbers[index]
    })
  })
}

const draw = () => {
  grid.forEach((row) => {
    row.forEach((item) => {
      item.element.innerHTML = Math.floor(Math.random() * 10)
    })
  })
}

const init = () => {
  setupBoard()
  console.log(grid)
  seedGrid()
  // draw()
}

init()
