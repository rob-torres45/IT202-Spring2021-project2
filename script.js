var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var leftPressed = false;
var rightPressed = false;
var monsterImage = new Image();
monsterImage.src = "strip.png";
var monster_x = 0;
var monster_y = 600;
var monsterRadius = 40;

var bombImage = new Image();
bombImage.src = "bomb.png";

var circles = [];
var colour = randomColour();

var lives = 3;
var livesMessage;

var numImages = 3;
var currentImageIndex = 0;
var frames = 0;

let myAudio = new Audio('explosion.wav');
let myAudio2 = new Audio("circus.wav");

alert("Hello!\nThe Objective Of This Game Is To Avoid The Bombs. Use The Left And Right Arrow Key To Move The Player Away From The Bombs\nYou Get 3 Lifes! Enjoy!");


function randomColour(){
  let characters = "0123456789ABCDEF";
  let colour = "#";
  for(let i = 0; i < 6; i++){
    colour += characters[Math.floor(Math.random() * 16)];
  }
  return colour;
}

for(let i = 0; i < 10; i++) {
  circles.push(
    {x: Math.floor(Math.random() * canvas.width),
    y: Math.floor(Math.random() * canvas.height),
    color: colour,
    radius: Math.floor(Math.random() * (20 - 5) + 5)}
    );
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(event) {
    if (event.key == "Right" || event.key == "ArrowRight") {
        rightPressed = true;
    }
    else if (event.key == "Left" || event.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(event) {
    if (event.key == "Right" || event.key == "ArrowRight") {
        rightPressed = false;
    }
    else if (event.key == "Left" || event.key == "ArrowLeft") {
        leftPressed = false;
    }
}

monsterImage.addEventListener("load", (event) => {
    spriteH = monsterImage.height;
    spriteW = monsterImage.width/3.3;
    
    ctx.drawImage(monsterImage, 0, 0, spriteW, spriteH,  0, 50, spriteW, spriteH);
    ctx.drawImage(monsterImage, spriteW*1, 0, spriteW, spriteH,  300, 50, spriteW, spriteH);
    drawMonster();
})

function drawMonster(){
  requestAnimationFrame(drawMonster);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  circles.forEach((circle) => {
    circle.y += 1;
    myAudio2.play();

  })

  circles.forEach((circle) => {
    if(circle.y >= canvas.width + 10){
      circle.x = Math.floor(Math.random() * canvas.height);
      circle.y = -10;
    }
    var dx = circle.x - monster_x;
    var dy = circle.y - monster_y;
    lives = 3;
    var distance = Math.sqrt(dx * dx + dy * dy);
    if(distance < circle.radius + monsterRadius){
      lives--;
      //livesMessage.setText("Lives: " + lives);
      myAudio.play();
    }
    if(lives == 0){
      alert('Game Over!');
      location.reload();
    }
    })

  circles.forEach((circle) => {
    ctx.drawImage(bombImage, circle.x, circle.y);
  })

  frames += 1;
  if (frames % 10 == 0) {
    currentImageIndex = (currentImageIndex == 2) ? 0 : currentImageIndex += 1;
  }
  ctx.drawImage(monsterImage, spriteW*currentImageIndex, 0, spriteW, spriteH, monster_x, monster_y, spriteW, spriteH);

  if(rightPressed){
    monster_x += 10;
  }
  else if(leftPressed){
    monster_x -= 10;
  }
}
