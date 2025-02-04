const Block = require("./Block");

class Blockchain {
	constructor() {
		const genesisBlock = new Block("Genesis block");
		this.chain = [genesisBlock];
	}

	getLatestBlock() {
		return this.chain[this.chain.length - 1];
	}

	addBlock(data) {
		// Get the hash of the previous block
		const previousHash = this.getLatestBlock().hash;

		// Create a new block with the previous block's hash
		const newBlock = new Block(data, previousHash);

		// Add the new block to the chain
		this.chain.push(newBlock);
	}
}

module.exports = Blockchain;
