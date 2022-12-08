//Blocking Function

function task(message) {
  let n = 1000;
  while (n > 0) {
    n--;
  }
  console.log(message);
}
console.log("Start script");
task("Download a file");
console.log("Done!");

//Callback Function

console.log(" 2 Start script");
setTimeout(() => {
  task("2 Download a file");
}, 2000);
console.log("2 Done!");

console.log("Hii!");
setTimeout(() => {
  console.log("Execute immediately.");
}, 1000);
console.log("Bye!");

// setTimeOut()

function greet() {
  console.log("Hello World");
}
setTimeout(greet, 3000);
console.log("This message is shown first");

function greet() {
  console.log("Hello World");
}
let intervalId = setTimeout(greet, 2000);
console.log("Id:" + intervalId);

//Display Time Every 3 seconds

function showTime() {
  let dateTime = new Date();
  let time = dateTime.toLocaleTimeString();
  console.log(time);
  Time = setTimeout(showTime, 1000);
}
showTime();
clearTimeout(Time);
console.log("setTimeout is Stopped");

//Use clearTimeOut Method

let count = 0;
function increaseCount() {
  count += 3;
  console.log(count);
}
let id = setTimeout(increaseCount, 1000);

clearTimeout(id);
console.log("SetTimeout is stopped.");

//Display a text once Every 1 second

function greet() {
  console.log("How are you");
}
setInterval(greet, 3000);
clearInterval(greet);

// Display TimeEvery 5 Seconds

function showTime() {
  let dateTime = new Date();
  let time = dateTime.toLocaleTimeString();
  console.log(time);
}
let display = setInterval(showTime, 1000);
clearInterval(interval);
