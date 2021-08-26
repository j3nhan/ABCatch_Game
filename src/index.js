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
let letterCount = 0;
let wormCount = 0;

const book = new Image();
book.src = "src/images/book.png";

const letter = new Image();
letter.src = "src/images/letters.png"

const worm = new Image();
worm.src = "src/images/worm.png"

// keys to push

let keys = {};
window.addEventListener("keydown",
    function(e){
        keys[e.code] = true;
        switch(e.code){
			case "ArrowLeft": 
				leftMove = true;
				e.preventDefault(); 
				break;
			case "ArrowRight":
				rightMove = true;
				e.preventDefault(); 
				break;
            case "Space": 
				reset();
				e.preventDefault(); 
				break;
            default: 
				alert("SPACEBAR to begin. LEFT and RIGHT arrow keys to move. ");
				e.preventDefault(); 
				break;
        }
    },
	false);

window.addEventListener("keyup",
    function(e){
        keys[e.code] = false;
		rightMove = false;
		leftMove = false;
    },
false);

// player 
const player = {
	size: 50,
	x: (canvas.width - 50)/ 2,
	y: canvas.height - 50,
};

function drawPlayer() {
	ctx.beginPath();
	ctx.rect(player.x, player.y, player.size, player.size);
	ctx.closePath();
	ctx.drawImage(book, player.x, player.y, player.size, player.size);
}

// collections
const collectible = {
	x:[],
	y:[], 
	speed: 3,
	state: []
};

const uncollectible = {
	x:[],
	y:[],
	speed: 3,
};

// draw letter
const spriteWidth = 576/4;
const spriteHeight = 792/7;

function drawLetter() {
	for (let i = 0; i < letterCount; i++) {
		if (collectible.state[i] === true) {		
			ctx.beginPath();
			ctx.arc(collectible.x[i], collectible.y[i], radius, 0, Math.PI * 2);
			ctx.closePath();
			
			ctx.drawImage(letter, 0, 0, spriteWidth, spriteHeight, collectible.x[i] - 20, collectible.y[i] - 20, radius * 2, radius * 2)
		}
	}
}

// draw worm
function drawWorm() {
	for (let i = 0; i < wormCount; i++) {
		ctx.beginPath();
		ctx.arc(uncollectible.x[i], uncollectible.y[i], radius, 0, Math.PI * 2);
		ctx.closePath();

		ctx.drawImage(worm, 0, 0, 1214, 787, uncollectible.x[i] - 20, uncollectible.y[i] - 15, radius * 2, radius * 2)
	}
}

// random generator
function randomGood() {
	if (Math.random() < 0.03) {
		collectible.x.push(Math.random() * canvas.width);
		collectible.y.push(0);
		collectible.state.push(true);
	}
	letterCount = collectible.x.length;
}

function randomBad() {
	if (Math.random() < 0.02) {
			uncollectible.x.push(Math.random() * canvas.width);
			uncollectible.y.push(0);
	}

	wormCount = uncollectible.x.length;
}

// catch object and track score 
function game() {
	if (leftMove && player.x > 0) {
		player.x -= 7;
	}
	if (rightMove && player.x + player.size < canvas.width) {
		player.x += 7;
	}
	for (let i = 0; i < letterCount; i++) {
		collectible.y[i] += collectible.speed;
	}
	for (let i = 0; i < wormCount; i++) {
		uncollectible.y[i] += uncollectible.speed;
	}
	
	for (let i = 0; i < letterCount; i++) {
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

	for (let i = 0; i < wormCount; i++) {
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
			uncollectible.speed = 4;
			collectible.speed = 4;
			break;
		case 20:
			level = 3;
			collectible.speed = 5;
			break;
		case 30: 
			level = 4;
			collectible.speed = 6;
			uncollectible.speed = 4;
			break;
		case 40: 
			level = 5;
			collectible.speed = 7;
			uncollectible.speed = 5;
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
		ctx.font = "oblique bold 100px Lato";
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
		drawWorm();
		drawLetter();
		game();
		randomGood();
		randomBad();

	} else {
		ctx.fillStyle = "white";
		ctx.font = "oblique bold 80px Lato";
		ctx.textAlign = "center";
		ctx.fillText("GAME OVER", canvas.width/2, 200);
		ctx.fillStyle = "black";
		ctx.font = "bold 30px Lato";
		ctx.fillText("Final Score: " + score, canvas.width/2, 260);
	}

	requestAnimationFrame(draw);
}

draw();

