const execFn = (resolve, reject) => {
  let action = "wash Clothes";
  if (action) {
    resolve("Success");
  } else {
    reject("Failure");
  }
};
const myPromise = new Promise(execFn);
myPromise
  .then(() => {
    console.log("Dry the Clothes");
  })
  .catch(() => {
    console.log("Wash Again");
  });

function reqListener() {
  console.log(this.responseText);
}

let req = new XMLHttpRequest();
req.addEventListener("load", "reqListener");
req.open("GET", "https://www.google.com/search?q=test");
req.send();
