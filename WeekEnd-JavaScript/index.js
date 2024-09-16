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

// 2.4 Unique
//using indexof and lastindexof , we can check it the element is wroten more than once, (ckeck there is the first index and the last of that element. )
function findUniq(arr) {
  for (let num of arr) {
    if (arr.indexOf(num) === arr.lastIndexOf(num)) {
      return num;
    }
  }
}
// (if the index of the start and the end is === there is only one. if not there is more that one cuz the indexs is not ===. )

console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([0, 0, 0.55, 0, 0]));

// 2.5 Summation

function summation(num) {
  let = sum = 0;
  let = arr = [];
  for (let i = 1; i <= num; i++) {
    sum += i;
    arr.push(i);
  }
  return sum;
}
console.log(summation(8));
console.log(arr);

// 2.6 Years and Centuries

function basicOp(op, num1, num2) {
  // make a condition that in case its op(+ - / *) do the math else its an error
  switch (op) {
    case "+":
      return num1 + num2;
      break;

    case "-":
      return num1 - num2;
      break;

    case "*":
      return num1 * num2;
      break;

    case "/":
      return num1 / num2;
      break;
    default:
      console.log("Invalid Operation");
  }
}

console.log(basicOp("+", 4, 7));
console.log(basicOp("-", 10, 7));
console.log(basicOp("*", 2, 2));
console.log(basicOp("/", 10, 5));
console.log(basicOp("=", 4, 7));

// math in story

// 3.1  Growth Of population

function population(p0, percent, inhabitants, p) {
  let years = 0;
  while (p0 < p) {
    p0 += p0 * (percent / 100) + inhabitants;
    years++;
  }
  return years;
}

console.log(population(1000, 2, 50, 1200));

// not working " weird" .....................

// 3.2 People on the Bus

// sorry i didnt finish it all
