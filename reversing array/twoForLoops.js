function reverseArray(arr){

    for(let i=0 ;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp;
        }
    }
    return arr;
    
}
let arr = [5,3,4,2,7,6,1];
console.log(reverseArray(arr));

