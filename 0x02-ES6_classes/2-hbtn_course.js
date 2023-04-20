export default class HolbertonCourse {
  constructor(name, length, students) {
    // verify type of values
    if (typeof name !== 'string') { throw new TypeError('Name must be a string'); }
    if (typeof length !== 'number') { throw new TypeError('Length must be a number'); }
    if (!Array.isArray(students) || students.every((item) => typeof item !== 'string')) { throw new TypeError('Students must be an array of strings'); }
    this._name = name;
    this._length = length;
    this.students = students;
  }

  // define a setter for all the properties/fields
  set name(name) {
    this._name = name;
  }

  set length(length) {
    this._length = length;
  }

  set students(students) {
    this._students = students;
  }

  // define getters of the same
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }
}
