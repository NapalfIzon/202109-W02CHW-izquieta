const originalBorrowersField = [
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
];
const actualBorrowersField = [];
const newBorrowersField = [];
const borrowerNeighbors = [];

/* function checkBorrowers(actualBorrowerField) {
  const targetBorrowers = [];
  for (const i in actualBorrowerField) {
    for (const j in actualBorrowerField[i]) {
      if (actualBorrowerField[i][j]) {
        targetBorrowers.push(i, j, true);
      } else {
        targetBorrowers.push(i, j, false);
      }
    }
  }

  return targetBorrowers;
} */

function checkNeighbor(actualBorrowersField) {
  const neighborList = [];
  let statusNeighborCounter = 0;
  // condition ? exprIfTrue : exprIfFalse
  for (let y = 0; y < actualBorrowersField.length; y++) {
    for (let x = 0; x < actualBorrowersField[x].length; x++) {
      if (y === 0) {
        if (x === 0) {
          if (actualBorrowersField[y][x + 1]) statusNeighborCounter++;
          if (actualBorrowersField[y + 1][x]) statusNeighborCounter++;
          if (actualBorrowersField[y + 1][x + 1]) statusNeighborCounter++;
        }
        if (x - 1 >= 1 && x + 1 < actualBorrowersField.length) {
          if (actualBorrowersField[y][x - 1]) statusNeighborCounter++;
          if (actualBorrowersField[y][x + 1]) statusNeighborCounter++;
          if (actualBorrowersField[y + 1][x - 1]) statusNeighborCounter++;
          if (actualBorrowersField[y + 1][x]) statusNeighborCounter++;
          if (actualBorrowersField[y + 1][x + 1]) statusNeighborCounter++;
        }
        if (x === actualBorrowersField.length - 1) {
          if (actualBorrowersField[y][x + 1]) statusNeighborCounter++;
          if (actualBorrowersField[y + 1][x]) statusNeighborCounter++;
          if (actualBorrowersField[y + 1][x + 1]) statusNeighborCounter++;
        }
      } else if (y === actualBorrowersField.length - 1) {
        if (x === 0) {
          if (actualBorrowersField[y][x + 1]) statusNeighborCounter++;
          if (actualBorrowersField[y - 1][x]) statusNeighborCounter++;
          if (actualBorrowersField[y - 1][x + 1]) statusNeighborCounter++;
        }
        if (x - 1 >= 1 && x + 1 < actualBorrowersField.length) {
          if (actualBorrowersField[y][x - 1]) statusNeighborCounter++;
          if (actualBorrowersField[y][x + 1]) statusNeighborCounter++;
          if (actualBorrowersField[y - 1][x - 1]) statusNeighborCounter++;
          if (actualBorrowersField[y - 1][x]) statusNeighborCounter++;
          if (actualBorrowersField[y - 1][x + 1]) statusNeighborCounter++;
        }
        if (x === actualBorrowersField.length - 1) {
          if (actualBorrowersField[y][x - 1]) statusNeighborCounter++;
          if (actualBorrowersField[y - 1][x]) statusNeighborCounter++;
          if (actualBorrowersField[y - 1][x - 1]) statusNeighborCounter++;
        }
      } else {
        if (x === 0) {
          if (actualBorrowersField[y][x + 1]) statusNeighborCounter++;
          if (actualBorrowersField[y - 1][x]) statusNeighborCounter++;
          if (actualBorrowersField[y - 1][x + 1]) statusNeighborCounter++;
          if (actualBorrowersField[y + 1][x]) statusNeighborCounter++;
          if (actualBorrowersField[y + 1][x + 1]) statusNeighborCounter++;
        }
        if (x - 1 >= 1 && x + 1 < actualBorrowersField.length) {
          if (actualBorrowersField[y - 1][x - 1]) statusNeighborCounter++;
          if (actualBorrowersField[y - 1][x]) statusNeighborCounter++;
          if (actualBorrowersField[y - 1][x + 1]) statusNeighborCounter++;
          if (actualBorrowersField[y][x - 1]) statusNeighborCounter++;
          if (actualBorrowersField[y][x + 1]) statusNeighborCounter++;
          if (actualBorrowersField[y + 1][x - 1]) statusNeighborCounter++;
          if (actualBorrowersField[y + 1][x]) statusNeighborCounter++;
          if (actualBorrowersField[y + 1][x + 1]) statusNeighborCounter++;
        }
        if (x === actualBorrowersField.length - 1) {
          if (actualBorrowersField[y - 1][x + 1]) statusNeighborCounter++;
          if (actualBorrowersField[y - 1][x]) statusNeighborCounter++;
          if (actualBorrowersField[y][x - 1]) statusNeighborCounter++;
          if (actualBorrowersField[y + 1][x - 1]) statusNeighborCounter++;
          if (actualBorrowersField[y + 1][x]) statusNeighborCounter++;
        }
      }
      neighborList.push([x, y, statusNeighborCounter]);
      statusNeighborCounter = 0;
    }
  }

  return neighborList;
}

function makeBorrowerChanges(liveBorrowers, borrowerNeighbors) {}

function makeNewBorrowerField(borrowerStatus, borrowerPosition) {}

actualBorrowerField = originalBorrowerField;

statusBorrowers = checkBorrowers(borrowersField);

console.table(originalGameTable);
