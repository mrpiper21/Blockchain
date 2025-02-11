class Tree {
    constructor() {
        this.root = null;
    }
    addNode(newNode){
        if(!this.root){
            this.root = newNode;
        }
        this._addNodeRecursive(this.root, newNode)
    }
    _addNodeRecursive(currentNode, newNode) {
        if (newNode.data < currentNode.data) {
            if (!currentNode.left) {
                currentNode.left = newNode;
            } else {
                this._addNodeRecursive(currentNode.left, newNode);
            }
        }
        else if (newNode.data > currentNode.data) {
            if (!currentNode.right) {
                currentNode.right = newNode;
            } else {
                this._addNodeRecursive(currentNode.right, newNode);
            }
        }
    }
}

module.exports = Tree;