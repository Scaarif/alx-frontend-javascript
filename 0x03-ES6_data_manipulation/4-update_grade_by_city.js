export default function updateStudentGradeByCity(students, city, newGrades) {
  // returns a array of students (objects) for a specific city with their new grade
  if (!Array.isArray(students) || typeof city !== 'string') { return 0; }
  return students.filter((student) => student.location === city).map((student) => {
    const sGrade = newGrades.filter((grade) => grade.studentId === student.id);
    const studentObj = { ...student }; // assigning/mutating param seems to cause lint errors
    if (sGrade.length) {
      studentObj.grade = sGrade[0].grade;
    } else {
      studentObj.grade = 'N/A';
    }
    return studentObj;
  });
}
