const SHA256 = require("crypto-js/sha256");
const TARGET_DIFFICULTY =
	BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
	mempool.push(transaction);
}

function mine() {
	// Create a new block with id and transactions array
	const newBlock = {
		id: blocks.length,
		transactions: [],
	};

	// Pull up to MAX_TRANSACTIONS from mempool
	while (const SHA256 = require('crypto-js/sha256');
    const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
    const MAX_TRANSACTIONS = 10;
    
    const mempool = [];
    const blocks = [];
    
    function addTransaction(transaction) {
        mempool.push(transaction);
    }
    
    function mine() {
        // Create a new block with id, transactions array, and initial nonce
        const newBlock = {
            id: blocks.length,
            transactions: [],
            nonce: 0
        };
    
        // Pull up to MAX_TRANSACTIONS from mempool
        while (newBlock.transactions.length < MAX_TRANSACTIONS && mempool.length > 0) {
            const transaction = mempool.shift();
            newBlock.transactions.push(transaction);
        }
    
        // Mine block by finding valid nonce
        let hashHex;
        let hashInt;
    
        do {
            // Create hash with current nonce
            const str = JSON.stringify(newBlock);
            const hash = SHA256(str);
            hashHex = hash.toString();
            hashInt = BigInt(`0x${hashHex}`);
    
            // If hash isn't less than target difficulty, increment nonce and try again
            if (hashInt >= TARGET_DIFFICULTY) {
                newBlock.nonce++;
            }
        } while (hashInt >= TARGET_DIFFICULTY);
    
        // Found valid hash, add it to block
        newBlock.hash = hashHex;
    
        // Add block to blockchain
        blocks.push(newBlock);
    }
    
    module.exports = {
        TARGET_DIFFICULTY,
        MAX_TRANSACTIONS,
        addTransaction,
        mine,
        blocks,
        mempool
    };
		newBlock.transactions.length < MAX_TRANSACTIONS &&
		mempool.length > 0
	) {
		// Remove transaction from beginning of mempool and add to block
		const transaction = mempool.shift();
		newBlock.transactions.push(transaction);
	}

	// Hash the block after transactions are added
	const str = JSON.stringify(newBlock);
	const hash = SHA256(str);
	newBlock.hash = hash;

	// Add block to blockchain
	blocks.push(newBlock);
}

module.exports = {
	TARGET_DIFFICULTY,
	MAX_TRANSACTIONS,
	addTransaction,
	mine,
	blocks,
	mempool,
};
