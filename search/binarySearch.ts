function binarySearch(arr:number[],target:number):number{
      let left = 0;
      let right = arr.length-1;
      
      while(left<=right){
            let mid = Math.floor((left+right)/2);

            if(arr[mid]===target){
                  return mid;
            }
            if(target>arr[mid]){
                  left = mid+1;
            }else{
                  right = mid-1
            }
      }
      return -1;//not found
}
const arr = [1,2,3,4,5,6,8];
const target = 5;
console.log(binarySearch(arr,target))






// -----------------------------------------------------------------------------------------------------------------------------





//Binary search using recursion

function recursiveBinarySearch(arr:number[],target:number,left:number,right:number):number{
      //base case 
      if(left>right){
            return -1
      }
      //Calculate the middle index
      let mid = Math.floor((left+right)/2);

      if(arr[mid]===target){
            return mid;
      }

      if(arr[mid]<target){
            return recursiveBinarySearch(arr,target,mid+1,right);
      }
      else{
            return recursiveBinarySearch(arr,target,left,mid-1);
      }

}
const arr1 = [1,2,3,4,5,7];
console.log(recursiveBinarySearch(arr1,7,0,arr1.length-1))