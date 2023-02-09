/** @format */

// Problem 2: Finding even or odd
// A function called evenOdd() is provided. It will take string as input.
// Now your task: Output will be 'even' or 'odd' according to the number of total characters of string.
// If user does not enters a string, output will return an error message.
// Sample Input & Output:

// Input: ‘Phero’   // Input: ‘Batch7’
// Output: odd      // Output: even

var input = prompt("Enter a String");

function evenOdd() {
  if (isNaN(input)) {
    if (input.length % 2 == 0) {
      document.write("Even");
    } else {
      document.write("Odd");
    }
  } else {
    document.write("Your input is invalid");
  }

  return input;
}

evenOdd();
