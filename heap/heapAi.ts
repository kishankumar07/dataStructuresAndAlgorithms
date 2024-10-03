// Max-Heapify function to maintain the heap property
function maxHeapify(arr: number[], n: number, i: number): void {
      let largest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;
  
      // Check if the left child is larger than the current largest
      if (left < n && arr[left] > arr[largest]) {
          largest = left;
      }
  
      // Check if the right child is larger than the current largest
      if (right < n && arr[right] > arr[largest]) {
          largest = right;
      }
  
      // If the largest is not the root, swap and continue heapifying
      if (largest !== i) {
          [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap
          maxHeapify(arr, n, largest); // Recursively heapify the affected subtree
      }
  }
  
  // Function to build a max-heap from an array
  function buildMaxHeap(arr: number[]): void {
      const n = arr.length;
      // Start heapifying from the last non-leaf node
      for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
          maxHeapify(arr, n, i);
      }
  }
  
  // Function to insert a new element into the max-heap
  function insertMaxHeap(arr: number[], key: number): void {
      arr.push(key); // Insert at the end of the array
      let i = arr.length - 1;
      
      // Move the new element up until the max-heap property is restored
      while (i !== 0 && arr[Math.floor((i - 1) / 2)] < arr[i]) {
          [arr[Math.floor((i - 1) / 2)], arr[i]] = [arr[i], arr[Math.floor((i - 1) / 2)]]; // Swap
          i = Math.floor((i - 1) / 2); // Move up to the parent node
      }
  }
  
  // Function to delete the root of the heap
  function deleteRoot(arr: number[]): string | void {
      const n = arr.length;
      if (n === 0) return "Empty heap"; // If the heap is empty
  
      arr[0] = arr[n - 1]; // Replace root with the last element
      arr.pop(); // Remove the last element
      maxHeapify(arr, arr.length, 0); // Heapify from the root down
  }
  
  // Function to extract the maximum element (root) from the max-heap
  function extractMax(arr: number[]): number | void {
      const n = arr.length;
      if (n === 0) return "Empty heap"; // Edge case: if the heap is empty
  
      const max = arr[0]; // The root is the maximum
      arr[0] = arr[n - 1]; // Replace root with the last element
      arr.pop(); // Remove the last element
      maxHeapify(arr, arr.length, 0); // Heapify from the root down
      return max; // Return the maximum element
  }
  
  // Function to perform heap sort
  function heapSort(arr: number[]): void {
      buildMaxHeap(arr); // Step 1: Build a max-heap from the array
  
      // Step 2: Extract elements from the heap and heapify the remaining array
      for (let i = arr.length - 1; i > 0; i--) {
          [arr[i], arr[0]] = [arr[0], arr[i]]; // Swap the root with the last element
          maxHeapify(arr, i, 0); // Heapify the reduced heap
      }
  }
  
  // Example usage of the functions
  let arr: number[] = [4, 10, 3, 5, 1];
  
  // Build the max-heap
  buildMaxHeap(arr);
  console.log('Array after building max-heap:', arr);
  
  // Insert a new key into the heap
  insertMaxHeap(arr, 6);
  console.log('Array after inserting 6 into the heap:', arr);
  
  // Delete the root from the heap
  deleteRoot(arr);
  console.log('Array after deleting root from the heap:', arr);
  
  // Perform heap sort
  heapSort(arr);
  console.log('Array after heap sort:', arr);
  