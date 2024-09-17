let rows = "12345678";
let cols = "ABCDEFGH";

let posRowIdx = 1;
let posColIdx = 0;

let encodePosition = function(row, col) {
    let rowIdx = row - 1;
    let colIdx = col - 1;

    let rowValue = rows[rowIdx];
    let colValue = cols[colIdx];

    let position = [-1, -1];

    position[posRowIdx] = rowValue;
    position[posColIdx] = colValue;

    let posString = position.join('');

    return posString;
}

let decodePosition = function(chessPosition) {
    let rows = "12345678";
    let cols = "ABCDEFGH";

    let posRowIdx = 1;
    let posColIdx = 0;

    let row = rows.indexOf(chessPosition[posRowIdx]);
    let col = cols.indexOf(chessPosition[posColIdx]);

    row++;
    col++;

    return [row, col];
}

