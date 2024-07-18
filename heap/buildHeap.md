What is a heap ?
- A special kind of binary tree

Max- heap : The largest element is always at the top
Min - heap : The smallest element is always at the top

This is for max-heap

So heap is a binary tree, thus it will have only two childs , left and right;

for max - heap the parent node is larger then its children

What is a non-leaf Node ?
= A node with atleast one child, so leaf node is that has no children

In max-heap only non- leaf nodes need to be checked and leaf nodes need not be checked because they has no children

What is the use of Math.floor(n/2)-1 ?
= Here n is the number of the elements in the array, the first non-leaf node is at Math.floor(n/2)-1

But we are checking from the last non-leaf node and then moving upward, to ensure the entire tree follows max- heap property

What is Heapify ?
=- Adjusting the nodes to maintain the heap property

The function starts with the last non-leaf element


Why Use Math.floor(n / 2) - 1?

Structure of a Binary Tree in an Array

In a binary tree represented as an array:

The root node is at index 0.

For a node at index i:

The left child is at index 2 * i + 1.

The right child is at index 2 * i + 2.

Identifying Leaf and Non-Leaf Nodes

Leaf Nodes: Nodes without children. In a binary tree represented as an array, leaf nodes start from index Math.floor(n / 2) to n-1.

Non-Leaf Nodes: Nodes with at least one child. Non-leaf nodes are from index 0 to Math.floor(n / 2) - 1.

Understanding the Formula

Finding the Last Node: The last node in the array is at index n - 1, where n is the length of the array.

Finding the Parent of the Last Node:

The parent of the last node is calculated using the formula (n - 1 - 1) / 2, which simplifies to (n - 2) / 2.

Using integer division (or flooring the result), this is equivalent to Math.floor((n - 2) / 2).

However, the simpler and more widely used formula to find the first non-leaf node is Math.floor(n / 2) - 1.

Why This Formula Works
Let's break down the logic with a few examples to understand why the formula works.

Example 1: Array Length 5
Array: [4, 10, 3, 5, 1]

Number of elements n = 5
Last non-leaf node index: Math.floor(5 / 2) - 1 = 1
This is correct because:

The node at index 1 (value 10) has children at indices 3 (value 5) and 4 (value 1).
The node at index 0 (value 4) has children at indices 1 (value 10) and 2 (value 3).
So, we start heapifying from index 1 upwards.

Example 2: Array Length 6
Array: [4, 10, 3, 5, 1, 6]

Number of elements n = 6
Last non-leaf node index: Math.floor(6 / 2) - 1 = 2
This is correct because:

The node at index 2 (value 3) has a child at index 5 (value 6).
The nodes at indices 0 (value 4) and 1 (value 10) have children as well.
So, we start heapifying from index 2 upwards.

General Proof
Leaf Nodes Start at Math.floor(n / 2):

For any node i, the left child is 2 * i + 1.
The smallest i where 2 * i + 1 >= n gives the first index of leaf nodes.
Solving 2 * i + 1 >= n, we get i >= (n - 1) / 2, which simplifies to i >= Math.floor((n - 1) / 2), and since array indices are integers, it further simplifies to i >= Math.floor(n / 2).
Non-Leaf Nodes End at Math.floor(n / 2) - 1:

The last index before the leaf nodes start is Math.floor(n / 2) - 1.
Recap
The formula Math.floor(n / 2) - 1 helps us efficiently identify where the non-leaf nodes end.
This approach ensures we only heapify nodes that need to be checked and adjusted, making the heap-building process efficient.
If you're given an array to build a heap, the formula helps you start from the correct index to maintain the heap property. Understanding this formula provides a clear path to heapify from the bottom-up, ensuring the entire structure follows the max-heap property.


After week repeat:

Heapify up and Heapify down are the two different methods used to maintain heap property in a heap data structure.

When is Heapify up method used :  When a new element is added to heap, so it will swap with parent if heap property violated and continues until heap property is restored.

heapify down is used when the root element is removed from the heap and during removal the last element in the heap is placed at root and then moved to its postition.