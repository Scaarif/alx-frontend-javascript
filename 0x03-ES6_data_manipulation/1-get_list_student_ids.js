export default function getListStudents(students) {
  // returns an array of ids from a list of objects (students)
  if (!Array.isArray(students)) { return []; }
  // else return an array of student ids
  return students.map((student) => student.id);
}
