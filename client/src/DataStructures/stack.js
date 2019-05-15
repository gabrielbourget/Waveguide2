class Stack {
	constructor() {
		this.count = 0;
		this.storage = {};
	};

	push = (value) => {
		this.storage[this.count] = value;
		this.count++;
	};

	pop = () => {
		if (this.count === 0) return undefined;

		const poppedItem = this.storage[count];
		delete this.storage[count];
		this.count--;
		return poppedItem;
	};

	size = () => this.count;

}

export default Stack;
