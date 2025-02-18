// Ethereum nodes maintain four tries:

// A state trie which contains information about Ethereum accounts
// A storage trie which is where we can write persistent data from smart contracts
// A transactions trie which contains the transactions stored in a block
// A receipts trie which contains log/event information from contracts

const TrieNode = require("./TrieNode");

// A trie is a tree-like data structure, also referred to as
// a digital tree, radix tree or prefix tree, that is used to retrieve
// a string value by traversing down a branch of nodes that store associated
// references (keys) that together lead to the end value that can be returned

class Trie {
	constructor() {
		this.root = new TrieNode(null);
	}
	insert(word) {
		let node = this.root;

		for (let i = 0; i < word.length; i++) {
			if (!node.children[word[i]]) {
				node.children[word[i]] = new TrieNode(word[i]);
			}
			node = node.children[word[i]];

			if (i == word.length - 1) {
				node.isWord = true;
			}
		}
	}
	contains(word) {
		let node = this.root;

		for (let i = 0; i < word.length; i++) {
			if (node.children[word[i]]) {
				node = node.children[word[i]];
			} else {
				return false;
			}
		}

		return node.isWord;
	}
}

module.exports = Trie;
