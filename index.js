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

// 自分なりの解答
const abc = [];
getA()
  .then(a => {
    abc.push(a);
    return getB();
  }).then(b => {
    abc.push(b);
    return getC();
  }).then(c => {
    abc.push(c);
    console.log(`自分の解答: ${abc.reduce((v1, v2) => v1 * v2)}`);
  });

// 教材のヒントに基づく解答
getA()
  .then(a => getB().then(b => a * b))
  .then(ab => getC().then(c => ab * c))
  .then(abc => console.log(`教材のヒントに基づく解答: ${abc}`));

// 教材の正答の Promise.all の例
Promise
  .all([getA(), getB(), getC()])
  .then(results => console.log(`教材の正答の Promise.all の例: ${results.reduce((v1, v2) => v1 * v2)}`));
