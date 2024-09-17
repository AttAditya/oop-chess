var Bishop = function(config) {
    this.constructor({
        ...config,
        type: TYPES.BISHOP
    });
}

Bishop.prototype = new Piece({});
Bishop.prototype.move = function(newPosition) {}

