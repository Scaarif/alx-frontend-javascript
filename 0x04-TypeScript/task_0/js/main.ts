interface Student {
	firstName: string,
	lastName: string,
	age: number,
	location: string
}
const student1: Student = {
	firstName: 'Jane',
	lastName: 'Doe',
	age: 16,
	location: 'Nairobi'
};

const student2: Student = {
	firstName: 'John',
	lastName: 'Doe',
	age: 18,
	location: 'Naivasha'
}
const studentsList = [student1, student2]

// render a table, appending a row for each of the elements in the array
// console.log(studentsList)
const table = document.createElement('table')
// test adding style to table
table.setAttribute('style', 'border: 1px solid red') // same as table.style.border = '1px solid red';

studentsList.forEach((student: Student) => {
	// create a row in table
	const row = document.createElement('tr')
	// create cells in table row
	const firstNameTD = document.createElement('td')
	firstNameTD.style.border = '1px solid red'
	firstNameTD.innerText = student.firstName 

	const locationTD = document.createElement('td')
	locationTD.style.border = '1px solid red'
	locationTD.innerText = student.location

	// add the cells to row
	row.appendChild(firstNameTD)
	row.appendChild(locationTD)

	//append row to table
	table.appendChild(row)
})
// append table to body (the div app in index.html)
const app = document.getElementById('app')! // check that app is not null
app.appendChild(table)
