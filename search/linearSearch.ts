function linearSearch(arr:number[],target:number):number{
      for(let i=0;i<arr.length;i++){
            if(arr[i] === target){
                  return i
            }
      }
      return -1
}
const arr = [1,2,3,4,5];
console.log(linearSearch(arr,3))