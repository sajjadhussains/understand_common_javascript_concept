function greeting(eventHandler, name) {
  eventHandler(name);
}

function morningHandler(name) {
  console.log("Good Morning", name);
}
function eveningHandler(name) {
  console.log("Good Evening", name);
}
greeting(morningHandler, "sajjad");
greeting(eveningHandler, "Gadha");

/**
 * what is callback function?
 * answer:
 *      A callback function is a function which takes a function as an argument and the function is called within that function.
 *(definately google before interview)
 */
