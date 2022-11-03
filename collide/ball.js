let spring = 0.05;
class Ball {

  constructor(pX, pY,size, id, array) {
    this.x = pX;
    this.y = pY;
    this.brightness = 100
    this.size = size
    this.speedX = this.size * 0.05;
    this.speedY = this.size * 0.05;
    this.others = array;
    this.id = id;
  }
  move() {
    this.y = this.y + this.speedY;
    this.x = this.x + this.speedX;
    if (this.x + (this.size) / 2 >= width || this.x - (this.size /     2) <= 0) {
      this.speedX = -this.speedX;
    }
    if (this.y + (this.size) / 2 >= height || this.y - (this.size
    / 2) <= 0) {
      this.speedY = -this.speedY;
    }
  }
  clicked(x, y) {
    let d = dist(x, y, this.x, this.y);
    if (d < this.size && black){
      this.brightness = 255;
      black = !black;
    }else{
      if (d < this.size){
        this.brightness = 100;
        black = !black;
      }
    }
  }
  collide() {
    for (let i = this.id + 1; i < numBalls; i++) {
      // console.log(others[i]);
      let dx = this.others[i].x - this.x;
      let dy = this.others[i].y - this.y;
      let distance = sqrt(dx * dx + dy * dy);
      let minDist = this.others[i].size / 2 + this.size / 2;
      //console.log(distance);
      //console.log(minDist);
      if (distance <= minDist) {
        //console.log("2");
        let angle = atan2(dy, dx);
        let targetX = this.x + cos(angle) * minDist;
        let targetY = this.y + sin(angle) * minDist;
        let ax = (targetX - this.others[i].x) * spring;
        let ay = (targetY - this.others[i].y) * spring;
        this.speedX -= ax;
        this.speedY -= ay;
        this.others[i].speedX += ax;
        this.others[i].speedY += ay;
      }
    }
  }
  
   
  show(){
    ellipseMode(CENTER);
    fill(255, 40);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
  }



}
