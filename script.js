const button = document.getElementById("startBtn");
const surprise = document.getElementById("surprise");
const heart = document.getElementById("heart");
const letter = document.getElementById("letter");

button.addEventListener("click", () => {
    surprise.classList.remove("hidden");
    button.style.display = "none";
});

heart.addEventListener("click", () => {
    letter.classList.remove("hidden");
    heart.innerHTML = "💖";
    startConfetti();
});

function startConfetti() {
    const canvas = document.getElementById("confetti");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];

    for (let i = 0; i < 150; i++) {
        pieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 6 + 2,
            d: Math.random() * 150
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#ff4d88";

        pieces.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();

            p.y += 2;
            if (p.y > canvas.height) {
                p.y = -10;
            }
        });

        requestAnimationFrame(draw);
    }

    draw();
}
