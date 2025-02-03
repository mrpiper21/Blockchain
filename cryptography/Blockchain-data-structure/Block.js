const SHA256 = require("crypto-js/sha256");

class Block {
	constructor(data, previousHash = "") {
		this.data = data;
		this.previousHash = previousHash;
	}
	toHash() {
		const blockData = {
			data: this.data,
			previousHash: this.previousHash,
		};
		return SHA256(JSON.stringify(blockData)).toString();
	}
}

module.exports = Block;
