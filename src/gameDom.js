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

  for (let y = 0; y < valueX; y++) {
    const row = document.createElement("tr");

    for (let x = 0; x < valueY; x++) {
      const cell = document.createElement("td");
      const cellText = document.createTextNode(``);
      cell.setAttribute("class", `grass`);
      cell.setAttribute("position", `[${y},${x}]`);
      cell.setAttribute("value", "false");
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

    if (
      borrowerInfo.className === "grass" ||
      borrowerInfo.className === "borrower01" ||
      borrowerInfo.className === "borrower02" ||
      borrowerInfo.className === "borrower03" ||
      borrowerInfo.className === "borrower04"
    ) {
      let position = borrowerInfo.attributes.position.value.substr(1, 3);
      position = position.split(",");
      let borrowerStatus = borrowerInfo.attributes.value.value;

      if (borrowerStatus) {
        borrowerStatus = true;
        borrowerInfo.className = "borrower01";
      } else {
        borrowerStatus = false;
        borrowerInfo.className = "grass";
      }
    }
  };
}
