let circles = [];

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(255);
  frameRate(20);

  var total = 5;
  var count = 0;
  var attempts = 0;

  while (count < total) {
    var newC = newCircle();
    if (newC !== null) {
      circles.push(newC);
      count++;
    }
    attempts++;
    if (attempts > 100) {
      noLoop();
      print('finished');
      break;
    }


  }
  for(let ball of circles){
    ball.collide();
    ball.edges();
    ball.growth();
    ball.show();
  } 
}

function newCircle() {
  var x = random(width);
  var y = random(height);
  var cor = random(100);
  var valid = true;
  for (var i = 0; i < circles.length; i++) {
    var circle = circles[i];
    var d = dist(x, y, circle.pos.x,
      circle.pos.y);
    if (d < circle.radium) {
      valid = false;
      break;
    }
  }
  if (valid) {
    return new Ball(x, y, circles, cor);
  } else {
    return null;
  }
}