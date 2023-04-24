export default function updateStudentGradeByCity(students, city, newGrades) {
  // returns a array of students (objects) for a specific city with their new grade
  if (!Array.isArray(students) || typeof city !== 'string') { return 0; }
  return students.filter((student) => student.location === city).map((student) => {
    const sGrade = newGrades.filter((grade) => grade.studentId === student.id);
    if (sGrade.length) {
      student.grade = sGrade[0].grade;
    } else {
      student.grade = 'N/A';
    }
    return student;
  });
}
