function sign(n){
  if (n >= 0) return 1;
  else return -1;
}

class Perceptron {

  constructor(n, c) {
    this.weights = new Array(n);
    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i] = random(-1, 1);
    }
    this.c = c;
  }

  train(input, target) {
    let guess = this.sum(input);
    let error = target - guess;
    for (let i = 0; i < input.length; i++) {
      this.weights[i] += this.c * error * input[i];
    }
  }
  
  sum(input){
    let sum = 0;
    for (let i = 0; i < this.weights.length; i++){
      sum += this.weights[i] * input[i];  
    }
    return sign(sum);
  }
  
  getWeights(){
    return this.weights;
  }
}