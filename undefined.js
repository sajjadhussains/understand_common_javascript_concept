//how many ways to get undefined: 8 ways to get undefined
/**
 * 1.variable that is not initialized will give undefined
 * 2.function with no return
 * 3.parameter that is not passed will give undefined
 * 4.if return has nothing on the right side,then will return undefined
 * 5.property that doesn't exist on an object,by default that will give undefined
 * 6.Accessing array elements outside of the range will give undefined
 * 7.accessing delete elements from an array
 * 8.set a value directly undefined
 */
/*
example-1
let first;
console.log(first);
*/
/*
example-2
const first=(a,b)=>{
    total = a+b;
    }
   const result = first();//will give undefined
*/
/*
example-3
const second=(a,b,c,d)=>{
    console.log(a,b,c,d)//c and d will be undefined
    }
   second(3,5);
*/
/*
example -4
const nonNegetive = (a, b) => {
  if (a < 0 || b < 0) {
    return; //when this condition will be true,then it will return undefined
  }
  return a + b;
};
console.log(nonNegetive(5, -6));
*/
/*
example-5
const fifth = { id: 1, name: "shuvo", graduate: true };
console.log(fifth.age);
*/
/*
example-6
const sixth = [1, 2, 3, 4, 5];
console.log(sixth[5]);
*/
/*
example -7
const sixth = [1, 2, 3, 4, 5];
//you should not do it,instead you can use splice
delete sixth[1];
console.log(sixth[1]);
*/
/*
example-8
let eight = undefined;
console.log(undefined);
*/
console.log(typeof undefined); //it will give undefined
console.log(typeof null); //it will give object--it is confusing,but try to remember
