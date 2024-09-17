var Rook = function(config) {
    this.constructor({
        ...config,
        type: TYPES.ROOK
    });
}

Rook.prototype = new Piece({});
Rook.prototype.move = function(newPosition) {}

