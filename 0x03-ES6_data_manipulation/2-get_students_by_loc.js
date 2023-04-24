export default function getStudentsByLocation(students, city) {
  // returns an array of ids from a list of objects (students)
  if (!Array.isArray(students) || typeof city !== 'string') { return []; }
  // else return an array of student ids
  return students.filter((student) => student.location === city);
}
