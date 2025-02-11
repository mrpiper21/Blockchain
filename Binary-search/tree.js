class Tree {
	constructor() {
		this.root = null;
	}
	addNode(newNode) {
		if (!this.root) {
			this.root = newNode;
		}
		this._addNodeRecursive(this.root, newNode);
	}
	_addNodeRecursive(currentNode, newNode) {
		if (newNode.data < currentNode.data) {
			if (!currentNode.left) {
				currentNode.left = newNode;
			} else {
				this._addNodeRecursive(currentNode.left, newNode);
			}
		} else if (newNode.data > currentNode.data) {
			if (!currentNode.right) {
				currentNode.right = newNode;
			} else {
				this._addNodeRecursive(currentNode.right, newNode);
			}
		}
	}
	hasNode(data) {
		return this.searchRoot(this.root, data);
	}
	searchRoot(root, data) {
		if (!root) {
			return false;
		}
		if (root.data === data) {
			return true;
		}
		if (root.data > data) {
			return this.searchRoot(root.left, data);
		}
		if (root.data < data) {
			return this.searchRoot(root.right, data);
		}
	}
}

module.exports = Tree;