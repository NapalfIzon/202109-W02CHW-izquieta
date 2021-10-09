const actualBorrowersField = [
  [false, false, false, false, false, false, false, false, false, false],
  [false, true, true, true, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, true, false, false, false, false, false],
  [false, false, false, false, true, false, false, false, false, false],
  [false, false, false, false, true, false, false, false, false, false],
  [false, false, false, false, false, false, true, true, true, false],
  [false, true, false, false, false, false, false, false, false, false],
  [false, true, false, false, false, false, false, false, false, false],
  [false, true, false, false, false, false, false, false, false, false],
];
let newBorrowersField = [];
const borrowerNeighbors = []; // [x, y, borrowerStatus, neighborCounter]
let fieldDimentions;

function mesureBorrowersField(field) {
  return [field[0].length, field.length];
}

function checkBorrowerNeighbors(borrowersField) {
  const neighborList = [];
  let statusNeighborCounter = 0;
  for (let y = 0; y < borrowersField.length; y++) {
    for (let x = 0; x < borrowersField[y].length; x++) {
      if (y === 0) {
        if (x === 0) {
          if (borrowersField[y][x + 1]) statusNeighborCounter++;
          if (borrowersField[y + 1][x]) statusNeighborCounter++;
          if (borrowersField[y + 1][x + 1]) statusNeighborCounter++;
        }
        if (x - 1 >= 0 && x + 1 < borrowersField.length) {
          if (borrowersField[y][x - 1]) statusNeighborCounter++;
          if (borrowersField[y][x + 1]) statusNeighborCounter++;
          if (borrowersField[y + 1][x - 1]) statusNeighborCounter++;
          if (borrowersField[y + 1][x]) statusNeighborCounter++;
          if (borrowersField[y + 1][x + 1]) statusNeighborCounter++;
        }
        if (x === borrowersField.length - 1) {
          if (borrowersField[y][x + 1]) statusNeighborCounter++;
          if (borrowersField[y + 1][x]) statusNeighborCounter++;
          if (borrowersField[y + 1][x - 1]) statusNeighborCounter++;
        }
      } else if (y === borrowersField.length - 1) {
        if (x === 0) {
          if (borrowersField[y][x + 1]) statusNeighborCounter++;
          if (borrowersField[y - 1][x]) statusNeighborCounter++;
          if (borrowersField[y - 1][x + 1]) statusNeighborCounter++;
        }
        if (x - 1 >= 0 && x + 1 < borrowersField.length) {
          if (borrowersField[y][x - 1]) statusNeighborCounter++;
          if (borrowersField[y][x + 1]) statusNeighborCounter++;
          if (borrowersField[y - 1][x - 1]) statusNeighborCounter++;
          if (borrowersField[y - 1][x]) statusNeighborCounter++;
          if (borrowersField[y - 1][x + 1]) statusNeighborCounter++;
        }
        if (x === borrowersField.length - 1) {
          if (borrowersField[y][x - 1]) statusNeighborCounter++;
          if (borrowersField[y - 1][x]) statusNeighborCounter++;
          if (borrowersField[y - 1][x - 1]) statusNeighborCounter++;
        }
      } else {
        if (x === 0) {
          if (borrowersField[y][x + 1]) statusNeighborCounter++;
          if (borrowersField[y - 1][x]) statusNeighborCounter++;
          if (borrowersField[y - 1][x + 1]) statusNeighborCounter++;
          if (borrowersField[y + 1][x]) statusNeighborCounter++;
          if (borrowersField[y + 1][x + 1]) statusNeighborCounter++;
        }
        if (x - 1 >= 0 && x + 1 < borrowersField.length) {
          if (borrowersField[y - 1][x - 1]) statusNeighborCounter++;
          if (borrowersField[y - 1][x]) statusNeighborCounter++;
          if (borrowersField[y - 1][x + 1]) statusNeighborCounter++;
          if (borrowersField[y][x - 1]) statusNeighborCounter++;
          if (borrowersField[y][x + 1]) statusNeighborCounter++;
          if (borrowersField[y + 1][x - 1]) statusNeighborCounter++;
          if (borrowersField[y + 1][x]) statusNeighborCounter++;
          if (borrowersField[y + 1][x + 1]) statusNeighborCounter++;
        }
        if (x === borrowersField.length - 1) {
          if (borrowersField[y - 1][x + 1]) statusNeighborCounter++;
          if (borrowersField[y - 1][x]) statusNeighborCounter++;
          if (borrowersField[y][x - 1]) statusNeighborCounter++;
          if (borrowersField[y + 1][x - 1]) statusNeighborCounter++;
          if (borrowersField[y + 1][x]) statusNeighborCounter++;
        }
      }
      neighborList.push([x, y, borrowersField[y][x], statusNeighborCounter]);
      statusNeighborCounter = 0;
    }
  }

  return neighborList;
}

function godChangesLives(borrowersData, field) {
  const borrowerChanges = [];
  let counter = 0;

  for (let y = 0; y < field[1]; y++) {
    borrowerChanges.splice(y, 0, []);
    for (let x = 0; x < field[0]; x++) {
      if (borrowersData[counter][1] === y) {
        if (borrowersData[counter][0] === x) {
          if (borrowersData[counter][2] === true) {
            if (
              borrowersData[counter][3] === 2 ||
              borrowersData[counter][3] === 3
            ) {
              borrowerChanges[y].push(true);
            } else if (
              borrowersData[counter][3] < 2 ||
              borrowersData[counter][3] > 3
            ) {
              borrowerChanges[y].push(false);
            }
          }
          if (borrowersData[counter][2] === false) {
            if (borrowersData[counter][3] === 3) {
              borrowerChanges[y].push(true);
            } else {
              borrowerChanges[y].push(false);
            }
          }
        }
      }
      counter++;
    }
  }

  return borrowerChanges;
}

fieldDimentions = mesureBorrowersField(actualBorrowersField);

borrowersData = checkBorrowerNeighbors(actualBorrowersField);

newBorrowersField = godChangesLives(borrowersData, fieldDimentions);

console.log("Este es el campo actual de borrowers");
console.log("------------------------------------");

console.table(actualBorrowersField);

console.log(
  "-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
);
console.log(" ");
console.log("Este es el campo de borrowers después de la criba");
console.log("-------------------------------------------------");

console.table(newBorrowersField);
