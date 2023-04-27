import {createEmployee, executeWork, teachClass} from "./main";

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

console.log(teachClass('Math'))
console.log(teachClass('History'))