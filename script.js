const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d");

// let monsterImage = new Image();
// monsterImage.src = "strip.png";
// let monster_x = canvas.width / 2;
// let monster_y = canvas.height / 2;
let monster_radius = 30;

let img = new Image();
img.src = "strip.png";

img.addEventListener("load", (event) => {
    spriteH = img.height;
    spriteW = img.width/3.3;  // because I know they are squares
    
    ctx.drawImage(img, 0, 0, spriteW, spriteH,  0, 50, spriteW, spriteH);


    ctx.drawImage(img, spriteW*1, 0, spriteW, spriteH,  300, 50, spriteW, spriteH);

    console.log("done with drawImage")

    draw();

  })

  let numImages = 3;
  let currentImageIndex = 0;
  let frames = 0;
  let x = 0;

  let draw = () => {
    ctx.clearRect(0,0,canvas.width,canvas.height);

    // clear the canvas
    // ctx.clearRect(0,0,canvas.width,canvas.height);

    // calculate and update vars
    frames += 1;
    x += 1;

    // if (x % 100 == 0) {
    //   myAudio.play();
    // }

    // render
    if (frames % 5 == 0) {
        currentImageIndex = (currentImageIndex == 2) ? 0 : currentImageIndex += 1;
    }
    ctx.drawImage(img, spriteW*currentImageIndex, 0, spriteW, spriteH, x, canvas.height / 2, spriteW, spriteH);

    window.requestAnimationFrame(draw);
  }
  

// monsterImage.addEventListener("load", (event) => {
//     spriteH = monsterImage.height;
//     spriteW = monsterImage.width;
//     // ctx.drawImage(img, 0, 0, spriteW, spriteH,  0, 50, spriteW, spriteH);
//     // ctx.drawImage(img, spriteW*1, 0, spriteW, spriteH,  300, 50, spriteW, spriteH);
//     draw();
// })

// let numImages = 3;
// let currentImageIndex = 0;
// let frames = 8;
// let monsterX = 10;
// let monsterY = 200;

