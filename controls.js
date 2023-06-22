import { grid } from "./board.js"

const validateButton = document.querySelector(".validateButton")
const validationResult = document.querySelector(".validationResult")

export const initControls = (validateClickHandler) => {
  validateButton.addEventListener("click", validateClickHandler)
}
