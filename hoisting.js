//variable and function can be hoisted.thats why we should avoid var during the declaration of variables and normal function declaration,use const or let name of the function

for (var i = 0; i < 5; i++) {
  //   console.log(i);
}
// console.log(i);//here will print the i value =5 which is unexpected.it occurs for the hoisting.
print_5();
function print_5() {
  console.log(5);
}
print_10();
const print_10 = function () {
  console.log(10);
};
