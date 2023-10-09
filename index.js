// Constructor Function
function PersonConstructor(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;

  // Member function (non-arrow)
  this.getFullName = function () {
    return this.firstName + " " + this.lastName;
  };
}

// Creating an instance of Person using the constructor function
const person1 = new PersonConstructor("Ajinkya", "Jadhav", 19);

// Printing details
console.log("Using Constructor Function:");
console.log("Full Name:", person1.getFullName());
console.log("Age:", person1.age);

// Object.create()
const personPrototype = {
  getFullName() {
    return this.firstName + " " + this.lastName;
  },
};

const person3 = Object.create(personPrototype);
person3.firstName = "Ajinkya";
person3.lastName = "Jadhav";
person3.age = 19;

// Printing details
console.log("\nUsing Object.create():");
console.log("Full Name:", person3.getFullName());
console.log("Age:", person3.age);

// ES6 Class
class PersonES6 {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // Member function (non-arrow)
  getFullName() {
    return this.firstName + " " + this.lastName;
  }

  // Arrow function as a non-member function
  greet = () => {
    return `Hello, my name is ${this.getFullName()} and I am ${this.age} years old.`;
  };
}

// Creating an instance of Person using ES6 class
const person2 = new PersonES6("Ajinkya", "Jadhav", 19);

// Printing details
console.log("\nUsing ES6 Class:");
console.log("Full Name:", person2.getFullName());
console.log("Age:", person2.age);



class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Member function (non-arrow)
  getFullName() {
    return this.firstName + " " + this.lastName;
  }

  // Arrow function as a non-member function
  greet () {
    return `Hello, my name is ${this.getFullName()}.`;
  };
}

// Derived class: Student (inherits from Person)
class Student extends Person {
  constructor(firstName, lastName, rollNumber) {
    super(firstName, lastName);
    this.rollNumber = rollNumber;
  }

  // Override the greet method from the parent class
  greet() {
    return `Hello, my name is ${this.getFullName()}, and my roll number is ${this.rollNumber}.`;
  }

  // Method to validate roll number
  validateRollNumber() {
    if (this.rollNumber <= 0) {
      throw new Error("Roll number must be a positive integer.");
    }
  }
}

// Create an instance of Student
const student = new Student("Ajinkya", "Jadhav", 21);

try {
  student.validateRollNumber(); // Validate the roll number
  console.log("Demonstration of Inheritance")
  console.log(student.greet()); // Print student details
} catch (error) {
  console.error("Error:", error.message); // Handle exceptions
}