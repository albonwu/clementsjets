var board = createArray([4, 4, 4, 4]);
var lastPlace = new Array(4);
var turn = 0;
var playerCount = 2;
var gameOver = false;
var thueMorse = "0";
var turnNum = 0;
var animating = false;
var animCoord = new Array(5);
var animFrame = 0;
var animSpeed = 0.2;
var animColor = 0;
var check = createArray([4, 4]);//each row is the coordinates of a piece
var results = new Array(4);

function createArray(dimensions) {
    if (dimensions.length > 0) {
        var dim = dimensions[0];
        var rest = dimensions.slice(1);
        var newArray = new Array();
        for (var i = 0; i < dim; i++) {
            newArray[i] = createArray(rest);
        }
        return newArray;
     } else {
        return 0;
     }
 }

function touchEnded() {
    if(!gameOver && !animating) {
        placePiece(mouseX, mouseY);
    }
}

function setup() {
    createCanvas(floor(window.innerHeight / 17) * 16, floor(window.innerHeight / 17) * 17);
    drawBoard();
    for(var a = 0; a < 16; a++) {
        if(!thueMorseDigit(turnNum + a)) {
            fill(8 * a);
        } else {
            fill(255 - 8 * a);
        }
        rect(floor(a * width / 16), width, ceil(width / 16) + 1, height - width);
    }
}

function draw() {
    if(animating) {
        fill(animColor);
        rect(
            floor(animCoord[0] * width / 4 + animCoord[2] * width / 16 + (1 - animFrame) * width / 32),
            floor(animCoord[1] * width / 4 + animCoord[3] * width / 16 + (1 - animFrame) * width / 32),
            floor(animFrame * width / 16),
            floor(animFrame * width / 16)
        );
        for(var a = 0; a < 17; a++) {
            if(!thueMorseDigit((turnNum + a - 1))) {
                fill(8 * (a - animFrame));
            } else {
                fill(255 - 8 * (a - animFrame));
            }
            rect(floor((a - animFrame) * width / 16), width, ceil(width / 16) + 1, height - width);
        }
        animFrame += animSpeed;
        if(animFrame > 1) {
            animating = false;
            animFrame = 0;
            for(var a = 0; a < 16; a++) {
                if(!thueMorseDigit(turnNum + a)) {
                    fill(8 * a);
                } else {
                    fill(255 - 8 * a);
                }
                rect(floor(a * width / 16), width, ceil(width / 16) + 1, height - width);
            }
			fill(animColor);
			rect(
				floor(animCoord[0] * width / 4 + animCoord[2] * width / 16),
				floor(animCoord[1] * width / 4 + animCoord[3] * width / 16),
				floor(width / 16),
				floor(width / 16)
			);
        }
    } else {
        if(gameOver) {
            drawBoard();
			if(results[0] == 1) {
				stroke(255);
				fill(255);
			} else {
				stroke(0);
				fill(0);
			}
			strokeWeight(width / 150);
			line(
				(check[0][0] * width / 4 + check[0][2] * width / 16 + width / 32),
				(check[0][1] * width / 4 + check[0][3] * width / 16 + width / 32),
				(check[3][0] * width / 4 + check[3][2] * width / 16 + width / 32),
				(check[3][1] * width / 4 + check[3][3] * width / 16 + width / 32)
			);
			noStroke();
			for(var a = 0; a < 4; a++) {
				ellipse(
					(check[a][0] * width / 4 + check[a][2] * width / 16 + width / 32),
					(check[a][1] * width / 4 + check[a][3] * width / 16 + width / 32),
					width / 75,
					width / 75
				);
			}
        }
    }
}