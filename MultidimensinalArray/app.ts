const matrix: number[][] = [
  [1, 2, 3],
  [11, 22, 33],
  [12, 13, 14]
];

for (let index = 0; index < matrix.length; index++) {
  const element = `The Diagnol Elements of the array is :${matrix[index][index]}`;
  console.log(element);
}

// for (let index = 0; index < matrix.length; index++) {
//   console.log("Outer Loop" + matrix[index]);

//   for (let i = 0; i < 3; i++) {
//     let element = 0;
//     element += matrix[index][i];
//     console.log(element);
//   }
// }

let element = 0;
matrix.forEach(((item, index) => {
  console.log(`${index + 1} Row : ${item}`);
  item.forEach((item => {
    element = element + item;
  }))
}))
console.log(`The sum of all Matrix is : ${element}`);