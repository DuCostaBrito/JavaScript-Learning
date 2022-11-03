class Ball {

  constructor(x, y, array, color) {
    this.pos = createVector(x, y);
    // this.size = 1;
    this.radium = 0.5;
    this.others = array;
    this.stop = false;
    this.color = color;
  }

  collide() {
    if (!this.stop) {
      for (let circle of this.others) {
        if (circle.pos != this.pos) {
          var d = p5.Vector.sub(this.pos,
            circle.pos);
          if (d.mag() <= this.radium +
            circle.radium + 1.5) {
            this.stop = true;
            circle.stop = true;
          }
        }
      }
    }
  }

  edges() {
    if(this.pos.x + this.radium + 1.5>= width||
      this.pos.x - this.radium - 1.5 <= 0 ||
      this.pos.y + this.radium + 1.5>= height||
      this.pos.y - this.radium - 1.5 <= 0) {
      this.stop = true;
    }
  }

  growth() {
    if (!this.stop) {
      this.radium += 2;
    }
  }

  cor() {
    let from = color(255, 100, 150);
    let to = color(72, 61, 139);
    let oi = lerpColor(from, to, this.color / 100)
    return oi
  }
  
  show() {
    noFill();
    stroke(this.cor());
    strokeWeight(2);
    ellipseMode(CENTER);
    ellipse(this.pos.x, this.pos.y, this.radium * 2);
  }
}