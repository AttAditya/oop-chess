(function() {
    var board = new Board({
        root_id: "chess-board"
    });

    for (let row = 1; row <= 8; row++) {
        for (let col = 1; col <= 8; col++) {
            new King({
                color: COLOR.DARK,
                position: encodePosition(row, col)
            }).render();
        }
    }
})();