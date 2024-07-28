let a = 5;
let b = 7;

function multiply(num1, num2) {
  num1 = 27;
  let mul = num1 * num2;
  return mul;
}

const result = multiply(a, b);
// console.log(result);

let student1 = { name: "sajjad", partners: "nabila" };
let student2 = { name: "galib", partners: "priyanka" };

function makeMovie(couple1, couple2) {
  couple1.partners = "reject";
  couple2.partners = "kotha";
}

// console.log(student1, student2);
makeMovie(student1, student2);
console.log(student1, student2);

/**
 * primitive types are pass by value-->where outer scope doesn't change
 * non primitive types are pass by refference-->where outer scope array or object is changed
 */
