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

getA().then(a => getB().then(b => getC().then(c => a*b*c))).then(v => console.log(v));

//getA().then(a => getB().then(b => a*b)).then(ab => getC().then(c => console.log(ab*c)));
//Promise.all([getA(),getB(),getC()]).then(([a,b,c]) => console.log( a*b*c));
//Promise.all([getA(),getB(),getC()]).then(l => console.log( l.reduce((o,v)=>o*v)));
