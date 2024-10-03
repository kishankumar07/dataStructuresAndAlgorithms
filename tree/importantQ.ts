class TreeNode{
      value:number;
      left:TreeNode|null;
      right:TreeNode|null;
      constructor(value:number){
            this.value= value;
            this.left = null;
            this.right = null;
      }
}
class BinarySearchTree{
      root:TreeNode|null;
      constructor(){
            this.root = null;
      }
      insert(value:number):void{
            if(!value)return
            const node = new TreeNode(value)
            if(!this.root){
                  this.root = node
            }else{
                  this.insertNode(this.root,node)
            }
      }
      private insertNode(node:TreeNode,newNode:TreeNode){
            if(node.value>newNode.value){
                  if(!node.left){
                        node.left = newNode
                  }else{
                        this.insertNode(node.left,newNode)
                  }
            }else{
                  if(node.right === null){
                        node.right = newNode
                  }else{
                        this.insertNode(node.right,newNode)
                  }
            }
      }
      inOrder(){
            this.inOrderTraversal(this.root);
      }
      private inOrderTraversal(node:TreeNode|null){
            if(!node)return
            this.inOrderTraversal(node.left);
            console.log(node.value)
            this.inOrderTraversal(node.right);
      }
      heightOfTree(node:TreeNode|null = this.root):number{//This can be found in a more standardised way
            if(!node)return -1
            else{
                  const leftHeight = this.heightOfTree(node.left);
                  const rightHeight = this.heightOfTree(node.right);
                  return Math.max(leftHeight,rightHeight)+1
            }
      }
      isValidBST(node:TreeNode|null = this.root ,min:number|null = null,max:number|null = null):boolean{
            if(!node)return true;
            if((min !== null && node.value <= min)||(max !== null && node.value >= max)){
                  return false;
            }
            return this.isValidBST(node.left,min,node.value) && this.isValidBST(node.right,node.value,max)
      }
      convertSortedArrayToBST(arr:number[],start:number=0,end:number=arr.length-1):TreeNode|null{
            if(start>end)return null;
            const mid = Math.floor((start+end)/2)
            const node = new TreeNode(arr[mid]);
            node.left = this.convertSortedArrayToBST(arr,start,mid-1);
            node.right = this.convertSortedArrayToBST(arr,mid+1,end);
            return node;
      }
      createBSTfromArray(arr:number[]){
            return this.convertSortedArrayToBST(arr,0,arr.length-1)
      }


      //To find the degree of a node
      findNode(value:number,node:TreeNode|null=this.root):TreeNode|null{
            if(node===null || node.value === value){
                  return node;
            }
            if(node.value>value){
                  return this.findNode(value,node.left)
            }else{
                  return this.findNode(value,node.right);
            }
      }
      findDegree(node:TreeNode):number{
            let degree = 0;
            if(node.left!==null){
                  degree++
            }
            
            if(node.right!==null){
                  degree++
            }
            return degree
      }
}
const bst = new BinarySearchTree()
bst.insert(10);bst.insert(5);bst.insert(15);bst.insert(3);bst.insert(7);bst.insert(20)


//console.log("what is the height of the tree:")
// console.log(bst.heightOfTree())// Height of a tree

// console.log('is valid bst true / false:')
// console.log(bst.isValidBST()) // to check for valid Binary search tree
// console.log('below is to create bst from sorted array');
// bst.root = bst.createBSTfromArray([1,2,3,4,5,6,7])
// bst.inOrder()
console.log("To find the degree of a node, very simple")
const node = bst.findNode(5)
if(node!==null){
      const degree = bst.findDegree(node)
      console.log(`Degree of node with value ${node.value} is ${degree}`)
}else{
      console.log('Node not found')
}