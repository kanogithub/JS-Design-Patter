// retry immediately,
// retry after delay

;(function () {
	const URL = 'https://api.github.com/'

	const externalServiceCall = async () => {
		console.log('Fetch Data...')
		const isSuccess = Math.random() < 0.2
		if (isSuccess) return await fetch(URL)
		throw 'Failure'
	}

	const sleep = async (delay) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve()
			}, delay)
		})
	}

	const retryOperation = async () => {
		let currentTry = 0

		// break when acheive date or on limited times
		while (true) {
			try {
				const data = await externalServiceCall()
				if (data) {
					console.log(`Succeeded at attempt ${currentTry + 1}`)
					console.log(data)
					break
				}
			} catch (err) {
				currentTry++
				console.log(`Failed attempt ${currentTry}`)

				if (currentTry === 10) {
					console.log('Retry maximum reached Exiting')
					break
				}
			}

			await sleep(2000)
		}
	}

	retryOperation()
})()
