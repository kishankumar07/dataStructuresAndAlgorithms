//Function to maintain the meax-heap property
function maxHeapify(arr:number[],n:number,i:number):void{
      let largest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;

      if(left<n && arr[left]>arr[largest]){
            largest = left
      }

      if(right<n && arr[right]>arr[largest]){
            largest = right;
      }
      if(largest !==i){
            [arr[largest],arr[i]]=[arr[i],arr[largest]]
            maxHeapify(arr,n,largest)
      }
}

//Starts to heapify up from the provided array
function buildMaxHeap(arr:number[]){
      let n = arr.length;
      for(let i = Math.floor(n/2)-1;i>=0;i--){
            maxHeapify(arr,n,i)
      }
}
//Helper function to find the parent Index 
function findParentIndex(index:number):number{
      return Math.floor((index-1)/2);
}
// To insert a value to the maxHeapified
function insertMaxHeap(arr:number[],value:number):void{
      arr.push(value);
      let i = arr.length - 1;

      while(i !== 0 && arr[findParentIndex(i)]<arr[i]){
            const parentIndex = findParentIndex(i);
            [arr[parentIndex],arr[i]]=[arr[i],arr[parentIndex]];
            i= parentIndex
      }
}

//To delete the root and return 
function deleteRoot(arr:number[]):null|void{
      if(arr.length===0)return null;
      arr[0] = arr[arr.length-1]
      arr.pop();
      maxHeapify(arr,arr.length,0)
}

//function to extract the maximum value
function extractMax(arr:number[]):number|null{
      if(arr.length===0)return null
      const max = arr[0]
      arr[0]= arr[arr.length-1]
      arr.pop();
      maxHeapify(arr,arr.length,0)
      return max
}

//Heap sort algorithm
function heapSort(arr:number[]):void{
      buildMaxHeap(arr);
      for(let i=arr.length-1;i>0;i--){
            [arr[0],arr[i]]=[arr[i],arr[0]];
            maxHeapify(arr,i,0)
      }
}

//-------------------------------------------------------------------------------------
const arr = [1,2,3,4,5,6];
buildMaxHeap(arr);

console.log('after the maxHeap built:');
console.log(arr);

console.log('Insert a value to the maxHeapified : ');
insertMaxHeap(arr,10);
console.log(arr);

console.log('deleting the root');
deleteRoot(arr);
console.log(arr);

console.log('extracting the max value');
extractMax(arr);
console.log(arr)

//Heap sort
console.log('lets do heap sort');
const arrNew = [1,5,2,3,7,9];
heapSort(arrNew);console.log(arrNew)