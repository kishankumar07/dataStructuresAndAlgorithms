while changing the greater than sign to less than sign, it will be in descending order.

using a do- while loop it ensures that the inner for loop occures atleast once and in the pass if the flag is not set to true, the do while loop stops. 

in the inner for loop it loops only upto second last element same as two for loops.

after each inner for loop, the lenth value is decremented after each pass largest element of the array will be at last.. that is the n--;

even though there are two methods now, both of them has the same time and space complexity.

Time complexity - 
 Worst case =- O(n^2) when the whole array is in reversed order. 

 Average case = O (n^2) when elements are randomly arranged

 best case - O (n) , when the array is already sorted, so only one time traversal will be there to check all are sorted. 

 Space complexity : 
 Bubble sorting is an inplace sorting so no temporary array is created for the sorting process. 

 Space complexity is O (1). 
Because only a constant space for temp and flag is taken and 

Remember that bubble sorting modifies the original array instead of an additional temporary array created in between, thus it is called inplace sorting.