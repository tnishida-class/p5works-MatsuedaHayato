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
  let p = x / 10;
  fill(x + 2, x + y + 88, x * 4 + 35);
  noStroke();
  rect(x * 2, x * 2, w + p * p, h + p * p);
  fill(0);
  text(t, p + 100, h + p + 100);
}
