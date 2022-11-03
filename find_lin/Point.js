class Point{
  
  constructor(){
    this.x = random(Xmin, Xmax);
    this.y = random(Ymin, Ymax);
    this.answer = 1;
    if(f(this.x) > this.y){
      this.answer = -1;
    }
  }
  
  inputs(){
    return [this.x, this.y, 1];
  }
  
  show(){
    let x = map(this.x, Xmin, Xmax, 0, width);
    let y = map(this.y, Ymin, Ymax, 0, height);
    noStroke();
    ellipse(x, y, 8);
  }
}