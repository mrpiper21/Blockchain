// Merkle Trees Use Cases
// Merkle trees are:

// space and computationally efficient
// good for scalability and decentralization
// no need to pack a block full of transactions… just commit a Merkle root hash to it and keep transactions in other places that can handle them
// In deeper terms, they:

// They significantly reduce the memory needed to verify that data has maintained its integrity and hasn’t been altered.
// They require less data to be broadcast across the blockchain network to verify data and transactions. This improves the efficiency of a blockchain.
// They allow for Simple Payment Verification (SPV), which helps you to verify a transaction without downloading an entire block or blockchain. This allows you to send and receive transactions using a light-client node — more commonly known as a crypto wallet.
// When verifying data using a Merkle tree, there is a Prover and a Verifier:

// A Prover: Does all the calculation to create the merkle root (just a hash!)
// A Verifier: Does not need to know all the values to know for certain one value is in the tree
// Merkle trees are a huge benefit to the Verifier. You either produce a proof successfully, meaning data verification passes, or you don't, meaning your piece of data was not present when the Merkle root hash was calculated (or you performed the calculation wrong!).

class MerkleTree {
    constructor(leaves, concat) {
        this.leaves = leaves;
        this.concat = concat;
    }
    getRoot(leaves = this.leaves) {
        if (leaves.length === 1) {
            return leaves[0];
        }
        const layer = [];
        for (let i = 0; i < leaves.length; i += 2) {
            const left = leaves[i];
            const right = leaves[i + 1];
            if (right) {
                layer.push(this.concat(left, right));
            }
            else {
                layer.push(left);
            }
        }
        return this.getRoot(layer);
    }
    getProof(index, layer = this.leaves, proof = []) {
        if (layer.length === 1) return proof;
        const newLayer = [];
        for (let i = 0; i < layer.length; i += 2) {
            let left = layer[i];
            let right = layer[i + 1];
            if (!right) {
                newLayer.push(left);
            }
            else {
                newLayer.push(this.concat(left, right));

                if (i === index || i === index - 1) {
                    let isLeft = !(index % 2);
                    proof.push({
                        data: isLeft ? right : left,
                        left: !isLeft
                    });
                }
            }
        }
        return this.getProof(Math.floor(index / 2), newLayer, proof);
    }
}

module.exports = MerkleTree;
