var Knight = function(config) {
    this.constructor({
        ...config,
        type: TYPES.KNIGHT
    });
}

Knight.prototype = new Piece({});
Knight.prototype.move = function(newPosition) {}

