console.log("Hiii");

//Insert number in the Array

/*let arr = [9, 8, 7, 6, 5, 4, 3, 2];
let newEle = 1000;
let position = 2;
for (let i = arr.length - 1; i >= 0; i--) {
  if (i >= position) {
    arr[i + 1] = arr[i];
    if (i == position) {
      arr[i] = newEle;
    }
  }
}
console.log(arr);
*/

const myArray = ["h", "e", "l", "l", "O"];
console.log(myArray[4]);
console.log(myArray.length);

// Add an Element to an Array

let dailyActivities = ["eat", "sleep"];
dailyActivities.push("exercise");
dailyActivities.unshift("work");

// Remove an Element to an Array

dailyActivities.pop();
dailyActivities.shift();
console.log(dailyActivities);

let dailyActivities = ["Eat", "sleep", "work"];
