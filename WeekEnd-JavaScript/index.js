//simple math

function yeaOrNo(value) {
  return value ? "Yes" : "No";
}
console.log(yeaOrNo(false));

// 2.1 Sum of lowest numbers

function lowestNumber(arr) {
  let sorted = [...arr];
  sorted.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    sum = sorted[0] + sorted[1];
  }

  return sum;
}

console.log(lowestNumber([19, 5, 42, 2, 77]));
console.log(lowestNumber([10, 343445353, 3453445, 3453545353453]));

// 2.2 One and Zero - Binary

function Binary(arr) {
  let sum = 0;
  let index = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    sum = sum + arr[i] * 2 ** index;
    index++;
  }
  return sum;
}

console.log(Binary([1, 1, 1, 1]));

function bin(str) {
  return parseInt(str, 2);
}

console.log(bin("0001"));

// 2.3 Find the Next Perfect Square

function findNextSquare(num) {
  let root = Math.sqrt(num);
  if (!Number.isInteger(root)) {
    return -1;
  }

  let nextRoot = root + 1;
  let nextSquare = nextRoot * nextRoot;
  return nextSquare;
}

// let num = 121;
let nextSquare = findNextSquare(12);
console.log(nextSquare);
