"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  let x1;
  let x2;
  if (d < 0) {
    arr = [];
  } else if (d == 0) {
    x1 = -b / (2 * a);
    arr = [x1];
  } else {
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr = [x1, x2];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent /= 1200;
  let loans = amount - contribution;
  let payment =
    loans * (percent + percent / ((1 + percent) ** countMonths - 1));
  let allAmount = payment * countMonths;
  return allAmount.toFixed(2);
}
