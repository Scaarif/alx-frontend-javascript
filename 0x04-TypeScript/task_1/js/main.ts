export interface Teacher {
	readonly firstName: string,
	readonly lastName: string,
	fullTimeEmployee: boolean,
	yearsOfExperience?: number, //optional attr
	location: string,
	// possibility of adding any attr to the object eg contract(boolean) without specifying name of the attr
	[key: string]: any,
}

export interface Directors extends Teacher {
	numberOfReports: number
}
interface printTeacherFunction {
	(firstName: string, lastName: string): string // this' the function/method signature
}
export const printTeacher: printTeacherFunction = (firstName, lastName) => {
	return `${firstName[0]}. ${lastName}`
}
// the class interface - describing the class
export interface StudentClass {
	firstName: string,
	lastName: string,
	workOnHomework(): string,
	displayName(): string
}
// the class constructor's interface - describing the constructor
export interface StudentClassConstructor {
	new (firstName: string, lastName: string): StudentClass;
}
export class StudentClass implements StudentClass {
	firstName: string
	lastName: string
	constructor(firstName: string, lastName: string){
		this.firstName = firstName
		this.lastName = lastName
	}

	// (instance) methods
	workOnHomework(): string {
		return 'Currently working'
	}
	displayName(): string {
		return this.firstName
	}
}