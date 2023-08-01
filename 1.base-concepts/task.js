"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  let x1;
  let x2;
  if (d > 0) {
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr = [x1, x2];
  } else if (d == 0) {
    x1 = -b / (2 * a);
    arr = [x1];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthPercent = percent / 1200;
  let loans = amount - contribution;
  let payment =
    loans *
    (monthPercent + monthPercent / ((1 + monthPercent) ** countMonths - 1));
  let allAmount = payment * countMonths;
  return Number(allAmount.toFixed(2));
}
