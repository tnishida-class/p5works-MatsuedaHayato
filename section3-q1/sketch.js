// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46", 50, 60);
  fill(52, 198, 235);
  noStroke();
  beginShape();
  vertex(239, 125);
  vertex(239, 145);
  vertex(260, 150);
  endShape();
}

function balloon(t, x, y){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  fill(x + 2, x + y + 88, x * 4 + 35);
  noStroke();
  rect(x * 2, x * 2, w + x / 2, h + y - x + 15);
  fill(0);
  text(t, x + 55, h + x + y - 5);
}
