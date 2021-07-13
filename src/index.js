
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
    function drawNewGood() {
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
    function drawNewBad() {
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
    function drawGreenBall() {
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

    // draw blackball 
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

    // 

    //invoke function 
    function draw(){
	    ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawPlayer();
		movePlayer();

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



