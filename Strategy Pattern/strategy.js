/** The Strategy pattern is a behavioral design pattern that enables you to define 
 * 	a group (or family) of closely-related algorithms (known as strategies). 
 * 	The strategy pattern allows you to swap strategies in and out for each other as needed at runtime.
 * 	The example below, different company has the same method > calculate
 * 	Thurs when shipping object refer to other company, it can easier to get calculating
 */


class Fedex {
	constructor() {
		this.rate = 2.45
	}

	calculate(packages) {
		// fedex calculations....
		return Math.round(this.rate * packages.weigh * 100) / 100
	}
}
class UPS {
	constructor() {
		this.rate = 1.59
	}

	calculate(packages) {
		// ups calculations....
		return Math.round(this.rate * packages.weigh * 100) / 100
	}
}
class USPS {
	constructor() {
		this.rate = 5.24
	}

	calculate(packages) {
		// usps calculations....
		return Math.round(this.rate * packages.weigh * 100) / 100
	}
}

class Shipping {
	constructor() {
		this.company = {}
	}

	setStrategy = company=> {
		this.company = company
	}

	calculate(packages) {
		return this.company.calculate(packages)
	}
}

const fedex = new Fedex()
const ups = new UPS()
const usps = new USPS()

const package = { from: 'Launceston', to: 'Hobart', weigh: 1.45}
const shipping = new Shipping()

// usage
shipping.setStrategy(fedex)
console.log(`Fedex: ${shipping.calculate(package)}`)

shipping.setStrategy(ups)
console.log(`UPS: ${shipping.calculate(package)}`)

shipping.setStrategy(usps)
console.log(`USPS: ${shipping.calculate(package)}`)