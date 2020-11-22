// 最終課題を制作しよう

let x;
let count;

function setup(){
  createCanvas(windowWidth, windowHeight);
  count = 0;
}

function draw(){
  background(160, 192, 255);
  stroke(51);
  strokeWeight(5);

  for(let i = 0; i < 4; i++){
    if(even(i)){
      line(200 * i + 400, 150, 100 * i + 500, 175)
      }
    else{
       line(200 * i + 200, 150, 100 * i + 400, 125);
    }
  }

  for (let k = 0; k < 4; k++){
    if(even(k)){
      line(200 * k + 400, 350, 300 * k + 300, 325);
    }
    else{
      line(200 * k + 200, 350, 300 * k, 375);
    }
  }
  line(400, 150, 800, 150);
  line(400, 350, 800, 350);

  count = (count + 1) % 400;
  if(count < 200){
    x = count
  }
  else{
    x = -1 * count + 400
  }

  line(400, -1 * x + 350, 800, -1 * x + 350);
}

function even(y){
  return (y % 2 == 0);
}

function windowResized(){ 
  resizeCanvas(windowWidth, windowHeight);
}
