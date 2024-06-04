var matrix = [
    [1, 2, 3],
    [11, 22, 33],
    [12, 13, 14]
];
for (var index = 0; index < matrix.length; index++) {
    var element_1 = "The Diagnol Elements of the array is :".concat(matrix[index][index]);
    console.log(element_1);
}
// for (let index = 0; index < matrix.length; index++) {
//   console.log("Outer Loop" + matrix[index]);
//   for (let i = 0; i < 3; i++) {
//     let element = 0;
//     element += matrix[index][i];
//     console.log(element);
//   }
// }
var element = 0;
matrix.forEach((function (item, index) {
    console.log("".concat(index + 1, " Row : ").concat(item));
    item.forEach((function (item) {
        element = element + item;
    }));
}));
console.log("The sum of all Matrix is : ".concat(element));
