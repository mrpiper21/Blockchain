const Block = require("./Block");

// To link the blocks you have to accomplish two things:

// Add a previousHash property to each block. The value of this property should be the hash of the block before it in the chain.
// Use this previousHash property in the calculation of the block's hash.

class Blockchain {
	constructor() {
		const genesisBlock = new Block("Genesis block");
		this.chain = [genesisBlock];
	}
	addBlock(block) {
		// Get the hash of the last block to use as previousHash
		const previousHash = this.chain[this.chain.length - 1].toHash();

		// Create new block with data and previousHash
		const newBlock = new Block(block, previousHash);
		this.chain.push(newBlock);
	}
}

module.exports = Blockchain;
