let balls = [];
var black = true;
let numBalls = 7;

function setup() {
  createCanvas(800, 500);
  for (let i = 0; i < numBalls; i++) {
    balls[i] = new Ball(
      random(71, width - 71),
      random(71, height - 71),
      random(30, 70),
      i,
      balls
           );
  }
}
function mousePressed() {
  for (var i = 0; i < balls.length; i++) {
    balls[i].clicked(mouseX, mouseY);
  }
}

function draw() {
  background(0);
  for (let i = 0; i < numBalls; i++) {
    balls[i].show();
    balls[i].move();
    balls[i].collide();
  }
  // for (let object of balls){
  //   object.show();
  //   object.move(); 
  //   let overlapping = false;
  //   for (let other of balls){
  //     if (object.intersects(other) && object !== other){
  //       overlapping = true;
  //     }
  //     if (overlapping){
  //     object.speedX = - object.speedX;
  //     object.speedY = - object.speedY;
  //     }// else{
  //   //   object.brightness = 100;
  //   //   }
  //   }
  // }
  
  
}