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
- Use git

## Open questions
- How do we validate that the numbers are correct
- How do we seed the squares with valid values


### Options for validation
- Check if numbers in section contain unique numbers [1 .. 9]
- Check if numbers in row contains unique numbers [1 .. 9]
- Check if numbers in column contains unique numbers [1 .. 9]
- Use a Set (unique properties) to check validity

## Complexty (shh)

O(n^2) - Quadratic time.

## Design

### HTML / CSS
- Container
- #board
  - Style using CSS Grid
  - 9 rows, 9 columns
    - styles will need thicker borders around each 3x3 "block"

## JS

**board.js**
- setupGrid
  - build components to render
    - assign div gridRowStart and gridColumnStart

```js 
  box.style.gridColumnStart = x
  box.style.gridRowStart = y
```

  - populate with values, or input fields for empty squares
  - setup listeners for input fields
    - update state
    - 


**puzzle.js**
- Return a valid puzzle as [][]
- Check validity of puzzle
- 

**controls.js**
- add a button to validate the solution
- 


