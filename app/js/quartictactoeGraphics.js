function drawBoard() {
    noStroke();
    for(var x1 = 0; x1 < 4; x1++) {
        for(var y1 = 0; y1 < 4; y1++) {
            for(var x2 = 0; x2 < 4; x2++) {
                for(var y2 = 0; y2 < 4; y2++) {
                    if(board[x1][y1][x2][y2] == 0) {
                        fill(int(12.75 * (12 - x1 - y1 - x2 - y2) + 51));
                    } else if(board[x1][y1][x2][y2] == 1) {
                        fill(int(9.5625 * (12 - x1 - y1 - x2 - y2)));
                    } else if(board[x1][y1][x2][y2] == 2) {
                        fill(int(9.5625 * (12 - x1 - y1 - x2 - y2) + 140.25));
                    }
                    rect(
						floor(x1 * width / 4 + x2 * width / 16),
						floor(y1 * width / 4 + y2 * width / 16),
						floor(width / 16),
						floor(width / 16)
					);
                }
            }
        }
    }
}

function drawPiece(x1, y1, x2, y2) {
    if(board[floor(x1)][floor(y1)][floor(x2)][floor(y2)] == 0) {
        animColor = int(12.75 * (12 - x1 - y1 - x2 - y2) + 51);
    } else if(board[x1][y1][x2][y2] == 1) {
        animColor = int(9.5625 * (12 - x1 - y1 - x2 - y2));
    } else if(board[x1][y1][x2][y2] == 2) {
        animColor = int(9.5625 * (12 - x1 - y1 - x2 - y2) + 140.25);
    }
    animCoord = [x1, y1, x2, y2];
    animating = true;
}