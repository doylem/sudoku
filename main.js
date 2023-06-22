import { setupGrid } from "./board.js"
import { initControls } from "./controls.js"
import { validate } from "./state.js"

const validateClickHandler = () => {
  const isValid = validate()

  if (isValid) {
    alert("SUCCESS! Puzzle is valid")

    // validationResult.textContent = "Success!"
    // validateButton.className += " green"
  } else {
    alert("Puzzle is not valid, please try again!")
    // validationResult.textContent = "Solution not valid"
    // validateButton.className += " red"
  }
}

const initGame = () => {
  setupGrid()
  initControls(validateClickHandler)
}

initGame()
