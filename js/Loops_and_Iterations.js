console.log("Hi............");

// Write a JS code to print numbers from 1 to 10

/*function printNumber(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
printNumber();

// Write a JS code to print a 2D array

function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      console.log(arr[i][j]);
    }
  }
}
let arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
printArray(arr);
*/
// Write a JS code to print Even numbers in given array

function printEven(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      console.log(arr[i]);
    }
  }
}
let arr = [13, 23, 12, 45, 22, 48, 66, 100];
printEven(arr);

//  Write a JS code to calculate the sum of digits in a number

function digitSum(num) {
  let sum = 0;
  while (num != 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log(digitSum(4326));
console.log(digitSum(4759));

// Write a JS code to print a pattern using for loop

function printPattern(range) {
  for (let i = 1; i <= range; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += j + " ";
    }
    console.log(str);
  }
}
printPattern(8);
