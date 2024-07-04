function mergeSort(arr){
    if( arr.length < 2){
        return arr;
    }
    let midElem = Math.floor((arr.length)/2)
    let leftArr = arr.slice(0,midElem);
    let rightArr = arr.slice(midElem);
    return merge(mergeSort(leftArr),mergeSort(rightArr))

     function merge(left,right){
        let temp = [];

        while(left.length && right.length){
            right[0] > left[0] ? temp.push(left.shift()) : temp.push(right.shift())
        }
        return [...temp,...left,...right]

     }
}
let arr = [5,3,4,2,1,2,8,0,8,9]
console.log(mergeSort(arr))