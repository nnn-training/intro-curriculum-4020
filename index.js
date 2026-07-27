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
/*  オーソドックス：複雑
getA()
  .then(a => {
    return getB().then(b => {
      return a * b;
    });
  })
  .then(result => {
    getC().then(c => {
      console.log(result * c);
    });
  });
*/
/*　簡略版
async function main() {
  const a = await getA(); // 1秒待つ (11)
  const b = await getB(); // 1秒待つ (13)
  const c = await getC(); // 1秒待つ (17)
  console.log(a * b * c); // 約3秒後に 2431 を出力
}
main();
*/
// 3つの処理を同時にスタートさせて、全部終わるのを待つ
Promise.all([getA(), getB(), getC()]).then(([a, b, c]) => {
  console.log(a * b * c); // たった1秒後に 2431 を出力！
});