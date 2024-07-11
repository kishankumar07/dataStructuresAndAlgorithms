- Binary tree has atmost 2 children. -- > left and right child

Binary Search tree : 
- For a parent there will be 2 children left and right. Here left node will be < parent node and right node will have value > parent
(left < parent < right)

Operations of a binary search tree : 
1) Insertion (adding a node to the tree)
2) Search (find a node by a value)
3) DFS & BFS (To visit all nodes in the tree)
4) Deletion - Delete a node by a value;

Binary search tree usage : Searching ,sorting ,lookup tables and priority queues.

when you create a class node for binary tree, then the visualization : value , left and right.
(this.value,this.left = null,this.right = null) ---> when you read this statement to save time, refer the code of binarySearchTree.js file in other window

Binary search tree insertion :
- If the node going to add to binary search tree is the first one, then this.root = null;
- else make sure the property of binary search tree is not violated.
= what are these properties ? [ each node atmost 2 childs, left < parent < right]