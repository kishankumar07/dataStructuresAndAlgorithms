// Building a heap using array; also insertion at the end is also there

function maxHeapify(arr,n,i){
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

   
    if( left < n && arr[left] > arr[largest]){
        largest = left;
    }
  
    if(right < n && arr[right] > arr[largest]){
        largest = right;
    }

    
    if(largest !==i){
        [arr[i],arr[largest]]= [arr[largest],arr[i]]; 
        maxHeapify(arr,n,largest); 
    }
}
function buildMaxHeap(arr){
    let  n = arr.length;
    for(let i= Math.floor(n/2)-1;i>=0;i--){
        maxHeapify(arr,n,i)
    }
}

function insertMaxHeap(arr,key){
    arr.push(key);
    let i = arr.length-1;
    while(i !==0 && arr[Math.floor((i-1)/2)] < arr[i]){
        [arr[Math.floor((i-1)/2)],arr[i]] = [arr[i],arr[Math.floor((i-1)/2)]];
        i= Math.floor((i-1)/2)
    }
}

function deleteRoot(arr){
    let n =arr.length;
    if(n===0) return "empty heap"

    arr[0] = arr[n-1];
    arr.pop();
    maxHeapify(arr,n,0)
}

//To extract the maximum element of the maxHeap;
function extractMax(arr){
    let n = arr.length;
    let max = arr[0];
    arr[0] = arr[n-1];
    arr.pop();
    maxHeapify(arr,n,0)
}

function heapSort(arr){
    for(let i= arr.length-1;i>0;i--){
        [arr[i],arr[0]] = [arr[0],arr[i]];
        maxHeapify(arr,i,0)
    }
}



let arr = [4,10,3,5,1];
buildMaxHeap(arr);
console.log('array after building  is :::',arr);
insertMaxHeap(arr,6)
console.log('array after inserting 6 is :',arr)
deleteRoot(arr);
console.log('arrray after deleting root is :',arr)
heapSort(arr);
console.log('array after heap sort :',arr)







