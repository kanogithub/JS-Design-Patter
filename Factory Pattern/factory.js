/**
 * A type of Creational Pattern
 * In order for increasing object/programe maintainability and reusability
 * Simulate OOP pattern as module and instance, in ES6 can also be declarated
 * by using class.
 * Factory Pattern Centralize the position of creations. Make structure clear.
 */

// Declaration
{
	var Factory = function () {
		this.employees = [];

		const Developer = function (name) {
			this.name = name;
			this.type = 'Developer';
		};

		const Tester = function (name) {
			this.name = name;
			this.type = 'Tester';
		};

		return {
			create: (name, type) => {
				switch (type) {
					case 1:
						this.employees.push(new Developer(name));
                        break;
					case 2:
						this.employees.push(new Tester(name));
                        break;
					default:
						return console.log('Employee type error');
				}

                Object.assign(this.employees[this.employees.length - 1], {
					say: function() {
						console.log(`Hi, I am ${this.name} and I am a ${this.type}.`)
					}
				})
			},
			getEmployees: () => this.employees,
			say: emp => `Hi, I am ${emp.name} and I am a ${emp.type}.`
		};
	};
}

// Creation and Method Using
const myFactory = new Factory();

myFactory.create('John', 1);
myFactory.create('Mary', 1);
myFactory.create('Stefanie', 2);
myFactory.create('Peter', 1);
myFactory.create('Jason', 2);
myFactory.create('Willy', 2);
myFactory.create('Jesse', 1);

const employees = myFactory.getEmployees()
console.log(employees)
employees[2].say()