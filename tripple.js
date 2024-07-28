const a = 2;
const b = true;

if (a === b) {
  console.log("a and b are equals");
} else {
  console.log("a and b are not equals");
}

/**
 *
 * double equal(==) checks only value
 * but
 * tripple equal(===) checks value and type both
 *
 * Type coercion: in JavaScript refers to the process by which the language automatically converts values from one type to another when performing operations. This can happen implicitly (automatically) or explicitly (when the developer intentionally converts the type)
 */

const first = [];
const second = [];

if (first == second) {
  console.log("equal");
} else {
  console.log("not equal");
}

/**
 * always use ===
 * equal comparison doesn't work for non primitive
 */
