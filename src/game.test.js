const {
  generateNewBorrowersField,
  mesureBorrowersField,
  checkBorrowerNeighbors,
  godChangesLives,
} = require("./game");

describe("Al testear la función generateNewBorrowersField,", () => {
  test("cuando le pasamos un array [3,1], devuelve un array [3][1]", () => {
    const dimension = [3, 1];
    const expected = [[false, false, false]];

    const result = generateNewBorrowersField(dimension);

    expect(expected).toEqual(result);
  });

  test("cuando le pasamos un array [1,3], devuelve un array [1][3]", () => {
    const dimension = [1, 3];
    const expected = [[false], [false], [false]];

    const result = generateNewBorrowersField(dimension);

    expect(expected).toEqual(result);
  });

  test("cuando le pasamos un array [5,5], devuelve un array [5][5]", () => {
    const dimension = [5, 5];
    const expected = [
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
    ];

    const result = generateNewBorrowersField(dimension);

    expect(expected).toEqual(result);
  });
});

describe("Al testear la función mesureBorrowersField,", () => {
  test("cuando le pasamos un array [3][1], devuelve un array igual a [3,1]", () => {
    const test = [[false, false, false]];
    const expected = [3, 1];

    const result = mesureBorrowersField(test);

    expect(expected).toEqual(result);
  });

  test("cuando le pasamos un array [3][1], devuelve un array igual a [3,1]", () => {
    const test = [[false, false, false]];
    const expected = [3, 1];

    const result = mesureBorrowersField(test);

    expect(expected).toEqual(result);
  });

  test("cuando le pasamos un array [5][5], devuelve un array igual a [5,5]", () => {
    const test = [
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
    ];
    const expected = [5, 5];

    const result = mesureBorrowersField(test);

    expect(expected).toEqual(result);
  });
});

