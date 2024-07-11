// Basic tree implementation
// node class
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class binarySearchTree {
    constructor(){
        this.root = null;
    }
    isEmpty(){
        return this.root === null;
    }
}
let bst = new binarySearchTree();
console.log(bst.isEmpty())

//So this snippet is only for creating a node class and binarySearchTree class.
// Insertion, deletion will be done as seperate js files.