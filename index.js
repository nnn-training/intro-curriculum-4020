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

// 解答1
getA().then(a => {
  return getB()
    .then(b => {
      return a * b;
    });
})
  .then(mulab => {
    getC().then(c => {
      console.log(mulab * c);
    });
  });

// 解答2
const promises = [getA(), getB(), getC()];
let mul = 1;
Promise.all(promises)
  .then(nums => {
    nums.forEach(function (num) {
      mul *= num;
    });
    console.log(mul);
  });
