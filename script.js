var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var monsterRadius = 10;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ddx = 2;
var ddy = -2;
var leftPressed = false;
var rightPressed = false;
var monsterImage = new Image();
monsterImage.src = "strip.png";
var monster_x = 0;
var monster_y = 600;
var circles = [];
var numImages = 3;
var currentImageIndex = 0;
var frames = 0;
  
for(var i = 0; i < 5; i++){
  var radius = 10;
  let border = 5;
  var x = Math.random() * (canvas.width - radius * 2) + radius;
  var y = Math.random() * (canvas.height - radius * 2) + radius;
  var dx = (Math.random() - 0.5) * 10;
  var dy = (Math.random() - 0.5) * 10;
  let colour = randomColour();
    circles.push(new Circle(x, y, dx, dy, radius, border, colour, colour));
}

monsterImage.addEventListener("load", (event) => {
    spriteH = monsterImage.height;
    spriteW = monsterImage.width/3.3;
    
    ctx.drawImage(monsterImage, 0, 0, spriteW, spriteH,  0, 50, spriteW, spriteH);
    ctx.drawImage(monsterImage, spriteW*1, 0, spriteW, spriteH,  300, 50, spriteW, spriteH);
    drawMonster();
})

function drawMonster(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  frames += 1;
  if (frames % 10 == 0) {
    currentImageIndex = (currentImageIndex == 2) ? 0 : currentImageIndex += 1;
  }
  ctx.drawImage(monsterImage, spriteW*currentImageIndex, 0, 
  spriteW, spriteH, monster_x, monster_y, spriteW, spriteH);
  requestAnimationFrame(drawMonster);

  if(rightPressed){
    monster_x += 10;
  }
  else if(leftPressed){
    monster_x -= 10;
  }
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


function randomColour(){
  let characters = "0123456789ABCDEF";
  let colour = "#";
  for(let i = 0; i < 6; i++){
    colour += characters[Math.floor(Math.random() * 16)];
  }
  return colour;
}

function Circle(x, y, dx, dy, radius, border, borderColor, fillColor){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.border = border;
    this.borderColor = borderColor;
    this.fillColor = fillColor;
    
    this.draw = function(){
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.strokeStyle = "black";
      ctx.fillStyle = fillColor;
      ctx.lineWidth = border;
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }
  
    this.update = function(){
      if(this.x + this.radius > canvas.width || this.x - this.radius < 0){
        this.dx = -this.dx;
      }
      if(this.y + this.radius > canvas.height || this.y - this.radius < 0){
        this.dy = -this.dy;
      }
      this.x += this.dx;
      this.y += this.dy;
  
      this.draw();
    }
  }

function drawCircles(){
  // requestAnimationFrame(drawCircles);
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  for(var i = 0; i < circles.length; i++){
    circles[i].update();
  }
  // circles.forEach((circle) => {
  //   drawCircle(circle.x, circle.y, radius, 5, "white", circle.colour);
  // });
}


function draw(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(draw);

  drawCircles();
  

  if(rightPressed){
    monster_x += 10;
  }
  else if(leftPressed){
    monster_x -= 10;
  }
}

draw();
// circles.forEach((circle) => {
//   drawCircle(circle.x, circle.y, radius, 5, "white", circle.colour);
// })
// let circles = [];
// let radius = 25;
// let circleX = 10;
// let circleY = 20;
// let dx = 10;
// let dy = 10;


// function drawCircle(circleX, circleY, radius, border, borderColor, fillColor){
//     ctx.beginPath();
//     ctx.arc(circleX, circleY, radius, 0, Math.PI * 2);
//     ctx.strokeStyle = borderColor;
//     ctx.fillStyle = fillColor;
//     ctx.lineWidth = border;
//     ctx.closePath();
//     ctx.fill();
//     ctx.stroke();

//     circleX += dx;
//     circleY += dy;
// }

// for(let i = 0; i < 10; i++)
// {
//     let xC = radius + (Math.random() * (canvas.width - (2 * radius)));
//     let yC = radius + (Math.random() * (canvas.height - (2 * radius)));
//     let colour = randomColour();
//     let direction = Math.random() * 2.0 * Math.PI;
//     circles.push({x: xC, y: yC, colour: colour, direction: direction});
// }

// function randomColour(){
//     let characters = "0123456789ABCDEF";
//     let colour = "#";
//     for(let i = 0; i < 6; i++){
//         colour += characters[Math.floor(Math.random() * 16)];
//     }
//     return colour;
// }
// var dx = circles.x - spriteW;
// var dy = circles.y - spriteH;
// var distance = Math.sqrt(dx * dx + dy * dy);

// if(distance < circles.radius + monsterRadius){
//     circles.colour = "red";
// }

// let secondsPassed = 0;
// let oldTimeStamp = 0;
// let movingSpeed = 90;

// function gameLoop(timeStamp) {
//     // Calculate how much time has passed
//     secondsPassed = (timeStamp - oldTimeStamp) / 1000;
//     oldTimeStamp = timeStamp;

//     // Pass the time to the update
//     update(secondsPassed);
//     circles.forEach((circle) => {
//         drawCircle(circle.x, circle.y, radius, 5, "white", circle.colour);
//     });

// }

// function update(secondsPassed) {
//     // Use time to calculate new position
//     circle.x += (movingSpeed * secondsPassed);
//     circle.y += (movingSpeed * secondsPassed);
// }

// var x = 200;
// var dx = 4;
// var radius = 30;
// function animate(){
//     // requestAnimationFrame(animate);
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.beginPath();
//     ctx.arc(x, 200, radius, 0, Math.PI * 2, false);
//     ctx.strokeStyle = "blue";
//     ctx.stroke();

//     if(x + radius > canvas.width || x - radius < 0){
//         dx = -dx;
//     }
//     x += dx;
// }
// animate();
