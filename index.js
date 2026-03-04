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
// その１－１
getA().then(a => {
  return getB().then(b => {
    return a * b;
  });
})
.then(ab => {
  return getC().then(c => {
    return ab * c;
  })
})
.then(result => {
  console.log(result);
});

// その１－２
getA().then(a => {
  return getB().then(b => a * b);
})
.then(ab => {
  return getC().then(c => ab * c);
})
.then(result => {
  console.log(result);
});

// その２
Promise.all([getA(), getB(), getC()])
  .then(([a, b, c]) => {
    console.log(a * b * c);
});

// その３
async function calculate() {
  const a = await getA();
  const b = await getB();
  const c = await getC();
  console.log(a * b * c);
}
calculate();