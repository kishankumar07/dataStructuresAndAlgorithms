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
    insert(value){
        let node = new Node(value);
        if(this.isEmpty()){
            this.root = node;
        }else{
            this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
        if(root.value > node.value){
            if(root.left === null){
                root.left = node;
            }else{
                this.insertNode(root.left,node);
            }
        }else{
            if(root.right === null){
                root.right = node;
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
}
let bst = new binarySearchTree();
console.log('is the tree empty :',bst.isEmpty())//true
bst.insert(10)
bst.insert(5);
bst.insert(15)
console.log('is the node empty :',bst.isEmpty());//false