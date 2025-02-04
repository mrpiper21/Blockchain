const SHA256 = require('crypto-js/sha256');

class Block {
	constructor(
		data,
		previousHash = "1150c39dfd24dab0edb0e3fd33fdbce9c42bb87bcf6feb14c580b6d4dd73be78"
	) {
		this.timestamp = Date.now();
		this.data = data;
		this.previousHash = previousHash;
		this.hash = this.toHash();
	}

	toHash() {
		return SHA256(
			this.timestamp + JSON.stringify(this.data) + this.previousHash
		).toString();
	}
}

module.exports = Block;
