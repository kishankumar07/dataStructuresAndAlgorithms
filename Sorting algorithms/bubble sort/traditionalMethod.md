Traditional  method means = using two for loops, also known as the brute force method.

if length of array is 5, the outer loop runs (5-1) times i.e for length = n, the loop runs (n-1) times.

the outer for loop is the "i", and it says total passes through our array to sort.

after first pass the largest element of the array will be placed at last of array.

for each pass, after that next largest element will be placed accordingly . Finally in ascending order it will return the array from the function.

the inner for loop , in every pass will reduce the scope of iteration as in each pass of "i", the largest is placed at end so no need to compare the largest at end.

in each iteration, the current element is compared with the next immediate element.

There is a flag used, and after any pass by 'i', if after the inner for loop it founds false, then it means the array is already sorted . So breaks the for loop and return the array from the function.



Time Complexity :

Best case - O(n) = if the array is already sorted , then it is the best case ever, so only one pass is required and flag returns false, so one time only the array will iterate.
Average case - O(n^2) = case when the elements are in random order.
Worst case - O (n^2) = case when the elements are in the reverse order.


Space complexity : 


Bubble sorting is an [ in-place sorting algorithm ], so it only takes up a constant memory for flag and temp; O (1)
