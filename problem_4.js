/** @format */

// Problem 4: Finding Bad data
// A function called findingBadData() is given. It will take array as input. where, some numbers are provided. These numbers can be negative number (less than zero)  or positive number (greater than or equal to zero). If a number is negative, then we can call it a  “Bad Data”.If a number is positive then we can call it a “Good Data”.
// Now your task is to find and retrn those bad data.
// Sample Input & Output:-

// Input: [ 1,2,5 ]
// Output: 0

// Input: [ 2, -5, -7, -13 ]
// Output: 3

// Input: [ -4, -9, -5, -33, -55 ]
// Output: 5

function findingBadData(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      count++;
    }  
  }
  return count;
}
let result = findingBadData([1, 2, -5]);
console.log(result);
