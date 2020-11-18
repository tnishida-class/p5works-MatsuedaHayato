// タイ国旗
function setup() {
  createCanvas(270, 180);
   noStroke();
  background(255);
  for(i = 0; i < 6; i++){
    if(i == 2 || i == 3){
      fill(22, 2, 156);
    }
    else if(i == 1 || i == 4){
      fill(255);
    }
    else{
      fill(235, 52, 52);
    }
    rect(0, 30 * i, 270, 30);
  }
}
