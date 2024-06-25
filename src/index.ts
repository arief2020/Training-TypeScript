// Question 1
// Create a variable to store a person's full name.
// Requirement: Use the string type.
console.log("question 1")
const fullName: string = "John Doe";
console.log(fullName)

// Question 2
// Declare an array containing several positive integers.
// Requirement: Use an array of numbers.
console.log()
console.log("question 2")
const arrayQuetion2: number[] = [1, 3, 5, 7, 9];
console.log(arrayQuetion2)

// Question 3
// Define an enum for the days of the week.
// Requirement: Use an enum to represent the days.
enum daysOfWeek {
	Monday,
	Tuesday,
	Wednesday,
	Thursday,
	Friday,
	Saturday,
	Sunday
}

// how to print output

// Question 4
// Specify the data type for a variable that stores a person's age.
// Requirement: Use the number type.
const age: number = 25;
console.log(age)

// Question 5
// Annotate the parameter and return types of a function that calculates the area of a rectangle.
// Requirement: Use the number type for both parameters and the return value.
function calculateArea(widht: number, height: number): number{
	return widht * height
}

console.log(calculateArea(2, 3))

// Question 6
// Write a function that takes a string and returns the string in uppercase.
// Requirement: Use the string type for both the parameter and the return value.
const stringUppercase = (sentence: string) : string => {
	return sentence.toUpperCase()
}

console.log(stringUppercase("hello"))

// Question 7
// Create an interface to represent the structure of a book (title, author, year published).
// Requirement: Use an interface to describe the book properties.
interface Book {
	title: string,
	author: string,
	year: number
}


// Question 8
// Define an interface for an object containing information about an employee (name, age, position).
// Requirement: Use an interface to describe the employee properties.
interface Employee{
	name: string,
	age: number,
	position: string
}

// Question 9
// Define an interface for an object containing information about a car (brand, production year, license plate number).
// Requirement: Use an interface to describe the car properties.
interface Car {
	brand: string,
	productionYear: number,
	licensePlateNumber: string
}

// Question 10
// Create a class to represent a student with properties name, age, and a list of enrolled courses.
// Requirement: Use a class to define the student.
class Student{
	name: string;
	age: number;
	courses: string[];
	
	constructor(name: string, age: number, courses: string[]){
		this.name = name
		this.age = age
		this.courses = courses
	}
}

// Question 11
// Implement a class to represent a product with properties name, price, and stock.
// Requirement: Use a class to define the product.
class Product {
	name: string;
	price: number;
	stock: number;
	
	constructor(name: string, price: number, stock: number){
		this.name = name
		this.price = price
		this.stock = stock
	}
}

// Question 12
// Create a class to handle information about an employee with properties name, salary, and department.
// Requirement: Use a class to define the employee.


// Question 13
// Write a generic function to return the maximum value from an array of numbers.
// Requirement: Use generics for the function.


// Question 14
// Implement a generic class to store a value and allow retrieval of that value with type safety.
// Requirement: Use generics for the class.


// Question 15
// Create a generic function to reverse the order of an array.
// Requirement: Use generics for the function.


// Question 16
// Define a union type for a variable that can store a string or a number.
// Requirement: Use a union type.


// Question 17
// Implement a function that takes two objects and merges their properties using an intersection type.
// Requirement: Use an intersection type.


// Question 18
// Create a union type that allows a variable to store a string, number, or boolean value.
// Requirement: Use a union type.


// Question 19
// Determine the data type of a variable that stores an array of numbers.
// Requirement: Use type inference to declare the variable.


// Question 20
// Annotate the data type of a variable resulting from a mathematical operation.
// Requirement: Use type inference to declare the variable.