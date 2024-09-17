var King = function(config) {
    this.constructor({
        ...config,
        type: TYPES.KING
    });
}

King.prototype = new Piece({});
King.prototype.move = function(newPosition) {}

