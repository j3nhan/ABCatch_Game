document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');

    let leftMove = false;
    let rightMove = false;
    let score = 0;
    let lives = 3;
    let gameOver = true;

    document.addEventListener("keydown", keyPressed, false);
    document.addEventListener("keyup", keyReleased, false);

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
                alert("LEFT and RIGHT arrow keys only!");
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

    let player = {
        size: 30,
        x: (canvas.width - 30 / 2),
        y: canvas.height - 30,
        color: "red"
    }
    

    const letterImage = new Image();
    letterImage.src = 'src/images/alphabet.png';

    const lettersArr = [];

    class Letter {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.width = 100;
            this.height = 100;
        }

        update() {
            this.x++;
            this.y++;
        }

        draw() {
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    for (let i = 0; i < 26; i++) {
        lettersArr.push(new Letter());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        requestAnimationFrame(animate);
    }

    animate();
})
