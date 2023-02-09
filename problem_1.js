// Problem 1: Let’s play a mind game.

// You have a function called mindGame("it will take a positive number as input")
// Now your task: You have to multiply 3 wtih the number, then add 10 with it, devide it with 2. and then, substract 5 from it, return the output

// Sample Input & Output
// Input: 5
// Output: 7.5

// Input: 50
// Output: 75

// Input: 33
// Output: 49.5

let numbers = parseInt(prompt("Enter Your Number "));

function mindGame() {
  if (!isNaN(numbers)) {
    numbers = numbers * 3;
    numbers = numbers + 10;
    numbers = numbers / 2;
    numbers = numbers - 5;
    document.write("Your result is " + numbers);
  } else {
    document.write("Your input is not a Number ");
  }

  return numbers;
}

mindGame();
