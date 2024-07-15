class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    getDepth(node, value, depth = 0) {
        
        console.log('1st pivot node value-',node)
        console.log('depth is -',depth);
        console.log('value to check for depth is :',value)
        if (!node) return -1; // Node not found
        if (node.value === value) return depth;
        console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
        let leftDepth = this.getDepth(node.left, value, depth + 1);
        console.log('leftDepth is ============= ',leftDepth)
        console.log('-------------------------------------------------------------')
        if (leftDepth !== -1) return leftDepth;
        return this.getDepth(node.right, value, depth + 1);
    }
}

let tree = new BinaryTree();
// Assume nodes are inserted here
tree.root = new Node(1);tree.root.left = new Node(2);tree.root.right = new Node(3);tree.root.left.left = new Node(4);tree.root.left.right = new Node(5);tree.root.right.left = new Node(6);tree.root.right.right = new Node(7);
console.log(tree.getDepth(tree.root, 6));
        
