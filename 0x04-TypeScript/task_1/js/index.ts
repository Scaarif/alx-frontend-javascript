import {Teacher, Directors, printTeacher, StudentClass, StudentClassConstructor} from './main'

const teacher3: Teacher = {
firstName: 'John',
fullTimeEmployee: false,
lastName: 'Doe',
location: 'London',
contract: false
}

console.log('teacher3:', teacher3)

const director1: Directors = {
    firstName: 'John',
    fullTimeEmployee: true,
    lastName: 'Doe',
    location: 'London',
    contract: true,
    numberOfReports: 17
}

console.log(director1)

console.log(printTeacher('John', 'Doe'))

// test interface described class (studentsClass)
const StudentConstructor: StudentClassConstructor = StudentClass
const student = new StudentConstructor("Jane", "Doe")
console.log(student)
console.log(student.displayName())