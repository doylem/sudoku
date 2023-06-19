import { grid } from "./board.js"
import { validatePuzzle } from "./puzzle.js"

const validateButton = document.querySelector(".validateButton")
const validationResult = document.querySelector(".validationResult")

const runValidation = () => {
  console.log("grid:", grid)
  const isValid = validatePuzzle(grid)

  if (isValid) {
    console.log("SUCCESS! Puzzle is valid")

    validationResult.textContent = "Success!"
    validateButton.className += " green"
  } else {
    console.log("Puzzle is not valid, please try again!")
    validationResult.textContent = "Solution not valid"
    validateButton.className += " red"
  }
}

export const initControls = () => {
  validateButton.addEventListener("click", () => runValidation())
}
