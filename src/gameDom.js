function generateGameField() {
  const gameField = document.getElementsByClassName(
    "main-content__square-containter"
  )[0];
  const valueX = document.getElementById("valueX").value;
  const valueY = document.getElementById("valueY").value;

  const table = document.createElement("table");
  const tableBody = document.createElement("tbody");

  for (let y = 0; y < valueX; y++) {
    const row = document.createElement("tr");

    for (let x = 0; x < valueY; x++) {
      const cell = document.createElement("td");
      const cellText = document.createTextNode(``);

      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    tableBody.appendChild(row);
  }

  table.appendChild(tableBody);

  gameField.appendChild(table);

  table.setAttribute("class", "main-content__single-block");
}
