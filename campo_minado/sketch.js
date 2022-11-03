var freq = 0.2; //Define a frequencia de bombas.


function mousePressed(){
  for (var i = 0; i < grid.length; i++){
    for (var j = 0; j < grid.length; j++){
      if (grid[i][j].contains(mouseX, mouseY)){
          grid[i][j].reveal();
      }
    }
  }
}

  

function Make_array2D(rows, cols){
  var array = new Array(cols);
  for (var i = 0; i < array.length; i++){
    array[i] = new Array(rows);
  }
  return array;
}
  

   
function setup() {
  createCanvas(400,400);
  var size = 40;
  var rows = floor(width / size);
  var cols = floor(height / size);
  grid = Make_array2D(rows, cols);
  for (var i = 0; i < grid.length; i++){
    for (var j = 0; j < grid.length; j++){
      grid[i][j] = new Cell(i * size, j * size,
                            size, i, j, grid);
    }
  }
  
}

function draw() {
  background(255);
  for (var i = 0; i < grid.length; i++){
    for (var j = 0; j < grid.length; j++){
      grid[i][j].show();
    }
  }
}