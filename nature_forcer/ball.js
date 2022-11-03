class Ball{
  
  constructor(size){
    this.pos = createVector(random(width), random(0, height / 2));
    this.vel = createVector(0, 0); //Esta parado.
    this.acc = createVector(0, 0); //Sem aceleracao.
    this.size = size;
  }
  
  Apply_force(force){
    this.acc.add(force);
  }
  
  friction(factor){
      
  }
  
  edges(ground){
    if (this.pos.y >= height - this.size / 2 ){
      this.pos.y = height - this.size / 2;
      this.vel.y = -this.vel.y;
    }
    if (this.pos.x >= width - this.size / 2){
      this.pos.x = width - this.size / 2;
      this.vel.x = - this.vel.x;
    }
    if (this.pos.x <= this.size / 2){
      this.pos.x = this.size / 2;
      this.vel.x = - this.vel.x;
    }
    
    let difference = ground.repulsion(this.pos, this.size);
    
    if (difference > 0){
      this.vel.y *= -1
      this.vel.rotate(ground.angle);
      this.pos.y = this.pos.y - difference;
    }
  }
  
  showVectors(vector, factor, color){
    push();
    let arrowsize = 4;
    let angle = vector.heading();
    let power = vector.mag() * factor; 
    translate(this.pos.x, this.pos.y);
    rotate(angle);
    stroke(color);
    line(0, 0, power, 0);
    line(power, 0, power - arrowsize, +arrowsize / 2);
    line(power, 0, power - arrowsize, -arrowsize / 2);
    pop();
  }
  
  
  update(){
    this.vel.add(this.acc);
    this.vel.limit(10);
    this.pos.add(this.vel);
    this.acc = createVector(0, 0);
  }
  
  show(){
    fill(240, 170);
    stroke(255);
    strokeWeight(3);
    ellipse(this.pos.x, this.pos.y, this.size);
  }
}