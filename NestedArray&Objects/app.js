function calculateAverageGrade(student) {
    // Check if grades array is empty
    if (!student.grades.length) {
        // console.log(student.grades.length);
        student.averageGrade = 0.0;
        return student;
    }
    var totalGrade = student.grades.reduce(function (acc, grade) { return acc + grade; }, 0);
    student.averageGrade = totalGrade / student.grades.length;
    console.log(student.grades.length);
    return student;
}
// Example usage
var students = [
    { name: "Alice", id: 1, grades: [85, 90, 95] },
    { name: "Bob", id: 2, grades: [75, 82, 88] },
    { name: "Charlie", id: 3, grades: [] }, // Empty grades list
];
var studentsWithAverageGrades = students.map(calculateAverageGrade);
console.log(studentsWithAverageGrades);
