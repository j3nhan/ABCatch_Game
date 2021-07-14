
window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 700;
    canvas.height = 500;

    // const showScore = document.querySelector('#score');

    let leftMove = false;
    let rightMove = false;
    // let gameFrame = 0;
    let radius = 20;
    let level = 1;
    let track = 0;
    let badTrack = 0;
    let score = 0;
    let lives = 3;
    let gameOver = true;
    

    // arrows
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
            case (32 && gameOver):
                playAgain();
                break;
            default:
                alert("LEFT and RIGHT arrow keys only!!!");
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
        size: 20,
        x: Math.floor(canvas.width - 20) / 2,
        y: Math.floor(canvas.height - 20),
        color: "red"
    }

    function drawPlayer() {
        ctx.beginPath();
        ctx.rect(player.x, player.y, player.size, player.size);
        ctx.fillStyle = player.color;
        ctx.fill();
        ctx.closePath();
    }

    function movePlayer() {
        if (leftMove && player.x > 0) {
            player.x -= 8;
        } else if (rightMove && player.x + player.size < canvas.width) {
            player.x += 8;
        }
    }
    
    // collectable
    let collectable = {
        x: [],
        y: [],
        speed: 2,
        color: "green",
        state: []
    };
    
    // add value to x property of collectable
    let greenNum = 0;
    function randomGood() {
        if (Math.random() < 0.02) {
            collectable.x.push(Math.random() * canvas.width);
            collectable.y.push(0);
            collectable.state.push(true);
        }
        greenNum = collectable.x.length;
    }

    // uncollectable
    let uncollectable = {
        x: [],
        y: [],
        speed: 2,
        color: "black"
    };
    
    // add value to x property of uncollectable
    let blackNum = 0;
    function randomBad() {
        if (score < 30) {
            if (Math.random() < 0.05) {
                uncollectable.x.push(Math.random() * canvas.width);
                uncollectable.y.push(0);
            } else if (score < 50) {
                if (Math.random() < 0.1) {
                    uncollectable.x.push(Math.random() * canvas.width);
                    uncollectable.y.push(0);
                }
            } else {
                if (Math.random() < 0.2) {
                    uncollectable.x.push(Math.random() * canvas.width);
                    uncollectable.y.push(0);
                }
            }
        }

        blackNum = uncollectable.x.length;
    }

    // draw green ball
    function drawGreenball() {
        for (let i = 0; i < greenNum; i++) {
            if (collectable.state[i] === true) {
                let trackGreen = (i + track);

                ctx.beginPath();
                ctx.arc(collectable.x[i], collectable.y[i], radius, 0, Math.PI * 2);
                ctx.fill();
                ctx.closePath();
            }
        }
    }

    // draw black ball 
    function drawBlackball() {
        for (let i = 0; i < blackNum; i++) {
            let trackBlack = (i + badTrack);

            ctx.beginPath();
            ctx.arc(uncollectable.x[i], uncollectable.y[i], radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        }
    }

    function playUpdate() {
        if (leftMove && player.x > 0) {
            player.x -= 8;
        }
        
        if (rightMove && player.x + player.size < canvas.width) {
            player.x += 8;
        }

        for (let i = 0; i < greenNum; i++) {
            collectable.y[i] += collectable.speed;
        }

        for (let i = 0; i < blackNum; i++) {
            uncollectable.y[i] += uncollectable.speed;
        }

        for (let i = 0; i < greenNum; i++) {
            if (collectable.state[i]) {
                if (player.x < collectable.x[i] + radius && 
                    player.x + player.size + radius > collectable.x[i] && 
                    player.y < collectable.y[i] + radius && 
                    player.y + player.size > collectable.y[i]) {
                        score++;
                        collectable.state[i] = false;
                    }
            }

            if (collectable.y[i] + radius > canvas.height) {
                collectable.x.shift();
                collectable.y.shift();
                collectable.state.shift;
                track++;
            }
        }

        for (let i = 0; i < blackNum; i++) {
            if (player.x < uncollectable.x[i] + radius && 
                player.x + player.size + radius > uncollectable.x[i] && 
                player.y < uncollectable.y[i] + radius && 
                player.y + player.size > uncollectable.y[i]) {
                    lives--;
                    player.color = uncollectable.color[i + badTrack];
                    uncollectable.y[i] = 0;
                    if (lives <= 0) gameDone();
                }

            if (uncollectable.y[i] + radius > canvas.height) {
                uncollectable.x.shift();
                uncollectable.y.shift();
                badTrack++;
            }
        }

        switch(score){
            case 20:
                uncollectable.speed = 3;
                collectable.speed = 3;
                level = 2;
                break;
            case 30:
                level = 3;
                break;
            case 40: 
                collectable.speed = 4;
                level = 4;
                break;
            case 50:
                level = 5;
                break;
        }
    }

    function gameDone() {
        gameOver = true;
        collectable.x = [];
        collectable.y = [];
        uncollectable.x = [];
        uncollectable.y = [];
        collectable.state = [];
    }

    function playAgain() {
        gameOver = false;
        player.color = "red";
        level = 1;
        score = 0;
        lives = 3;
        collectable.speed = 2;
        uncollectable.speed = 2;
    }

    //invoke functions
    function draw() {
	    ctx.clearRect(0, 0, canvas.width, canvas.height);

        // if (!gameDone) {
            drawPlayer();
            movePlayer();
            drawGreenball();
            drawBlackball();
            playUpdate();
            randomGood();
            randomBad();

            // score
            // ctx.fillStyle = "black";
            // ctx.font = "20px Helvetica";
            // ctx.textAlign = "left";
            // ctx.fillText("Score: " + score, 10, 25);
        
            // lives
            // ctx.textAlign = "right";
            // ctx.fillText("Lives: " + lives, 680, 25);
        // }
        // else{
            // ctx.fillStyle = "black";
            // ctx.font = "25px Helvetica";
            // ctx.textAlign = "center";
            // ctx.fillText("GAME OVER!", canvas.width/2, 175);
            
            // ctx.font = "20px Helvetica";
            // ctx.fillText("PRESS SPACE TO PLAY", canvas.width/2, 475);
            
            // ctx.fillText("FINAL SCORE: " + score, canvas.width/2, 230);
        // }

        // document.getElementById("level").innerHTML = "Level: " + level;
        requestAnimationFrame(draw);
    }

    draw();

});
