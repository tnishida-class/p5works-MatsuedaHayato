// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  fill(196);
  for(let i = 0; i < 8; i++){
    if(i % 2 == 1){
      for(let j = 0; j < 4; j++){
        rect(25 * i, 50 * j, 25, 25);
      }
    }
    else{
      for(let k = 0; k < 4; k++){
        rect(25 * i, 50 * k + 25, 25, 25);
      }
    }
  }
  fill(255, 0, 0);
  for(let l = 0; l < 4; l++){
    for(let m = 0; m < 3; m++){
      if(m % 2 == 0){
        ellipse(50 * l + 37.5, 25 * m + 12.5, 25);
      }
      else{
        ellipse(50 * l + 12.5, 25 * m + 12.5, 25);
      }
    }
  }
  fill(0);
  for(let n = 0; n < 4; n++){
    for(let o = 0; o < 3; o++){
      if(o % 2 == 0){
        ellipse(50 * n + 12.5, 25 * o + 137.5, 25);
      }
      else{
        ellipse(50 * n + 37.5, 25 * o + 137.5, 25);
      }
    }
  }
}
