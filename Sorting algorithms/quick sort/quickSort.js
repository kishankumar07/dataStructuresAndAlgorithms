function quickSort(arr){
    if(arr.length < 2){
        return arr;
    }
    let pivot = arr[arr.length-1];
    let leftArr = [];
    let rightArr = [];

    for(let x of arr.slice(0,arr.length-1)){
        pivot > x ? leftArr.push(x) : rightArr.push(x);
    }

    return [...quickSort(leftArr),pivot,...quickSort(rightArr)];
}
let arr = [3,4,9,8,1,2,7]
console.log(quickSort(arr));
