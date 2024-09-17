var Piece = function(config) {
    this.position = config.position;
    this.color = config.color;
    this.type = config.type;
}

Piece.prototype.move = function(targetPosition) {
    let usingClass = this.constructor.name;
    let funcName = "move";
    let errMsg = `Method "${funcName}" not implemented by: ${usingClass}`;

    console.error(errMsg);
}

Piece.prototype.kill = function(targetPiece) {
    let usingClass = this.constructor.name;
    let funcName = "kill";
    let errMsg = `Method "${funcName}" not implemented by: ${usingClass}`;

    console.error(errMsg);
}

Piece.prototype.render = function() {
    let [row, col] = decodePosition(this.position);
    
    let targetSelector = `[cell-row="${row}"] [cell-col="${col}"]`;
    let targetCell = document.querySelector(targetSelector);

    targetCell.setAttribute("piece-type", this.type);
    targetCell.setAttribute("piece-color", this.color);
}

