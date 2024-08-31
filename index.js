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

Promise.all([
  getA(),
  getB(),
  getC(),
]).then(values => {
  let product = 1;
  for (const value of values) {
    product *= value;
  }
  console.log(product);
});
