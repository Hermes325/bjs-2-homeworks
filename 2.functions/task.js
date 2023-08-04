function getArrayParams(...arr) {
  let min, max, avg;
  min = Math.min(...arr);
  max = Math.max(...arr);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min, max, diff;

  min = Math.min(...arr);
  max = Math.max(...arr);
  if (arr.length == 0) {
    diff = 0;
  } else {
    diff = max - min;
  }

  return diff;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  let diff = sumEvenElement - sumOddElement;
  return diff;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
      count++;
    }
  }
  let avg = sumEvenElement / count;
  return avg;
}

function makeWork(arrOfArr, func) {}

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  return sum;
}

function makeWork(arrOfArr, func) {
  func();
  let maxWorkerResult = 0;
}

const arr = [10, 10, 11, 20, 10];
console.log(makeWork(arr, summElementsWorker));
