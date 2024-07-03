== In-place sorting algorithm.

- two for loops are used

Method : first for loop will lock the first element of array, and it will check with the next elements using 2nd for loop.

before entering to the 2nd for loop, it will assigns 'i' to minIndex variable. which means the element locked to check on further is considered as the smallest element in the array . If not then in the 2nd for loop the minIndex gets replaced with that elements index.

So after the 2nd for loop the minIndex variable will be having the index of the smallest element in the array. 

In any of the iterations in 2nd for loop , the 'if' condition fails, then the locked element will still be the smallest element. Now after the 2nd for loop there is an 'if' conditition checking whether still the minIdex is 'i', if not then it get swapped with the actual minimum element in the array. 

The problem is that, the loop continues even if it was a fully sorted array..

Time compelxity : 

Best case : O (n^2) : Even if it is the sorted array, the loop takes place n(n-1)/2 times. 
Average case :O(n^2) 
worst case : O (n^2).
Space complexity : O(1) because it is an inplace sorting algorithm.