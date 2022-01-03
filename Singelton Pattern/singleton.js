/**
 * Sometimes we need to assign the same object to manage the entire process,
 * Or we want to limit creating instance, we use singleton design pattern
 * Whenever a function is called to get an object, it refers to the same object
 */

function Process(state) {
	this.state = state;
}

// IFFE for creating Singleton when start
// Similar to static function??
const Singleton = (function () {
	function ProcessManager() {
		this.numbProcess = 0;
	}

	let pManager;

	function createProcessManger() {
		pManager = new ProcessManager();
		return pManager;
	}

	return {
		getProcessManager: () => {
			if (pManager == null) return createProcessManger();
			return pManager;
		},
	};
})();

// Using singleton
const t1 = Singleton.getProcessManager();
const t2 = Singleton.getProcessManager();

console.log(t1 === t2);
