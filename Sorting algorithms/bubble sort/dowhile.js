function bubbleSort(arr){
    let flag ;
    let n  = arr.length;
    do{
        flag = false;
        for(let i=0;i<n-1;i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                flag = true;
            }
        }
        n--;
    }while(flag);
    return arr;
}
let arr = [5,4,3,6,2,7,1];
console.log(bubbleSort(arr));