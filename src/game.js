const actualBorrowersField = [];
const newBorrowersField = [];
const borrowersData = [];
const fieldDimentions = [];

function generateNewBorrowersField(dimentions) {
  return Array(dimentions[1])
    .fill(false)
    .map(() => Array(dimentions[0]).fill(false));
}

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

function godChangesLives(borrowers, field) {
  const borrowerChanges = [];
  let counter = 0;

  for (let y = 0; y < field[1]; y++) {
    borrowerChanges.splice(y, 0, []);
    for (let x = 0; x < field[0]; x++) {
      if (borrowers[counter][1] === y) {
        if (borrowers[counter][0] === x) {
          if (borrowers[counter][2] === true) {
            if (borrowers[counter][3] === 2 || borrowers[counter][3] === 3) {
              borrowerChanges[y].push(true);
            } else if (borrowers[counter][3] < 2 || borrowers[counter][3] > 3) {
              borrowerChanges[y].push(false);
            }
          }
          if (borrowers[counter][2] === false) {
            if (borrowers[counter][3] === 3) {
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

module.exports = {
  generateNewBorrowersField,
  mesureBorrowersField,
  checkBorrowerNeighbors,
  godChangesLives,
};
