It is also a divide and conquer algorithm. The array as input is always split into two halves, so can guess the time complexity

since the array is divided into each halves, the time complexity at best, average and worst case is log n  and in each O(n) traversing is happening. 

Time complexity 
Best O(n logn)
Average O(n logn)
Worst O(n logn)

space complexity - O(n) because additional spaces are occupied as temp , left, right

Method : mid index is found using the Math.floor and based on that the left and right partitioning is done. then recursively calls the mergeSort function till there is only one element in each array. 

if array is [3,4,8,5,9,1,2]
first the mid index partitions left as [3,4,8] and right as [5,9,1,2]

then recursion happens leading to [3] , [4,8] and [5,9,1,2]

merge function calls on [4,8] and check whether they are in order and from there the sorted one will be returned..

 now it will compare [3] with [4,8] and again the function will returns [3,4,8].

 These above process continues for [5,9,1,2] and once they are in order [1,2,5,9]

 they will be compared in the merge function and finally returns the sorted array.