function addNumber(a, b) {
  let sum = 0;
  sum = a + b;
  return sum;
}
console.log(addNumber(4, 3));

function greet() {
  console.log("Hello");
}
greet();

//Default Parameters

function greet1(name = "Stranger") {
  console.log(`Good_Morning ${name}!`);
}
greet1();
greet1("Vaibvhavi");

//Helper Function

/*function multiplyByNineFifths(number) {
  return number * (9 / 5);
}
function getFeheranheit(celcius) {
  return multiplyByNineFifths(celcius) + 32;
}
getFeheranheit(15);
*/

function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs") {
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
makeShoppingList("Bananas");

// Area of a Rectangle

function rectangleArea(width, height) {
  let area = width * height;
  console.log(area);
}

rectangleArea(3, 2);

//Area of a square

function SquareArea(a) {
  let area = 4 * a;
  console.log(area);
  return area;
}
SquareArea(15);

// Perimeter of a circle

function PerimeterOfCircle(radius) {
  C = 2 * 3.14 * radius;
  console.log(C);
  return C;
}
PerimeterOfCircle(10);

//Area of a circle

function AreaOfCircle(radius) {
  let area1 = 3.14 * radius * radius;
  console.log(area1);
  return area1;
}
AreaOfCircle(15);

// Perimeter of rectangle

function PerimeterOfRectangle(length, width) {
  C1 = 2 * width + length;
  console.log(C1);
  return C1;
}
PerimeterOfRectangle(5, 8);

//Arrow Function

const rectangleOfArea = (width, height) => {
  let area2 = width * height;
  console.log(area2);
  return area2;
};
rectangleArea(9, 8);

//Single lineBlock

const squareNum = (num) => num * num;
console.log(squareNum(6));

// MultiLine Block

const sumNumbers = (number) => {
  const sum = number * number;
  console.log(sum);
  return sum;
};
sumNumbers(7);

//Anonymous Function

let Multiplication = function (a, b) {
  let multiply = a * b;
  console.log(multiply);
  return multiply;
};
Multiplication(4, 3);

// Function Hoisting

greet2();
function greet2() {
  console.log("Mission Successfull");
}
