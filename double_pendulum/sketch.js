//raios
let r1 = 125;
let r2 = 125;
//massas
let m1 = 10;
let m2 = 10;
//angulos
let a1;
let a2;
//velocidades
let a1_v = 0;
let a2_v = 0;
//gravidade
let g = 1;
//Background ex
let ex;
let px2 = -1;
let py2 = -1;

let cor;

function setup() {
  createCanvas(550, 300);
  a1 = PI / 2;
  a2 = PI / 2;
  pixelDensity(1);
  ex = createGraphics(width, height);
  ex.background(90);
  ex.translate(width/2, 50);
  cor = color(220, 79, 170);
}

function draw() {
  // background(220);
  image(ex, 0, 0, width, height);
  translate(width/2, 50);
  
  let num1 = -g * (2 * m1 + m2) * sin(a1);
  let num2 = -m2 * g * sin(a1 - 2 * a2);
  let num3 = -2 * sin(a1 - a2) * m2;
  let num4 = a2_v * a2_v * r2 + a1_v * a1_v * r1 * cos(a1 - a2);
  let den = r1 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));
  //ACELERACAO
  let a1_a = (num1 + num2 + num3 * num4) / den;

  num1 = 2 * sin(a1 - a2);
  num2 = (a1_v * a1_v * r1 * (m1 + m2));
  num3 = g * (m1 + m2) * cos(a1);
  num4 = a2_v * a2_v * r2 * m2 * cos(a1 - a2);
  den = r2 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));
  //ACELERACAO 2
  let a2_a = (num1 * (num2 + num3 + num4)) / den;
  
  //Update da posicao
  let x1 = r1 * sin(a1);
  let y1 = r1 * cos(a1);

  let x2 = x1 + r2 * sin(a2);
  let y2 = y1 + r2 * cos(a2);
  
  //Update das variaveis
  a1_v += a1_a;
  a2_v += a2_a;
  a1 += a1_v;
  a2 += a2_v;
  
  //Desenho
  
  stroke(225);
  fill(225);
  strokeWeight(2);
  line(0, 0, x1, y1);
  line(x1, y1, x2, y2);
  ellipse(x1, y1, 1.5 * m1);
  ellipse(x2, y2, 1.5 * m2);
  
  ex.stroke(cor);
  if (frameCount > 1) {
    ex.line(px2, py2, x2, y2);
  }

  px2 = x2;
  py2 = y2;
}