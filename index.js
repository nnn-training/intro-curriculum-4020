'use strict';

function getA() {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(11); }, 1000);
  });
}

function getB() {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(13); }, 1000);
  });
}

function getC() {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(17); }, 1000);
  });
}

// TODO ここに getA, getB, getC で得られる結果をかけあわせた結果 2431 を標準出力するコードを記述する
// ただし Promise チェイン(then関数の結果に対するthen関数の呼び出し)を一度は用いて実装をすること

let cnt = 0;
let valueA, valueB, valueC;

getA().then(a => {valueA = a; cnt++; conclusionDisplay();});
getB().then(b => {valueB = b; cnt++; conclusionDisplay();});
getC().then(c => {valueC = c; cnt++; conclusionDisplay();});

function conclusionDisplay () {
  if (cnt < 3){
    console.log(`valueA = ${valueA}, valueB = ${valueB}, valueC = ${valueC}`);
  }else{
      console.log(`Result = ${valueA * valueB * valueC}`);
  };
}
