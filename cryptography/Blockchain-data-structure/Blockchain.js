const Block = require("./Block");

// To link the blocks you have to accomplish two things:

// Add a previousHash property to each block. The value of this property should be the hash of the block before it in the chain.
// Use this previousHash property in the calculation of the block's hash.

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

