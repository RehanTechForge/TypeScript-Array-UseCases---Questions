const numbers: number[] = [1, 3, 4, 57, 8];

let squareNumbers = numbers.map((number) => number * 2)

console.log("Square Of All Number : " + squareNumbers);

let greaterThanFifty = squareNumbers.filter((number) => number > 50)
console.log("Number found greater than fifty : " + greaterThanFifty);

let sumOfArray = numbers.reduce((accum, curVal) => accum + curVal, 0);
console.log("Sum of All Numbers : " + sumOfArray);
