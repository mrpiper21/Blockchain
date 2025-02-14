// proof - An array of objects whose properties are data and left. (The proof you created in the previous stage)
// node - A leaf node we're trying to prove is within the merkle tree.
// root - The valid Merkle Root.
// concat - The method used to combine the leaf nodes.

// Take the node and combine it with all the data provided in the proof.

// At this point you'll have your own root derived from the node and the proof. Compare this to the true root with === to see if they match.

function verifyProof(proof, node, root, concat) {
    let data = node;
    for (let i = 0; i < proof.length; i++) {
        if (proof[i].left) {
            data = concat(proof[i].data, data);
        }
        else {
            data = concat(data, proof[i].data);
        }
    }
    return data === root;
}

module.exports = verifyProof;

// Merkle Tree Vocabulary Summary
// Final terminology for Merkle trees:

// Merkle tree: a structure used in computer science to validate data
// Merkle root: the hash contained in the block header, which is derived from the hashes of all other transactions in the block
// Merkle path: represents the information which the user needs to calculate the expected value for the Merkle root for a block, from their own transaction hash contained in that block. The Merkle path is used as part of of the Merkle proof
// Merkle proof: proves the existence of a specific transaction in a specific block (without the user needing to examine all the transactions in the block). It includes the Merkle root and the Merkle path
