class TreeNode{
      value:number;
      left:TreeNode| null;
      right : TreeNode | null;
      constructor(value:number){
            this.value = value;
            this.left = null;
            this.right = null;
      }
}
class BinarySearchTree{
      root:TreeNode | null;
      constructor(){
            this.root = null;
      }
      insert(value:number):void{
            if(!value)return
            const node =  new TreeNode(value)
            if(!this.root){
                  this.root = node;
            }else{
                  this.insertNode(this.root,node)
            }
      }
      private insertNode(node:TreeNode,newNode:TreeNode){
          if(node.value>newNode.value){
            if(node.left === null){
                  node.left = newNode
            }else{
                  this.insertNode(node.left,newNode)
            }
          }else{
            if(!node.right){
                  node.right = newNode;
            }else{
                  this.insertNode(node.right,newNode)
            }
          }
      }
      search(value:number):TreeNode | null{
            if(!value)return null
            if(!this.root)return null;
            return this.searchNode(this.root,value)
      }
      private searchNode(node:TreeNode|null,value:number):TreeNode | null{
            if(!node)return null;
            else if(node.value>value){
                  return this.searchNode(node.left,value)
            }
            else if(node.value <value){
                  return this.searchNode(node.right,value)
            }
            else{
                  return node;
            }
      }
      inOrder():void{
            if(!this.root)return;
            this.inOrderTraversal(this.root)
      }
      private inOrderTraversal(node:TreeNode|null):void{
            if(node){
                  this.inOrderTraversal(node.left)
                  console.log(node.value);
                  this.inOrderTraversal(node.right);
            }
      }
      preOrder():void{
            if(!this.root)return
            this.PreOrderTraversal(this.root)
      }
      private PreOrderTraversal(node:TreeNode|null):void{
            if(node){
                  console.log(node.value);
                  this.PreOrderTraversal(node.left);
                  this.PreOrderTraversal(node.right);
            }
      }
      postOrder():void{
            if(!this.root)return;
            this.postOrderTraversal(this.root);
      }
      private postOrderTraversal(node:TreeNode| null):void{
            if(node){
                  this.PreOrderTraversal(node.left);
                  this.PreOrderTraversal(node.right);
                  console.log(node.value);
            }
      }
      delete(value:number){
          this.root =  this.deleteNode(this.root,value)
      }
      private deleteNode(node:TreeNode | null,value:number):TreeNode | null{
            if(!node)return null;
            if(node.value > value){
                  node.left = this.deleteNode(node.left,value)
            }else if(node.value < value){
                  node.right = this.deleteNode(node.right,value)
            }else{
                  //Node to delete was found

                  //case1: (Leaf node)
                  if(!node.left && !node.right){
                        return null;
                  }

                  //case2:One child, (replace the node with child)
                  if(!node.left)return node.right
                  else if(!node.right)return node.left;

                  //Case3 : Two children(find in-order successor)
                  const minRight = this.findMinNode(node.right);
                  node.value = minRight!.value;
                  node.right = this.deleteNode(node.right,minRight!.value)

            }
            return node;

      }
      minNode():TreeNode|null{
            return this.findMinNode(this.root)
      }
      findMinNode(node:TreeNode | null):TreeNode | null{
            while(node && node.left){
                  node = node.left;
            }
            return node;
      }
      findMax():TreeNode | null{
            let node = this.root;
            while(node && node.right){
                  node=node.right;
            }
            return node;
      }
}
const bst = new BinarySearchTree()
bst.insert(10);bst.insert(15);bst.insert(5);bst.insert(3);bst.insert(6);
// bst.inOrder();
bst.preOrder()