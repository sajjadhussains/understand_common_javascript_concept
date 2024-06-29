//strongly typed language
/*
int a = 5;
string b = "sajjad hussain";
bool c = true;
object student = {name:"sajjad",age:25};
int arr[]=[1,2,3];
string friends[]=["lami","adnan","shohan"]
*/

//javasript is dynamic typed language
/*
//primitive type
const a = 5;
const b ="sajjad hussain"
const c = true;
//non primitive type
const student ={name:'sajjad hussain',age:25}
const arr[1,2,3];
const friends = ["lami","adnan","shohan"]
console.log(typeof a,typeof b,typeof c,typeof student,typeof friends)
*/
//primitive example--primitive assign different different memory blocks for different different variables
let x = 5;
let y = 6;
x = y;
console.log(x, y);
y = 7;
console.log(x, y);

//non primitive example -- it refferes to the same variable
let p = { job: "front end developer" }; //alada alada declare kora hoise
let q = { job: "backend developer" }; //alada alada declare kora hoise
//but if we declare another variable name z,then
let z = p;
z.job = "full stack developer";
console.log(p, z);
