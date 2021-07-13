
    const canvas = document.querySelector(".canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // const showScore = document.querySelector('#score');

    let leftMove = false;
    let rightMove = false;
    let gameFrame = 0;
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
        size: 180,
        x: Math.floor(canvas.width - 180) / 2,
        y: Math.floor(canvas.height - 80),
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
            player.x -= 5;
        } else if (rightMove && player.x + player.size < canvas.width) {
            player.x += 5;
        }
    }

    
    // collectable
    let collect = {
        x: [],
        y: [],
        speed: 2,
        color: ["green"],
        state: []
    };
    
    // add value to x property of collectable
    let greenNum = 0;
    function randomGood() {
        if (Math.random() < 0.2) {
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
        color: ["black"]
    };
    
    // add value to x property of uncollectable
    let blackNum = 0;
    function randomBad() {
        if (score < 30) {
            if (Math.random() < 0.5) {
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
            if (collectable.state[i]) {
                let trackGreen = (i + track);

                ctx.beginPath();
                ctx.arc(collectable.x[i], collectable.y[i], 10, 0, Math.PI * 2);
                ctx.fillStyle = collectable.color[trackGreen % 26];
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
            ctx.arc(collectable.x[i], collectable.y[i], 10, 0, Math.PI * 2);
            ctx.fillStyle = uncollectable.color[trackGreen % 5];
            ctx.fill();
            ctx.closePath();
        }
    }

    // increase speed
    function speedScore() {
        for (let i = 0; i < greenNum; i++) {
            collectable.y[i] += collectable.speed;
        }

        for (let i = 0; i < blackNum; i++) {
            uncollectable.y[i] += uncollectable.speed;
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

    //detect collisions
    function detectCollision() {
        for (let i = 0; i < greenNum; i++) {
            if (collectable.state[i]) {
                if (player.x < collectable.x[i] + 10 && 
                    player.x + 180 + 10 > collectable.x[i] && 
                    player.y < collectable.y[i] + 10 && 
                    player.y + 180 > collectable.y[i]) {
                        score++;
                        player.color = collectable.color[(i + track) % 26];
                        collectable.state[i] = false;
                    }
            }

            if (collectable.y[i] + 10 > canvas.height) {
                collectable.x.shift();
                collectable.y.shift();
                collectable.state.shift;
                track++;
            }
        }

        for (let i = 0; i < blackNum; i++) {
            if (player.x < uncollectable.x[i] + 10 && 
                player.x + 180 + 10 > uncollectable.x[i] && 
                player.y < uncollectable.y[i] + 10 && 
                player.y + 180 > uncollectable.y[i]) {
                    lives--;
                    player.color = uncollectable.color[(i + badTrack) % 5];
                    uncollectable.y[i] = 0;
                    if (lives <= 0) gameOver();
                }

            if (uncollectable.y[i] + 10 > canvas.height) {
                uncollectable.x.shift();
                uncollectable.y.shift();
                badTrack++;
            }
        }
    }

    //invoke functions
    function draw() {
	    ctx.clearRect(0, 0, canvas.width, canvas.height);

		drawPlayer();
		movePlayer();
        drawGreenball();
        drawBlackball();
        speedScore();
        detectCollision();
        randomGood();
        randomBad();

	    requestAnimationFrame(draw);
    }

    draw();

    // const letters = {
    //     x: [],
    //     y: [],
    //     speed: 2,

    // }

    // const letterImage = new Image();
    // letterImage.src = 'src/images/alphabet.png';

    // const lettersArr = [];

    // class Letter {
    //     constructor() {
    //         this.x = Math.random() * canvas.width;
    //         this.y = Math.random() * canvas.height;
    //         this.radius = 50;
    //         this.angle = 0;
    //         this.frameX = 0;
    //         this.frameY = 0;
    //         this.frame = 0;
    //         this.spriteWidth = 144;
    //         this.spriteHeight = 264;
    //     }

    //     update() {
    //         this.x++;
    //         this.y++;
    //     }

    //     draw() {
    //         ctx.fillRect(this.x, this.y, this.width, this.height);
    //     }
    // }

    // for (let i = 0; i < 26; i++) {
    //     lettersArr.push(new Letter());
    // }

    // function animate() {
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);

    //     requestAnimationFrame(animate);
    // }

    // animate();



