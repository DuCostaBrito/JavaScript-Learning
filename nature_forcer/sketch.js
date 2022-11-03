let movers = [];
let NumBalls = 7;
let gravity;
let wind;
let start;
let end;
let ground;

function setup() {
  createCanvas(400, 400);
  gravity = createVector(0, 0.1);
  wind = createVector(0.04, 0);
  start = createVector(0, 340);
  end = createVector(width, 290);
  for (var i = 0; i < NumBalls; i++) {
    movers[i] = new Ball(random(20, 60));
  }
  //mover = new Ball(50);
  ground = new Ground(start, end);
}

function draw() {
  background(0);
  ground.show();
  //mover actions
  for (let mover of movers) {
    if (mouseIsPressed) {
      mover.Apply_force(wind);
      //vetor vento
      mover.showVectors(wind, 700, color(0, 255, 255));
    }
    mover.Apply_force(gravity);
    mover.update();
    mover.edges(ground);
    mover.show();
    //vetores.
    //velocidade
    mover.showVectors(mover.vel, 10, color(255, 255, 0));
    //gravidade
    mover.showVectors(gravity, 400, color(255, 100, 150, 190));
  }
}