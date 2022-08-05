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

getA()
	.then((v1) => {
		return getB().then((v2) => {
			return getC().then((v3) => {
				console.log(v1 * v2 * v3);
			})
		})
	});