describe("Al testear la función checkBorrowerNeighbors,", () => {
  test("en un campo de 5x5, para un borrower vivo en posición [2,0] y con 3 vecinos, devuelve un array igual a [2, 0, true, 3]", () => {
    const test = [
      [false, true, true, true, false],
      [false, true, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
    ];
    const expected = [2, 0, true, 3];

    const fieldValoration = checkBorrowerNeighbors(test);
    const result = fieldValoration[2];

    expect(expected).toEqual(result);
  });

  test("en un campo de 5x5, para un borrower vivo en posición [0,0] y con 2 vecinos, devuelve un array igual a [0, 0, true, 2]", () => {
    const test = [
      [true, true, true, true, false],
      [false, true, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
    ];
    const expected = [0, 0, true, 2];

    const fieldValoration = checkBorrowerNeighbors(test);
    const result = fieldValoration[0];

    expect(expected).toEqual(result);
  });

  test("en un campo de 4x4, para un borrower muerto en posición [3,3] y con 2 vecinos, devuelve un array igual a [3, 3, false, 2]", () => {
    const test = [
      [true, true, true, true],
      [false, true, false, false],
      [false, false, true, true],
      [false, false, false, false],
    ];
    const expected = [3, 3, false, 2];

    const fieldValoration = checkBorrowerNeighbors(test);
    const result = fieldValoration[15];

    expect(expected).toEqual(result);
  });
});

describe("Al testear la función godChangesLives,", () => {
  test("en un campo de 5x5, para un borrower vivo en posición [3,3] sin vecinos, devuelve un array con el borrower en esa posició muerto", () => {
    const test = [
      [false, true, true, true, false],
      [false, true, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
    ];
    const expected = false;

    const fieldDimentions = mesureBorrowersField(test);
    const borrowersData = checkBorrowerNeighbors(test);
    const changeBorrowersOnField = godChangesLives(
      borrowersData,
      fieldDimentions
    );
    const result = changeBorrowersOnField[3][3];

    expect(expected).toEqual(result);
  });

  test("en un campo de 5x5, para un borrower vivo en posición [3,0] con 1 vecino, devuelve un array con el borrower en esa posició muerto", () => {
    const test = [
      [false, true, true, true, false],
      [false, true, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
    ];
    const expected = false;

    const fieldDimentions = mesureBorrowersField(test);
    const borrowersData = checkBorrowerNeighbors(test);
    const changeBorrowersOnField = godChangesLives(
      borrowersData,
      fieldDimentions
    );
    const result = changeBorrowersOnField[0][3];

    expect(expected).toEqual(result);
  });

  test("en un campo de 5x5, para un borrower vivo en posición [1,1] con 2 vecinos, devuelve un array con el borrower en esa posició vivo", () => {
    const test = [
      [false, true, true, true, false],
      [false, true, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
    ];
    const expected = true;

    const fieldDimentions = mesureBorrowersField(test);
    const borrowersData = checkBorrowerNeighbors(test);
    const changeBorrowersOnField = godChangesLives(
      borrowersData,
      fieldDimentions
    );
    const result = changeBorrowersOnField[1][1];

    expect(expected).toEqual(result);
  });

  test("en un campo de 5x5, para un borrower vivo en posición [2,3] con 3 vecinos, devuelve un array con el borrower en esa posició vivo", () => {
    const test = [
      [false, true, true, true, false],
      [false, true, false, true, false],
      [false, false, true, true, false],
      [false, true, true, false, false],
      [false, true, false, false, false],
    ];
    const expected = true;

    const fieldDimentions = mesureBorrowersField(test);
    const borrowersData = checkBorrowerNeighbors(test);
    const changeBorrowersOnField = godChangesLives(
      borrowersData,
      fieldDimentions
    );
    const result = changeBorrowersOnField[2][3];

    expect(expected).toEqual(result);
  });

  test("en un campo de 5x5, para un borrower vivo en posición [1,2] con 4 vecinos, devuelve un array con el borrower en esa posició muerto", () => {
    const test = [
      [false, true, true, true, false],
      [false, true, true, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
    ];
    const expected = false;

    const fieldDimentions = mesureBorrowersField(test);
    const borrowersData = checkBorrowerNeighbors(test);
    const changeBorrowersOnField = godChangesLives(
      borrowersData,
      fieldDimentions
    );
    const result = changeBorrowersOnField[1][2];

    expect(expected).toEqual(result);
  });

  test("en un campo de 5x5, para un borrower muerto en posición [2,3] sin vecinos, devuelve un array con el borrower en esa posició muerto", () => {
    const test = [
      [false, true, true, true, false],
      [false, true, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
    ];
    const expected = false;

    const fieldDimentions = mesureBorrowersField(test);
    const borrowersData = checkBorrowerNeighbors(test);
    const changeBorrowersOnField = godChangesLives(
      borrowersData,
      fieldDimentions
    );
    const result = changeBorrowersOnField[2][3];

    expect(expected).toEqual(result);
  });

  test("en un campo de 5x5, para un borrower muerto en posición [2,1] con 1 vecino, devuelve un array con el borrower en esa posició muerto", () => {
    const test = [
      [false, true, true, true, false],
      [false, true, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
    ];
    const expected = false;

    const fieldDimentions = mesureBorrowersField(test);
    const borrowersData = checkBorrowerNeighbors(test);
    const changeBorrowersOnField = godChangesLives(
      borrowersData,
      fieldDimentions
    );
    const result = changeBorrowersOnField[2][1];

    expect(expected).toEqual(result);
  });

  test("en un campo de 5x5, para un borrower muerto en posición [1,3] con 2 vecinos, devuelve un array con el borrower en esa posició muerto", () => {
    const test = [
      [false, true, true, true, false],
      [false, true, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
    ];
    const expected = false;

    const fieldDimentions = mesureBorrowersField(test);
    const borrowersData = checkBorrowerNeighbors(test);
    const changeBorrowersOnField = godChangesLives(
      borrowersData,
      fieldDimentions
    );
    const result = changeBorrowersOnField[1][3];

    expect(expected).toEqual(result);
  });

  test("en un campo de 5x5, para un borrower muerto en posición [2,2] con 3 vecinos, devuelve un array con el borrower en esa posició vivo", () => {
    const test = [
      [false, false, false, false, false],
      [false, false, true, false, false],
      [false, true, false, true, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
    ];
    const expected = true;

    const fieldDimentions = mesureBorrowersField(test);
    const borrowersData = checkBorrowerNeighbors(test);
    const changeBorrowersOnField = godChangesLives(
      borrowersData,
      fieldDimentions
    );
    const result = changeBorrowersOnField[2][2];

    expect(expected).toEqual(result);
  });

  test("en un campo de 5x5, para un borrower muerto en posición [3,1] con 4 vecinos, devuelve un array con el borrower en esa posició muerto", () => {
    const test = [
      [false, true, true, true, false],
      [false, true, false, false, false],
      [false, true, false, false, false],
      [true, false, true, false, false],
      [false, true, false, false, false],
    ];
    const expected = false;

    const fieldDimentions = mesureBorrowersField(test);
    const borrowersData = checkBorrowerNeighbors(test);
    const changeBorrowersOnField = godChangesLives(
      borrowersData,
      fieldDimentions
    );
    const result = changeBorrowersOnField[3][1];

    expect(expected).toEqual(result);
  });
});
