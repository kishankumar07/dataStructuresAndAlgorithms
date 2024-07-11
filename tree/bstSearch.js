class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class binarySearchTree{
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
            this.insertNode(this.root,node);
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
                this.insertNode(root.right,node);
            }
       }
    }
    search(root,value){
        if(!root){
            return false;
        }else{
            if(root.value === value){
                return true;
            }else if(root.value > value){
                return this.search(root.left,value);
            }else {
                return this.search(root.right,value);
            }
        }
    }
}
let bst = new binarySearchTree();
console.log('tell me whether the node is empty now :',bst.isEmpty())
bst.insert(10);bst.insert(20);
console.log('tell me after insetion whether the node is empty :',bst.isEmpty());
console.log(bst.search(bst.root,10))