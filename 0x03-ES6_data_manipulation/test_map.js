export default function updateStudentGradeByCity(students, city, newGrades) {
  // returns a array of students (objects) for a specific city with their new grade
  if (!Array.isArray(students) || typeof city !== 'string') { return 0; }
  // else return sum
  return students.filter((student) => student.location === city).map((student) => {
    const sGrade = newGrades.filter((grade) => grade.studentId === student.id);
    const sObj = { ...student };
    if (sGrade.length) {
      sObj.grade = sGrade[0].grade;
    } else {
      sObj.grade = 'N/A';
    }
    return sObj;
  });
}
