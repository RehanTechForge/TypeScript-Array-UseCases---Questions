var numbers = [1, 3, 4, 57, 8];
var squareNumbers = numbers.map(function (number) { return number * 2; });
console.log("Square Of All Number : " + squareNumbers);
var greaterThanFifty = squareNumbers.filter(function (number) { return number > 50; });
console.log("Number found greater than fifty : " + greaterThanFifty);
var sumOfArray = numbers.reduce(function (accum, curVal) { return accum + curVal; }, 0);
console.log("Sum of All Numbers" + sumOfArray);
