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

const result = getA()
  .then(value => {
    return getB().then(b => {
      return value * b;
    });
  })
  .then(value => {
    getC().then(c => {
      console.log(value * c);
    })
  });
