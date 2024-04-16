// complete this js code
class Person {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	greet(){
		console.log(`Hello, my name is ${this.name}, I am ${this.Age} years old.`)
	}
}

class Employee {
	constructor (name, age, jobTitle){
		super(name,age);
		this.jobTitle = jobTitle;
	}
	jobGreet(){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}`)
	}
}
// Create an instance of Person
const person = new Person("Alice", 25);
person.greet(); // Output: Hello, my name is Alice, I am 25 years old.

// Create an instance of Employee
const employee = new Employee("Bob", 30, "Manager");
employee.jobGreet(); // Output: Hello, my name is Bob, I am 30 years old, and my job title is Manager.

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