// let draw = () => {
//     frames += 1;
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     if(frames % 3 == 0){
//         currentImageIndex = (currentImageIndex == 2) ? 0 : currentImageIndex += 1;
//     }

//     if(rightPress){
//         monsterX += 10;
//         // ctx.drawImage(monsterImage, spriteW * currentImageIndex, 0, spriteW, spriteH, monsterX, monsterY, spriteW, spriteH);
//     }
//     else if(leftPress){
//         monsterX -= 10;
//         // ctx.drawImage(monsterImage, spriteW * currentImageIndex, 0, spriteW, spriteH, monsterX, monsterY, spriteW, spriteH);
//     }
//     else if(downPress){
//         monsterY += 10;
//         // ctx.drawImage(monsterImage, spriteW * currentImageIndex, 0, spriteW, spriteH, monsterX, monsterY, spriteW, spriteH);
//     }
//     else if(upPress){
//         monsterY -= 10;
//         // ctx.drawImage(monsterImage, spriteW * currentImageIndex, 0, spriteW, spriteH, monsterX, monsterY, spriteW, spriteH);
//     }
//     ctx.drawImage(monsterImage, spriteW * currentImageIndex, 0, spriteW, spriteH, monsterX, monsterY, spriteW, spriteH);

//     circles.forEach((circle) => {
//         drawCircle(circle.x, circle.y, radius, 5, "red", circle.colour);
//     });

//     window.requestAnimationFrame(draw);
// }

// document.addEventListener("keydown", keyDownHandler, false);
// document.addEventListener("keyup", keyUpHandler, false);

// var rightPress = false;
// var leftPress = false;
// var upPress = false;
// var downPress = false;

// function keyDownHandler(event){
//     if(event.keyCode == 39 || event.keyCode == 68){
//         rightPress = true;
//     }
//     else if(event.keyCode == 37 || event.keyCode == 65){
//         leftPress = true;
//     }
//     else if(event.keyCode == 40 || event.keyCode == 83){
//         downPress = true;
//     }
//     else if(event.keyCode == 38 || event.keyCode == 87){
//         upPress = true;
//     }
// }

// function keyUpHandler(event){
//     if(event.keyCode == 39 || event.keyCode == 68){
//         rightPress = false;
//     }
//     else if(event.keyCode == 37 || event.keyCode == 65){
//         leftPress = false;
//     }
//     else if(event.keyCode == 40 || event.keyCode == 83){
//         downPress = false;
//     }
//     else if(event.keyCode == 38 || event.keyCode == 87){
//         upPress = false;
//     }
// }

// let circles = [];
// let radius = 25;
// let circleX = 10;
// let circleY = 20;

// function drawCircle(circleX, circleY, radius, border, borderColor, fillColor){
//     ctx.beginPath();
//     ctx.arc(circleX, circleY, radius, 0, Math.PI * 2);
//     ctx.strokeStyle = borderColor;
//     ctx.fillStyle = fillColor;
//     ctx.lineWidth = border;
//     ctx.closePath();
//     ctx.fill();
//     ctx.stroke();
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

// function drawMonster(){
//     ctx.drawImage(monsterImage, monster_x, monster_y);
//     window.requestAnimationFrame(drawMonster);
// }
// drawMonster();

// monsterImage.addEventListener("load", (event) => {
//     spriteH = monsterImage.height;
//     spriteW = spriteH;
//     ctx.drawImage(monsterImage, 0, 0, spriteW, spriteH, 0, 50, spriteW, spriteH);

//     ctx.drawImage(img, spriteW * 1, 0, spriteW, spriteH, 300, 50, spriteW, spriteH);
//     // draw();
// })

// let numImages = 3;
// let currentImageIndex = 0;
// let frames = 10;
// let monster_x = canvas.width / 2;
// let monster_y = canvas.height / 2;

// let draw = () =>{
//     frames += 1;
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     if(frames % 8 == 0){
//         currentImageIndex = (currentImageIndex == 2) ? 0 : currentImageIndex += 1;
//     }
//     if(rightPress){
//         monsterX += 10;
//     }
//     else if(leftPress){
//         monsterX -= 10;
//     }
//     else if(downPress){
//         monsterY += 10;
//     }
//     else if(upPress){
//         monsterY -= 10;
//     }
//     ctx.drawImage(monsterImage, spriteW * currentImageIndex, 0, spriteW, spriteH, monster_x, monster_y, spriteW, spriteH);
//     window.requestAnimationFrame(draw);
//     // drawEnemies();
// }

// document.addEventListener("keydown", keyDownHandler, false);
// document.addEventListener("keyup", keyUpHandler, false);

// var rightPress = false;
// var leftPress = false;
// var upPress = false;
// var downPress = false;

// function keyDownHandler(event){
//     if(event.keyCode == 39 || event.keyCode == 68){
//         rightPress = true;
//     }
//     else if(event.keyCode == 37 || event.keyCode == 65){
//         leftPress = true;
//     }
//     else if(event.keyCode == 40 || event.keyCode == 83){
//         downPress = true;
//     }
//     else if(event.keyCode == 38 || event.keyCode == 87){
//         upPress = true;
//     }
// }

// function keyUpHandler(event){
//     if(event.keyCode == 39 || event.keyCode == 68){
//         rightPress = false;
//     }
//     else if(event.keyCode == 37 || event.keyCode == 65){
//         leftPress = false;
//     }
//     else if(event.keyCode == 40 || event.keyCode == 83){
//         downPress = false;
//     }
//     else if(event.keyCode == 38 || event.keyCode == 87){
//         upPress = false;
//     }
// }


// function randomColor(){
//     var character = "0123456789ABCDEF";
//     var color = "#";
//     for(var i = 0; i < 6; i++){
//       color += character[Math.floor(Math.random()*16)];
//     }
//     return color;
// }
// function drawEnemies(){
//     for(var i = 0; i < 2; i++)
//     {
//         var enemy_x = Math.random() * window.innerWidth;
//         var enemy_y = Math.random() * window.innerHeight;
//         ctx.beginPath();
//         ctx.arc(enemy_x, enemy_y, 30, 0, Math.PI * 2, false);
//         ctx.lineWidth = 5;
//         ctx.strokeStyle = "white";
//         ctx.fillStyle = randomColor();
//         ctx.fill()
//         ctx.stroke();
//     }
// }


// document.addEventListener("keydown", (event) => {
//     if(event.keyCode == 38)
//     {
//         monster_y -= 60;
//     }
//     else if(event.keyCode == 39)
//     {
//         monster_x += 60;
//     }
//     else if(event.keyCode == 40)
//     {
//         monster_y += 60;
//     }
//     else if(event.keyCode == 37)
//     {
//         monster_x -= 60;
//     }
// });



