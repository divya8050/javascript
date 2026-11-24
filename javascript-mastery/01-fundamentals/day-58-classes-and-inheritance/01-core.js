class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  celebrateBirthday() {
    this.age++;
    console.log(`${this.name} is now ${this.age}.`);
  }
}

class Employee extends Person {
  constructor(name, age, employeeId, department) {
    super(name, age); // Call parent class constructor
    this.employeeId = employeeId;
    this.department = department;
  }

  // Override parent method
  greet() {
    return `${super.greet()} I work in the ${this.department} department.`;
  }

  getEmployeeDetails() {
    return `Employee ID: ${this.employeeId}, Department: ${this.department}.`;
  }

  // Add a new method specific to Employee
  promote(newDepartment) {
    console.log(`${this.name} is being promoted to ${newDepartment}.`);
    this.department = newDepartment;
  }
}

module.exports = { Person, Employee };