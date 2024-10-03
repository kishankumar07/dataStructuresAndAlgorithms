= Hierarchial data structure where nodes connected by edges.

= It is a non-linear data structure , but array, linked list, stack ,queue are linear data structures. 

= Linear data structures has time required is proportional to the size of the data set. So for more input data the time complexity will be proportional , but not in the case of tree.

- Because of non-linear nature of tree, it is more quicker and easier to access data.

- Punch point  - ***tree will have no loops or cycles.***

Visualize - many balls connected by lines 


Use cases : File systems (Hierarchial data structure), database( for quick data retrieval),DOM, etc.

Terminologies : Before that have an imaginary picture of the tree. once imagined now start going through the terminologies;
1) Root Node : first node in a tree.
2) Edge : Link that connects one node to another is called Edge.
3) Parent Node (or Internal node) : Has links to child nodes.
4) Node can have one , two or many child nodes. But one node can have only one parent node.
5) Leaf nodes : Have no links to another childs , or say it does not has any childs
6) Height of tree : No.of edges ( root node to leaf node )
7) tree size : no. of nodes in the tree.
8) Sibblings : nodes with same parent.
9) Degree of a node : number of child nodes it has.
10) Degree of a tree : Max degree in the tree.
11) Depth of a node : No of edges from root to that node.
12) Height of a node : No of edges from deepest leaf to that node.

Why tree is a non-linear data structure ?
A) Because data in a tree is not arranged sequentially like linear data structures. They are arranged on multiple levels.


what is backtracking ? 
A) algorithms that uses recursion to try out possible solutions and then undoing them if not leading to a solution.

whether BFS use backtracking ? 
A) NO BFS does not use backtracking like DFS. 

backtracking is useful in sudoku, when after filling it comes to a state where it cant be solved then reverts back.


In search method , there is return , so why no return in preOrder , inOrder, and postOrder . because in all the above, the array is modified directly, in every recursive calls its state is being preserved, just because they are all working on the same array they don't need to return their individual results to each other. or to say no need to pass the array back up each recursive call since it is the same array being modified.
** arrays are passed as reference so in the deeper recursive call what changes even made is effectable in the  main function of the call stack.


What are the complexities of BFS and DFS in a BST?
- For both BFS and DFS , time complexities are O(n) because each node is visited once. 
-For DFS space complexity is : O(h),h is the height of the tree and for BFS, the space complexity is O(w), w is the width of the tree, what if it is a complete binary tree.




