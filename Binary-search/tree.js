class Tree {
	constructor() {
		this.root = null;
	}
	addNode(newNode) {
		if (!this.root) {
			this.root = newNode;
		}
		if (newNode.data > this.root.data) {
			this.root.right = newNode;
		}
		if (newNode.data < this.root.data) {
			this.root.left = newNode;
		}
	}
}

module.exports = Tree;
