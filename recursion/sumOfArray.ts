function recursiveSum(arr:number[],index:number=0):number{
      if(index === arr.length){
            return 0;
      }

      return arr[index]+recursiveSum(arr,index+1)
}
const arr= [1,2,3,4,5];
console.log(recursiveSum(arr))