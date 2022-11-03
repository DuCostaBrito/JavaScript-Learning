let Xmin = -1;
let Xmax = 1;
let Ymin = -1;
let Ymax = 1;
//Perceptron
let ptron;
//Points
let pt = new Array(1000);

let count = 0;

function setup() {
  createCanvas(400, 400);
  ptron = new Perceptron(3, 0.01);
  for(let i =0; i < pt.length; i++){
    pt[i] = new Point();  
  }
  
}

function draw() {
  background(80);
  //Desenhando a linha
  let z = map(f(Xmin), Xmin, Xmax, 0, height);
  let y = map(f(Xmax), Xmin, Xmax, 0, height);
  stroke(0);
  line(0, z, width, y);
  
  //Desenho da Linha de ajuste
  let weights = ptron.getWeights();
  let y1 = (-weights[2] - weights[0] * Xmin) / weights[1];
  let y2 = (-weights[2] - weights[0] * Xmax) / weights[1];
  
  y1 = map(y1, Ymin, Ymax, 0, height);
  y2 = map(y2, Ymin, Ymax, 0, height);
  strokeWeight(2);
  stroke(255, 100, 150);
  line(0, y1, width, y2);
  
  //Training set
  if (count < pt.length){
    ptron.train(pt[count].inputs(),pt[count].answer);
    count++;
  }else{
    count = 0;
  }
  
  for(let i = 0; i < count; i++){
      let x = map(pt[i].x, Xmin, Xmax, 0, width);
      let y = map(pt[i].y, Ymin, Ymax, 0, height);
    if(ptron.sum(pt[i].inputs()) > 0){
      noStroke();
      fill(255, 150);
      ellipse(x, y, 8);
    }else{
      noStroke();
      fill(0, 150);
      ellipse(x, y, 8);
    }
  }
  
}
//Funcao da linha
function f(x){
  return x * - 0.3 - 0.2;
}