// Declaration
{
	const Developer = function (name) {
		this.name = name;
		this.type = 'Developer';
	};

	const Tester = function (name) {
		this.name = name;
		this.type = 'Tester';
	};

	var Factory = function () {
		this.employees = [];

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
			},
			getEmployees: () => this.employees,
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

console.log(myFactory.getEmployees());
