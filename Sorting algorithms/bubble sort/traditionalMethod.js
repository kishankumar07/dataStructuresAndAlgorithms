function bubbleSort(arr){
    let n = arr.length;
    let flag = false;
    for(let i=0;i<n -1;i++){
        flag = false;
        for(let j=0;j<n-1-i;j++){
            if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            flag = true;
            }
        }
        if(!flag) break;
    }
    return arr;
}
let arr = [6,4,3,2,1,5,8,7];
console.log(bubbleSort(arr));