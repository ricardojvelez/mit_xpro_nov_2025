//Example 1: Traditional Function
function double(num) {
  return num * 2;
}

//Example 2: Arrow Function with implicit return
const doubleArrow = (num) => num * 2;

//Example 3: Arrow Function with explicit return
const doubleArrowExplicit = (num) => {
  return num * 2;
};

console.log(double(5)); // Output: 10
console.log(doubleArrow(5)); // Output: 10
console.log(doubleArrowExplicit(5)); // Output: 10
