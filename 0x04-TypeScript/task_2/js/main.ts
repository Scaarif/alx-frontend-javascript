
interface DirectorInterface {
	workFromHome(): string,
	getCoffeeBreak(): string,
	workDirectorTasks(): string
}

interface TeacherInterface {
	workFromHome(): string,
	getCoffeeBreak(): string,
	workTeacherTasks(): string
}

class Director implements DirectorInterface {
	// [Symbol.toStringTag] = 'Director'
	workFromHome(): string {
		return 'Cannot work from home'
	}
	getCoffeeBreak(): string {
		return 'Cannot have a break'
	}
	workDirectorTasks(): string {
		return 'Getting to work'
	}
}

class Teacher implements TeacherInterface {
	// [Symbol.toStringTag] = 'Teacher'
	workFromHome(): string {
		return 'Working from home'
	}
	getCoffeeBreak(): string {
		return 'Getting a coffee break'
	}
	workTeacherTasks(): string {
		return 'Getting to teacher tasks'
	}
}

export function createEmployee(salary: string | number): Director | Teacher {
	if (typeof salary === 'number' && salary < 500)
		return new Teacher()
	return new Director() // otherwise
}

function isDirector(employee: Director | Teacher): employee is Director {
	return employee instanceof Director;
}

// function isDirector(employee: Director | Teacher): boolean {
// 	return employee instanceof Director
// }

export function executeWork(employee: Director | Teacher): string {
	// console.log('employee: ', employee, 'and isDir -> ', isDirector(employee))
	if (isDirector(employee)) {
	  return employee.workDirectorTasks();
	} else {
		return employee.workTeacherTasks();
	}
  }

  // String Literals
  type Subjects = "Math" | "History"
  export function teachClass(todayClass: Subjects): string {
	if (todayClass === "Math")
		return "Teaching Math"
	else
		return "Teaching History"
  }