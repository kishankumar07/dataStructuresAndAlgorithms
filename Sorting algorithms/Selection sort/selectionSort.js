function selectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let minIndex = i;
        for(let j =i+1;j<arr.length;j++){
            if(arr[minIndex] > arr[j]){
                minIndex = j;
            }
        }
        if(minIndex !== i){
            let temp = arr[i]
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}
let arr = [5,4,3,2,1,8,7,6]
console.log(selectionSort(arr));