function selectionSort(arr:number[]):number[]{
      for(let i=0;i<arr.length-1;i++){
            let minIndex = i;
            for(let j=i+1;j<arr.length;j++){
                  if(arr[minIndex]>arr[j]){
                        minIndex = j
                  }
            }
            if(minIndex !== i){
                  let temp = arr[i];
                  arr[i] = arr[minIndex];
                  arr[minIndex] = temp;
            }
      }
      return arr;
}
console.log(selectionSort([5,4,3,2,1]))