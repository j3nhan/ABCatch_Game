const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 500;

let initialPlay = true;
let leftMove = false;
let rightMove = false;
let gameOver = true;
let score = 0;
let lives = 3;
let level = 1;
const radius = 20;
let pinkCount = 0;
let blackCount = 0;

// keys to push
document.addEventListener("keydown", keyPressed);
document.addEventListener("keyup", keyReleased);

function keyPressed(e) {
    switch (e.keyCode) {
        case 39:
            rightMove = true;
            break;
        case 37:
            leftMove = true;
            break;
        case 32:
            reset();
            break;
        default:
            alert("SPACEBAR to begin. LEFT and RIGHT arrow keys to move. ");
    }
}

function keyReleased(e) {
    switch (e.keyCode) {
        case 39:
            rightMove = false;
            break;
        case 37:
            leftMove = false;
            break;
    }
}

// player 
const player = {
	size: 50,
	x: (canvas.width - 50)/ 2,
	y: canvas.height - 50,
	color: "red"
};

function drawPlayer() {
	ctx.beginPath();
	ctx.rect(player.x, player.y, player.size, player.size);
	ctx.fillStyle = player.color;
	ctx.fill();
	ctx.closePath();
}

// ball collection
const collectible = {
	x:[],
	y:[], 
	speed: 2,
	state: []
};

const uncollectible = {
	x:[],
	y:[],
	speed: 2,
};

// draw ball 
function pinkBall() {
	for (let i = 0; i < pinkCount; i++) {
		if (collectible.state[i] === true) {		
			ctx.beginPath();
			ctx.arc(collectible.x[i], collectible.y[i], radius, 0, Math.PI * 2);
			ctx.fillStyle = "pink";
			ctx.fill();
			ctx.closePath();
		}
	}
}

function blackBall() {
	for (let i = 0; i < blackCount; i++) {
		ctx.beginPath();
		ctx.arc(uncollectible.x[i], uncollectible.y[i], radius, 0, Math.PI * 2);
		ctx.fillStyle = "black";
		ctx.fill();
		ctx.closePath();
	}
}

// random ball generator
function randomGood() {
	if (Math.random() < 0.03) {
		collectible.x.push(Math.random() * canvas.width);
		collectible.y.push(0);
		collectible.state.push(true);
	}
	pinkCount = collectible.x.length;
}

function randomBad() {
	if (Math.random() < 0.02) {
			uncollectible.x.push(Math.random() * canvas.width);
			uncollectible.y.push(0);
	}

	blackCount = uncollectible.x.length;
}

function game() {
	if (leftMove && player.x > 0) {
		player.x -= 7;
	}
	if (rightMove && player.x + player.size < canvas.width) {
		player.x += 7;
	}
	for (let i = 0; i < pinkCount; i++) {
		collectible.y[i] += collectible.speed;
	}
	for (let i = 0; i < blackCount; i++) {
		uncollectible.y[i] += uncollectible.speed;
	}
	
	for (let i = 0; i < pinkCount; i++) {
		if (collectible.state[i]) {
			if (player.x < collectible.x[i] + radius && 
				player.x + player.size + radius > collectible.x[i] && 
				player.y < collectible.y[i] + radius && 
				player.y + player.size > collectible.y[i]) {
				score++
				collectible.state[i] = false;
			}
		}

		if (collectible.y[i] + radius > canvas.height) {
			collectible.x.shift();
			collectible.y.shift();
			collectible.state.shift();
		}
	}

	for (let i = 0; i < blackCount; i++) {
		if (player.x < uncollectible.x[i] + radius && 
			player.x + player.size + radius > uncollectible.x[i] && 
			player.y < uncollectible.y[i] + radius && 
			player.y + player.size > uncollectible.y[i]) {
			lives--;
			uncollectible.y[i] = 0;

			if (lives === 0) {
				gameIsOver();
			}
		}

		if (uncollectible.y[i] + radius > canvas.height) {
			uncollectible.x.shift();
			uncollectible.y.shift();
		}
	}

	switch (score) {
		case 10:
			level = 2;
			uncollectible.speed = 3;
			collectible.speed = 3;
			break;
		case 20:
			level = 3;
			collectible.speed = 4;
			break;
		case 30: 
			level = 4;
			collectible.speed = 5;
			uncollectible.speed = 4;
			break;
	}
}

function gameIsOver() {
	collectible.x = [];
	collectible.y = [];
	uncollectible.x = [];
	uncollectible.y = [];
	collectible.state = [];
	gameOver = true;
}

function reset() {
	initialPlay = false;
	gameOver = false;
	player.color = "red";
	level = 1;
	score = 0;
	lives = 3;
	uncollectible.speed = 2;
	collectible.speed = 2;
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	if (initialPlay) {
		ctx.fillStyle = "white";
		ctx.textAlign = "center";
		ctx.font = "bold 100px Lato";
		ctx.fillText("ABCatch", canvas.width/2, 250);
		ctx.fillStyle = "black";
		ctx.font = "bold 20px Lato";
		ctx.fillText("Tap Spacebar to start game", canvas.width/2, 450)

	} else if (!gameOver) {
		ctx.fillStyle = "white";
		ctx.font = "bold 25px Lato";
		ctx.textAlign = "left"; 
		ctx.fillText("LEVEL: " + level, 10, 25); 
		ctx.textAlign = "center";
		ctx.fillText("SCORE: " + score, 300 , 25); 
		ctx.textAlign = "right";
		ctx.fillText("LIVES: " + lives, 590 , 25); 

		drawPlayer();
		blackBall();
		pinkBall();
		game();
		randomGood();
		randomBad();

	} else {
		ctx.fillStyle = "white";
		ctx.font = "bold 80px Lato";
		ctx.textAlign = "center";
		ctx.fillText("GAME OVER", canvas.width/2, 200);
		ctx.fillStyle = "black";
		ctx.font = "bold 30px Lato";
		ctx.fillText("FINAL SCORE: " + score, canvas.width/2, 260);
	}

	requestAnimationFrame(draw);
}

draw();

