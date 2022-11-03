class Cell {

  constructor(x, y, size, i, j, array) {
    this.x = x;
    this.y = y;
    this.area = size;
    this.id = i;
    this.jd = j;
    this.mine = random(1);
    this.revealed = false;
    this.others = array;
  }

  contains(pX, pY) {
    if (pX < this.x + this.area && pX > this.x &&
      pY < this.y + this.area && pY > this.y) {
      return (true);
    }
  }

  reveal() {
    this.revealed = true
    if (this.mine < freq) { //Caso tenha bomba
      for (var i = 0; i < this.others.length; i++) {
        for (var j = 0; j < this.others.length; j++) {
          this.others[i][j].revealed = true;
        }
      }
    }
    if (this.counter() === 0) {
      this.reveal_neighbor();
    }
  }




  reveal_neighbor() {
    for (var xoff = -1; xoff <= 1; xoff++) {
      for (var yoff = -1; yoff <= 1; yoff++) {
        var i = this.id + xoff;
        var j = this.jd + yoff;
        if (i >= 0 && i < this.others.length && j >= 0 && j < this.others.length) {
          var neighbor = this.others[i][j];
          if (neighbor.mine > freq && !neighbor.revealed) {
            neighbor.reveal();
          }
        }
      }
    }
  }


  counter() {
    var total = 0
    if (this.mine > freq) {
      for (var xoff = -1; xoff <= 1; xoff++) {
        for (var yoff = -1; yoff <= 1; yoff++) {
          var i = this.id + xoff;
          var j = this.jd + yoff;
          if (i >= 0 && i < this.others.length && j >= 0 && j < this.others.length) {
            var neighbor = this.others[i][j];
            if (neighbor.mine < freq) {
              total = total + 1;
            }
          }
        }
      }
      return (total);
    }
    return (total);
  }



  show() {
    noStroke();
    fill(220);
    rect(this.x, this.y,
      this.area, this.area);
    if (this.revealed) {
      fill(110, 120);
      rect(this.x, this.y,
        this.area, this.area);
      if (this.mine < freq) {
        fill(20, 110);
        ellipse(this.x + 20, this.y + 20, this.area / 1.8);
      }
      if (this.counter() !== 0) {
        textAlign(CENTER);
        fill(0);
        textSize(22);
        text(this.counter(), this.x + 20, this.y + 28);
      }
    }
  }
}