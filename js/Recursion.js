// Find the product of 5

function product(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * product(n - 1);
    console.log(n);
  }
}
product(5);
