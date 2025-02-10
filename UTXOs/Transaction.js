class Transaction {
	constructor(inputUTXOs, outputUTXOs) {
		this.inputUTXOs = inputUTXOs;
		this.outputUTXOs = outputUTXOs;
	}
	execute() {
		const anySpent = this.inputUTXOs.some((x) => x.spent);
		const inputAmount = this.inputUTXOs.reduce((total, curr) => {
			return total + curr.amount;
		}, 0);

		const outputAmount = this.outputUTXOs.reduce((total, curr) => {
			return total + curr.amount;
		}, 0);

		if (inputAmount < outputAmount) {
			throw new Error("Insufficient funds");
		}

		if (anySpent) {
			throw new Error("Cannot include a spent UTXO");
		}

		this.inputUTXOs.forEach((input) => {
			input.spent = true;
		});

		const computeFee = inputAmount - outputAmount;
		this.fee = computeFee;
	}
}

module.exports = Transaction;
