// AI Generated 

class TreeNode {
      value: number;
      left: TreeNode | null;
      right: TreeNode | null;
  
      constructor(value: number) {
          this.value = value;
          this.left = null;
          this.right = null;
      }
  }
  
  class BinarySearchTree {
      root: TreeNode | null;
  
      constructor() {
          this.root = null;
      }
  
      // Insert a new node into the BST
      insert(value: number): void {
          const newNode = new TreeNode(value);
  
          if (this.root === null) {
              this.root = newNode;
          } else {
              this.insertNode(this.root, newNode);
          }
      }
  
      private insertNode(node: TreeNode, newNode: TreeNode): void {
          if (newNode.value < node.value) {
              if (node.left === null) {
                  node.left = newNode;
              } else {
                  this.insertNode(node.left, newNode);
              }
          } else {
              if (node.right === null) {
                  node.right = newNode;
              } else {
                  this.insertNode(node.right, newNode);
              }
          }
      }
  
      // Search for a value in the BST
      search(value: number): boolean {
          return this.searchNode(this.root, value);
      }
  
      private searchNode(node: TreeNode | null, value: number): boolean {
          if (node === null) {
              return false;
          }
  
          if (value < node.value) {
              return this.searchNode(node.left, value);
          } else if (value > node.value) {
              return this.searchNode(node.right, value);
          } else {
              return true; // Value found
          }
      }
  
      // In-order traversal: Left -> Root -> Right
      inOrderTraversal(node: TreeNode | null = this.root): void {
          if (node !== null) {
              this.inOrderTraversal(node.left);
              console.log(node.value);
              this.inOrderTraversal(node.right);
          }
      }
  
      // Pre-order traversal: Root -> Left -> Right
      preOrderTraversal(node: TreeNode | null = this.root): void {
          if (node !== null) {
              console.log(node.value);
              this.preOrderTraversal(node.left);
              this.preOrderTraversal(node.right);
          }
      }
  
      // Post-order traversal: Left -> Right -> Root
      postOrderTraversal(node: TreeNode | null = this.root): void {
          if (node !== null) {
              this.postOrderTraversal(node.left);
              this.postOrderTraversal(node.right);
              console.log(node.value);
          }
      }
  
      // Find the minimum value in the BST
      findMin(): number | null {
          let current = this.root;
  
          while (current && current.left !== null) {
              current = current.left;
          }
  
          return current ? current.value : null;
      }
  
      // Find the maximum value in the BST
      findMax(): number | null {
          let current = this.root;
  
          while (current && current.right !== null) {
              current = current.right;
          }
  
          return current ? current.value : null;
      }
  }
  
  // Example usage
  const bst = new BinarySearchTree();
  bst.insert(10);
  bst.insert(20);
  bst.insert(5);
  bst.insert(6);
  bst.insert(15);
  
  console.log("In-order Traversal:");
  bst.inOrderTraversal();  // Output: 5 6 10 15 20
  
  console.log("Pre-order Traversal:");
  bst.preOrderTraversal();  // Output: 10 5 6 20 15
  
  console.log("Post-order Traversal:");
  bst.postOrderTraversal();  // Output: 6 5 15 20 10
  
  console.log("Min value:", bst.findMin());  // Output: 5
  console.log("Max value:", bst.findMax());  // Output: 20
  
  console.log("Search for 15:", bst.search(15));  // Output: true
  console.log("Search for 99:", bst.search(99));  // Output: false
  