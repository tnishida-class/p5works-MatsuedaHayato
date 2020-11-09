// テキスト「関数を作る(2) 値を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  for(let i = 2000; i <= 2100; i++){
    if(isLeapYear(i)){
      console.log(i + "年は366日です");
    }
    else{
      console.log(i + "年は365日です");
    }
  }
}

function isLeapYear(y){
  return(y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}
