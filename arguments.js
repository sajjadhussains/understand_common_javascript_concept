function add(a, b, c) {
  //accepting arguments in a function is called parameters.
  console.log(arguments); //array like object
  console.log(typeof arguments); //object will give
  const args = [...arguments]; //[ 12, 24, 11, 22, 10, 20 ]
  console.log(args);
  const total = a + b + c;
  return total;
}

const result = add(12, 24, 11, 22, 10, 20); //when we are calling function,then passing elements within function is called arguments.
console.log(add.length); //this will give number of parameters
console.log(result);
