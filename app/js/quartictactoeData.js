function winner() {
    var counter = 1;
    while(counter <= 1295) {
        var str = ("0000" + counter.toString(6)).substr(-4, 4);
        if(str.indexOf('4') != -1) {
            var directions = [
				parseInt(str.charAt(0)),
				parseInt(str.charAt(1)),
				parseInt(str.charAt(2)),
				parseInt(str.charAt(3))
			];
            var testIt = true;
            for(var a = 0; a < 4; a++) {
                if(directions[a] < 4 && directions[a] != lastPlace[a]) {
                    testIt = false;
                }
            }
            if(testIt) {
                for(var piece = 0; piece < 4; piece++) {
                    for(var coord = 0; coord < 4; coord++) {
                        if(directions[coord] < 4) {
                            check[piece][coord] = directions[coord];
                        } else if(directions[coord] == 4) {
                            check[piece][coord] = piece;
                        } else {
                            check[piece][coord] = (3 - piece);
                        }
                    }
                }
                for(var a = 0; a < 4; a++) {
                    results[a] = board[check[a][0]][check[a][1]][check[a][2]][check[a][3]];
                }
                if(results[0] != 0 && results[0] == results[1] && results[1] == results[2] && results[2] == results[3]) {
					return results[0];
                }
            }
        }
        counter++;
    }
    return 0;
}

function thueMorseDigit(index) {
    while(thueMorse.length <= index) {
        thueMorse = thueMorse.replace(/0/g, "a").replace(/1/g, "10").replace(/a/g, "01");
    }
    if(thueMorse.charAt(index) == '0') {
        return false;
    }
    return true;
}

function placePiece(x, y) {
    if(board[floor(16 * x / width / 4)][floor(16 * y / width / 4)][floor(16 * x / width % 4)][floor(16 * y / width % 4)] == 0) {
        board[floor(16 * x / width / 4)][floor(16 * y / width / 4)][floor(16 * x / width % 4)][floor(16 * y / width % 4)] = (turn + 1);
        lastPlace = [
			floor(16 * x / width / 4),
			floor(16 * y / width / 4),
			floor(16 * x / width % 4),
			floor(16 * y / width % 4)
		];
        drawPiece(lastPlace[0], lastPlace[1], lastPlace[2], lastPlace[3]);
        turnNum++;
        if(thueMorseDigit(turnNum)) {
            turn = 1;
        } else {
            turn = 0;
        }
        var won = winner();
        if(won != 0) {
            gameOver = true;
        }
    }
}