// The Visitor pattern allows you to add or define new functionality to an object without
// changing the code for that object.
// The new logic resides in a external object or function called the 'visitor'.
// Visitors are useful when you are trying to extend the functionality of a library or framework.

function Employee(name, salary) {
	this.name = name
	this.salary = salary
}

Employee.prototype = {
	getSalary: function () {
		return this.salary
	},
	setSalary: function (sal) {
		this.salary = sal
	},
	accept: function (visitorFunction) {
		visitorFunction(this)
	},
}

/////////////////////////////////////////////////
const devsage = new Employee('DevSage', 10000)
console.log(devsage.getSalary())

function ExtraSalary(emp) {
	emp.setSalary(emp.getSalary() * 2)
}

devsage.accept(ExtraSalary)
console.log(devsage.getSalary())
