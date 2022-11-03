class Ground{
  constructor(start, end){
    this.start = start;
    this.end = end;
    this.angle = p5.Vector.sub(this.end, this.start).heading();
  }
  
  show(){
    stroke(255);
    strokeWeight(2);
    strokeWeight(1);
    line(this.start.x, this.start.y, this.end.x, this.end.y); 
  }
  
  repulsion(pos, size){
    if (pos.x < this.start.x || pos.x > this.end.x){
      return false;
    }
    let amt = ((pos.x - this.start.x) / (this.end.x - this.start.x));
    return ((pos.y + (size / 2)) - lerp(this.start.y, this.end.y, amt));
  }

}