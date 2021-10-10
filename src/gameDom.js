let fieldDimentions = [];
let actualBorrowersField = [];
let borrowersList = [];
let temporalField = [];
let borrowerStatus = [];

function generateNewBorrowersField(dimentions) {
  return Array(dimentions[1])
    .fill(false)
    .map(() => Array(dimentions[0]).fill(false));
}

function placeBorrowersInField(borrowers, field) {
  const miniField = [];
  counter = 0;
  for (let y = 0; y < field.length; y++) {
    for (let x = 0; x < field[0].length; x++) {
      miniField[y][x] = field[y].splice([x], 1, borrowers[counter][2]);
      counter++;
    }
  }

  return miniField;
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

function generateGameField() {
  const gameField = document.getElementsByClassName(
    "main-content__square-containter"
  )[0];
  const fieldDimentionSelectors = document.getElementsByClassName(
    "main-content__generate-field"
  )[0];
  const startButton = document.getElementsByClassName("main-content__start")[0];
  const stopButton = document.getElementsByClassName("main-content__stop")[0];
  const resetButton = document.getElementsByClassName("main-content__reset")[0];
  const valueX = document.getElementById("valueX").value;
  const valueY = document.getElementById("valueY").value;
  const table = document.createElement("table");
  const tableBody = document.createElement("tbody");

  fieldDimentions[0] = parseInt(valueY);
  fieldDimentions[1] = parseInt(valueX);

  for (let y = 0; y < valueX; y++) {
    const row = document.createElement("tr");

    for (let x = 0; x < valueY; x++) {
      const cell = document.createElement("td");
      const cellText = document.createTextNode(``);
      cell.setAttribute("class", `grass`);
      cell.setAttribute("position", `[${y},${x}]`);
      cell.setAttribute("onclick", "placeBorrowers()");

      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    tableBody.appendChild(row);
  }

  table.appendChild(tableBody);

  gameField.appendChild(table);

  table.setAttribute("class", "main-content__single-block");

  fieldDimentionSelectors.setAttribute(
    "class",
    "main-content__generate-field disappear"
  );

  startButton.setAttribute("class", "main-content__start");

  stopButton.setAttribute("class", "main-content__stop");

  resetButton.setAttribute("class", "main-content__reset");
}

function placeBorrowers() {
  window.onclick = (field) => {
    const borrowerInfo = field.target;
    const borrowerClassName = borrowerInfo.className;

    if (
      borrowerClassName === "grass" ||
      borrowerClassName === "borrower01" ||
      borrowerClassName === "borrower02" ||
      borrowerClassName === "borrower03" ||
      borrowerClassName === "borrower04"
    ) {
      if (borrowerClassName === "grass") {
        borrowerInfo.className = "borrower01";
      }
      if (borrowerClassName === "borrower01") {
        borrowerInfo.className = "grass";
      }
      if (borrowerClassName === "borrower02") {
        borrowerInfo.className = "grass";
      }
      if (borrowerClassName === "borrower03") {
        borrowerInfo.className = "grass";
      }
      if (borrowerClassName === "borrower04") {
        borrowerInfo.className = "grass";
      }
    }
  };
}

function borrowers() {
  const htmlField = document.getElementsByTagName("td");
  let borrowerTrueOrFalse;

  for (let i = 0; i < htmlField.length; i++) {
    let position = htmlField[i].attributes.position.value.substr(1, 3);
    position = position.split(",");

    const { className } = htmlField[i];

    if (className === "grass") {
      borrowerTrueOrFalse = false;
    }

    if (
      className === "borrower01" ||
      className === "borrower02" ||
      className === "borrower03" ||
      className === "borrower04"
    ) {
      borrowerTrueOrFalse = true;
    }
    borrowerStatus.push([position[1], position[0], borrowerTrueOrFalse]);
  }
}

function placeNewGenerationOfBorrowers(newField) {
  const field = document.getElementsByClassName(
    "main-content__single-block"
  )[0];

  field.remove();

  const gameField = document.getElementsByClassName(
    "main-content__square-containter"
  )[0];
  const valueX = fieldDimentions[1];
  const valueY = fieldDimentions[0];
  const table = document.createElement("table");
  const tableBody = document.createElement("tbody");

  for (let y = 0; y < valueX; y++) {
    const row = document.createElement("tr");

    for (let x = 0; x < valueY; x++) {
      const cell = document.createElement("td");
      const cellText = document.createTextNode(``);

      if (newField[y][x]) {
        cell.setAttribute("class", `borrower01`);
      } else {
        cell.setAttribute("class", `grass`);
      }

      cell.setAttribute("position", `[${y},${x}]`);

      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    tableBody.appendChild(row);
  }

  table.appendChild(tableBody);

  gameField.appendChild(table);

  table.setAttribute("class", "main-content__single-block");
}

function cicleOfLife() {
  // debugger;
  actualBorrowersField = generateNewBorrowersField(fieldDimentions);

  temporalField = placeBorrowersInField(borrowerStatus, actualBorrowersField);

  borrowersList = checkBorrowerNeighbors(temporalField);

  actualBorrowersField = godChangesLives(borrowersList, temporalField);

  placeNewGenerationOfBorrowers(actualBorrowersField);

  temporalField = [];
}

function startGame() {
  borrowers();

  cicleOfLife();
}

function resetGame() {
  const fieldDimentionSelectors = document.getElementsByClassName(
    "main-content__generate-field"
  )[0];
  const startButton = document.getElementsByClassName("main-content__start")[0];
  const stopButton = document.getElementsByClassName("main-content__stop")[0];
  const resetButton = document.getElementsByClassName("main-content__reset")[0];
  const field = document.getElementsByClassName(
    "main-content__single-block"
  )[0];

  field.remove();

  fieldDimentionSelectors.setAttribute("class", "main-content__generate-field");

  startButton.setAttribute("class", "main-content__start disappear");

  stopButton.setAttribute("class", "main-content__stop disappear");

  resetButton.setAttribute("class", "main-content__reset disappear");

  fieldDimentions = [];
  actualBorrowersField = [];
  borrowersList = [];
  temporalField = [];
  borrowerStatus = [];
}
