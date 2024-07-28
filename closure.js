function stopWatch() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}

let watch1 = stopWatch();
console.log(watch1());
console.log(watch1());

let watch2 = stopWatch();
console.log(watch2());
console.log(watch2());
console.log(watch2());

/**
 * inner function have excess of outer variables or functions
 * if we return function within another function and if we call the inner function then an instance or closure is created;
 */
