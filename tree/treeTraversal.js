// Tree Traversal means visiting every nodes in the tree

// For arrays, linked list, for them traversal is only possible in one way only, while in hierarchial data structure like tree , can be traversed in different ways.

//Tree can be traversed in different ways :
//1) Depth First Search(DFS)
//2) Breadth First Search(BFS)

//In Depth First Search (DFS), visit the root node first and then visit all nodes in the left and right sub tree.

//  Three types of DFS traversals.
/* 
1) Preorder
2) Inorder
3) Postorder
*/

/* Preorder :
1) Read the value of Node
2) visit the left subtree
3) visit the right subtree
*/

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class binarySearchTree{
    constructor(){
        this.root = null
    }
    insert(value){
        let node = new Node(value);
        if(!this.root){
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
            return 'value not found';
        }else{
            if(root.value === value){
                return `value is found ${root.value}`
            }else if(root.value > value){
                return this.search(root.left,value);
            }else{
                return this.search(root.right,value);
            }
        }
    }
    preorder(root){
        if(!root){
            return 'no tree to traverse';
        }else{
            console.log(root.value);
            this.preorder(root.left);
            this.preorder(root.right);
        }
    }
    inorder(root){
        if(!root){
            return 'no tree to travers';
        }else{
            this.inorder(root.left);
            console.log(root.value);
            this.inorder(root.right)
        }
    }
    postOrder(root){
        if(!root){
            return 'no tree to traverse'
        }else{
            this.postOrder(root.left)
            this.postOrder(root.right);
            console.log(root.value);
        }
    }
    levelOrder(){
        let queue = [];
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift();
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right);
            }
        }
    }
}
let bst = new binarySearchTree();
bst.insert(10);bst.insert(5);bst.insert(15);bst.insert(3);bst.insert(7);
console.log(bst.search(bst.root,10));
console.log(bst.search(bst.root,5))
console.log(bst.search(bst.root,14));
console.log('preorder traversal --------------')
bst.preorder(bst.root);
console.log('inorder traversal --------------')
bst.inorder(bst.root);
console.log('postorder traversal --------------')
bst.postOrder(bst.root);
console.log('levelOrder----------------')
bst.levelOrder()