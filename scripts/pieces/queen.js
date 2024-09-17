var Queen = function(config) {
    this.constructor({
        ...config,
        type: TYPES.QUEEN
    });
}

Queen.prototype = new Piece({});
Queen.prototype.move = function(newPosition) {}

