const startBtn = document.getElementById("startBtn");
const story = document.getElementById("story");
const heart = document.getElementById("heart");
const letter = document.getElementById("letter");
const gallery = document.getElementById("gallery");

startBtn.onclick = () => {

    document.querySelector(".hero").style.display="none";

    story.classList.remove("hidden");

};

heart.onclick = ()=>{

    heart.innerHTML="💖";

    story.style.display="none";

    letter.classList.remove("hidden");

    startConfetti();

    setTimeout(()=>{

        gallery.classList.remove("hidden");

        gallery.scrollIntoView({
            behavior:"smooth"
        });

    },3000);

}

const canvas=document.getElementById("confetti");

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

let particles=[];

function startConfetti(){

particles=[];

for(let i=0;i<250;i++){

particles.push({

x:Math.random()*canvas.width,

y:-20,

r:Math.random()*6+2,

dx:(Math.random()-0.5)*6,

dy:Math.random()*5+3,

color:`hsl(${Math.random()*360},100%,60%)`

});

}

animate();

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

ctx.beginPath();

ctx.fillStyle=p.color;

ctx.arc(p.x,p.y,p.r,0,Math.PI*2);

ctx.fill();

p.x+=p.dx;

p.y+=p.dy;

});

requestAnimationFrame(animate);

}
