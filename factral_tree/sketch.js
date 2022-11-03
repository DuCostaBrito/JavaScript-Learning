let angle = 0;
let slide;
let leaves = [];
let gravity;

function setup() {
  createCanvas(400, 400);
  slide = createSlider(0, PI / 2, PI / 4, 0.01);
  gravity = createVector(0, 1);
}

function draw() {
  background(255);
  angle = slide.value();
  translate(200, height);
  factralTree(100, cor(100));
}

function cor(value){
  let from = color(255, 100, 150);
  let to = color(72, 61, 139);
  let oi = lerpColor(from, to, value / 100)
  return oi
}
function factralTree(len, color) {
  stroke(color);
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle);
    factralTree(len * 0.67, cor(len));
    pop();
    push();
    rotate(-angle);
    factralTree(len * 0.67, cor(len));
    pop();
  }
}