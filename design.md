### Sudoku game

## Requirements
- Grid, 9 x 9
- Able to input numbers into squares
  - text input
- Seed the squares with numbers on load 


## Considerations / Constraints
- Testing likely using some end to end testing approach
- Could unit test input fields, and test validation functions.
- vanilla JS / CSS

## Open questions
- How do we validate that the numbers are correct
- How do we seed the squares with valid values


### Options for validation
- Check if numbers in section contain unique numbers [1 .. 9]
- Check if numbers in row contains unique numbers [1 .. 9]
- Check if numbers in column contains unique numbers [1 .. 9]
- Use a Set (unique properties) to check validity

## Grid
- CSS Grid
9 rows, 9 columns
