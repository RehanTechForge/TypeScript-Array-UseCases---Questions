type Student = {
  name: string;
  id: number;
  grades: number[];
  averageGrade?: number; // Optional property to store average grade
};

function calculateAverageGrade(student: Student): Student {
  // Check if grades array is empty
  if (!student.grades.length) {
    // console.log(student.grades.length);
    student.averageGrade = 0.0;
    return student;
  }

  const totalGrade = student.grades.reduce((acc, grade) => acc + grade, 0);
  student.averageGrade = totalGrade / student.grades.length;
  console.log(student.grades.length);

  return student;
}

// Example usage
const students: Student[] = [
  { name: "Alice", id: 1, grades: [85, 90, 95] },
  { name: "Bob", id: 2, grades: [75, 82, 88] },
  { name: "Charlie", id: 3, grades: [] }, // Empty grades list
];

const studentsWithAverageGrades = students.map(calculateAverageGrade);

console.log(studentsWithAverageGrades);