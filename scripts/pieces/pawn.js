var Pawn = function(config) {
    this.constructor({
        ...config,
        type: TYPES.PAWN
    });
}

Pawn.prototype = new Piece({});
Pawn.prototype.move = function(newPosition) {}

