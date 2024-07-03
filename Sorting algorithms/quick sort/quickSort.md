= Based on Divide and conquer alogorithm , where an element is chosen as pivot element and based on that pivot, the array is partitioned. and finally pivot is placed in the right place.

All elements smaller than the pivot are placed to left and greater ones to right..

Time complexity :
Best case - O(n logn); when selected element as pivot divides into equal arrays 
Average case - O(n logn) , same here. 
Worst case - O(n^2) - when array is already sorted.

ADVAntages:
= Divide and conquer algorithm, so more efficient as dividing into smaller sub problems and finding solution to that later finds the solution of the real problem.

= Best for larger arrays.

Disadvantages : 
= worst case O(n^2);
= not suitable for smaller arrays.

In the method to solve quickSort, note that I used for (let x of arr.slice(0,arr.length-1))
instead of for loop, and slice is used to consider the looping only till the 2nd last element as last element is already set as the pivot.
Ternary operator is also used instead of if else...

Worst case is same as bubble sort.O(n^2)
