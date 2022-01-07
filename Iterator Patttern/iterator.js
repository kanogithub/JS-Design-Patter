/**	The Iterator pattern is a pattern that allows you to effectively loop over a collection of objects.
 * 	Iterator Pattern allows us to design our own iterators
 *  mainly have hasNext & next method, one for checking does it more data
 * 	other one for getting next data.
 * 	With Iterator Pattern, we can have our own rules to set and get Iterator Data
 */

class Iterator {
	constructor(items) {
		this.items = items
		this.index = 0
	}

	hasNext() {
		return this.index < this.items.length
	}

	next() {
		return this.items[this.index++]
	}
}

const itemList = [1, 'test', {name: 'John', age: 18}, 1.23, false]

// usage
const iterator = new Iterator(itemList)

while(iterator.hasNext()) {
	console.log(iterator.next())
}