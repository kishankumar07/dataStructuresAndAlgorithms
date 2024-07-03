Insertion sort is an "in-place" sorting algorithm. which means it does not require any additional memory beyond the original array.

It will need one round full iteration  but note that the iteration stars from the 2nd element (1st index of array). 
eg: [4,2,1,5,3,6,9]
for the above array the loop iteration starts from element 2 and till 9.

Idea of approach : There are two parts to consider, one is the sorted part and the other is the unsorted part.

from the unsorted part , one element is taken and put in the right place of the sorted part.

in above example take element 2 as the first iteration , compare with 4, since  4 is greater replace 2 with 4 and so on.

How this works : 
assign the first element we are considering as unsorted element to a variable numberToSort.

initialize a variable j with value i-1.

start a while loop with 2 checking conditions, one is to check whether the j variable finished crossing the first element of the array.

the other is check whether the previous element arr[j] > numberToInsert

if both of these conditions are true then, while loop works and here is the thing happening, the next element from 'j' is replaced with the element which is right now at arr[j] ====> arr[j+1] = arr[j].

and decrement the value of j as j--. This step is crucial for checking the value previous to it.

At two cases the numberToInsert will be inserted to a position === while loop stops.

either when the j value cross the first element or previous element is smaller than the current element.

so while loop stops and insert that element to its correct position. arr[j+1] = numberToInsert.



Time complexity : Best case- O(n) if  array is already sorted.

Average case - O(n^2) if from midway the array is not sorted

worst case - O(n^2) , if reverse order.

Space complexity - O(1) because an in-place sorting algorithm and a constant memory is taken by j , which is negligible.