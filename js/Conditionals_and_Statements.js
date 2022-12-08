console.log("Hello..................");

//Check if a number is odd or even in JavaScript

function isEvenOrOdd(n) {
  if (n % 2 == 0) {
    console.log(`${n} is a Even Number`);
  } else {
    console.log(` ${n} is a Odd Number`);
  }
}
isEvenOrOdd(5);
isEvenOrOdd(20);

//Check if input variable is a number or not

function isNumber(num) {
  if (isNaN(num)) {
    console.log(`${num} is not a Number`);
  } else {
    console.log(`${num} is a valid Number`);
  }
}
isNumber(5);
isNumber("g");

// Find the largest of three number

function bigNumber(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} is a largerst Number`);
  } else if (num1 < num2) {
    console.log(`${num2} is largest Number`);
  } else {
    console.log(`${num1} is Equal to the ${num2}`);
  }
}
bigNumber(23, 47);
bigNumber(41, 41);
bigNumber(78, 30);

//Find the a number is present in given range

function Checkrange(num, start, end) {
  if (num >= start && num <= end) {
    console.log(`${num} is between ${start} and ${end}`);
  } else {
    console.log(`${num} is not between ${start} and ${end}`);
  }
}
Checkrange(7, 1, 10);
Checkrange(70, 1, 10);

//Perform arithmetic operations on two numbers

function evalNumbers(num1, num2, opretion) {
  if (opretion == "add") {
    console.log(`Sum of ${num1} and ${num2} is ${num1 + num2}`);
  } else if (opretion == "subtraction") {
    console.log(`Subtraction of ${num1} and ${num2} is ${num1 - num2}`);
  } else if (opretion == "multiply") {
    console.log(`Multiplication of ${num1} and ${num2} is ${num1 * num2}`);
  } else if (opretion == "Division") {
    console.log(`Division of ${num1} and ${num2} is ${num1 / num2}`);
  } else if (opretion == "Modulus") {
    console.log(`Modulus of ${num1} and ${num2} is ${num1 % num2}`);
  } else {
    console.log(`${opretion} is an invalid`);
  }
}

evalNumbers(10, 20, "add");
