const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(data, previousHash = ""){
        this.timestamp = Date.now();
        this.data = data;
        this.previousHash = previousHash;
        this.hash = SHA256(
            this.timestamp +
            JSON.stringify(this.data) +
            this.previousHash)
    }
    toHash() {
        const blockData = {
            data: this.data,
            previousHash: this.previousHash
        }
        return SHA256(JSON.stringify(blockData));
    }
}

module.exports = Block;
