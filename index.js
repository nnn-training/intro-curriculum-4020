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

//３つのpromiseを１つのpromiseにしてまとめて完了を待つ
Promise.all([getA(), getB(), getC()])
  .then(iterable => {
    console.log(`３つのpromiseを１つのpromiseにしてまとめて完了を待つ:${iterable[0] * iterable[1] * iterable[2]}`);
  });

// getA,getBのpromiseの返り値を外の変数に保存
let a,b;
getA()
  .then(value => {
    a = value;
    return getB();
  })
  .then(value => {
    b = value;
    return getC();
  })
  .then(value => {
    console.log(`getA,getBのpromiseの返り値を外の変数に保存:${a * b * value}`);
  });

//３重ネスト
getA().then(a => {
  return getB().then(b => {
    return getC().then(c => {
      console.log(`３重ネスト:${a * b * c}`);
    });
  });
});

// promiseの値を１つずつ取り出して掛けて行く 一度掛けるごとにpromiseを渡していく
getA()
  .then(a => {
    return getB().then(b => {
      return a * b;
    });
  })
  .then(result => {
    getC().then(c => {
      console.log(`promiseの値を１つずつ取り出して掛けて行く:${result * c}`);
    })
  });



// async,await利用
getA().then(async(a) => {
  const b = await getB();
  const c = await getC();
  console.log(`async,await利用:${a * b * c}`);
});
