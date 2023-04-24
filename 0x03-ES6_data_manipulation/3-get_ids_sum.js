export default function getStudentIdsSum(students) {
  // returns sum of student ids (uses reduce)
  if (!Array.isArray(students)) { return 0; }
  // else return sum
  return students.reduce((sum, student) => sum + student.id, 0);
}
