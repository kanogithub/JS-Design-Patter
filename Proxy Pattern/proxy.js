// A proxy object is an object that acts as an interface (or placeholder) for something else.
// The proxy could be an interface to anything: an API, a network connection,
// a large object in memory, or some other resource that is expensive or impossible to duplicate.

function CryptocurrencyAPI() {
	this.getValue = function (coin) {
		console.log('fetch data from server')

		switch (coin) {
			case 'Bitcoin':
				return '$3,500'
			case 'Litecoin':
				return '$50'
			case 'Ethereum':
				return '$175'
		}
	}
}

/////////////////////////////
// no proxy way
const api = new CryptocurrencyAPI()

// if we must access api to get value each time
// it will cost time and performance
// thurs we build a proxy for it

// with proxy way
function CryptocurrencyProxy() {
	this.api = new CryptocurrencyAPI()
	this.cache = []

	this.getValue = function (coin) {
		console.log('using Proxy')

		if (this.cache[coin] == null) {
			this.cache[coin] = this.api.getValue(coin)
		}

		return this.cache[coin]
	}
}

const apiProxy = new CryptocurrencyProxy()

console.log('Bitcoin now at: ', apiProxy.getValue('Bitcoin'))
console.log('Bitcoin now at: ', apiProxy.getValue('Bitcoin'))
console.log('Bitcoin now at: ', apiProxy.getValue('Bitcoin'))
console.log('Bitcoin now at: ', apiProxy.getValue('Bitcoin'))
